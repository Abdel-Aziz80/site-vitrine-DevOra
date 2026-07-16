import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const fallbackContactEmail =
  process.env.DEVORA_CONTACT_EMAIL || "contact@devora-freelance.fr";

const alexCoreEndpoint =
  process.env.ALEXCORE_EARLY_ACCESS_URL ||
  (process.env.ALEXCORE_API_URL
    ? `${process.env.ALEXCORE_API_URL.replace(/\/$/, "")}/api/devora/sentinel/early-access`
    : "");

type SentinelEarlyAccessPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  os?: unknown;
  pcYear?: unknown;
  ramGb?: unknown;
  customTheme?: unknown;
  themeColors?: unknown;
  usage?: unknown;
  consent?: unknown;
};

function text(value: unknown, max = 800) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailto(
  email: string,
  lead: {
    name: string;
    email: string;
    company: string;
    phone: string;
    os: string;
    pcYear: string;
    ramGb: string;
    customTheme: boolean;
    themeColors: string;
    usage: string;
  }
) {
  const subject = encodeURIComponent("Early Access DEVORA Sentinel - 1 mois");
  const body = encodeURIComponent(
    [
      "Bonjour,",
      "",
      "Je souhaite rejoindre l'Early Access DEVORA Sentinel.",
      "",
      `Nom : ${lead.name}`,
      `Email : ${lead.email}`,
      `Compte / organisation : ${lead.company || "non precise"}`,
      `Telephone : ${lead.phone || "non precise"}`,
      `OS : ${lead.os || "non precise"}`,
      `Annee PC : ${lead.pcYear || "non precise"}`,
      `RAM : ${lead.ramGb || "non precise"}`,
      `Option theme personnalise : ${lead.customTheme ? "oui" : "non"}`,
      `Couleurs souhaitees : ${lead.themeColors || "non precisees"}`,
      "",
      "Usage prevu :",
      lead.usage,
      "",
      "Merci.",
    ].join("\n")
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/early-access/sentinel",
    alexCoreConfigured: Boolean(alexCoreEndpoint),
    contactEmail: fallbackContactEmail,
  });
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as SentinelEarlyAccessPayload | null;

  if (!payload) {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = text(payload.name, 120);
  const email = text(payload.email, 180).toLowerCase();
  const usage = text(payload.usage, 1600);
  const consent = payload.consent === true;

  if (!name || !isEmail(email) || !usage || !consent) {
    return NextResponse.json(
      {
        ok: false,
        error: "missing_required_fields",
        required: ["name", "email", "usage", "consent"],
      },
      { status: 400 }
    );
  }

  const lead = {
    source: "devora-site",
    product: "DEVORA Sentinel",
    offer: "early_access_1_month_50_places",
    contactEmail: fallbackContactEmail,
    receivedAt: new Date().toISOString(),
    lead: {
      name,
      email,
      company: text(payload.company, 160),
      phone: text(payload.phone, 80),
      os: text(payload.os, 120),
      pcYear: text(payload.pcYear, 20),
      ramGb: text(payload.ramGb, 20),
      customTheme: payload.customTheme === true,
      themeColors: text(payload.themeColors, 500),
      usage,
    },
    routing: {
      notifyOwnerOnPhone: true,
      manualActivationRequired: true,
      maxSeats: 50,
      trialDuration: "1 month",
    },
  };

  if (alexCoreEndpoint) {
    try {
      const response = await fetch(alexCoreEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ALEXCORE_API_TOKEN
            ? { Authorization: `Bearer ${process.env.ALEXCORE_API_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(7000),
      });

      if (response.ok) {
        return NextResponse.json({
          ok: true,
          status: "sent_to_alexcore",
          contactEmail: fallbackContactEmail,
        });
      }

      return NextResponse.json(
        {
          ok: true,
          status: "alexcore_rejected",
          alexCoreStatus: response.status,
          contactEmail: fallbackContactEmail,
          mailto: buildMailto(fallbackContactEmail, lead.lead),
        },
        { status: 202 }
      );
    } catch {
      return NextResponse.json(
        {
          ok: true,
          status: "alexcore_unreachable",
          contactEmail: fallbackContactEmail,
          mailto: buildMailto(fallbackContactEmail, lead.lead),
        },
        { status: 202 }
      );
    }
  }

  return NextResponse.json(
    {
      ok: true,
      status: "alexcore_not_configured",
      contactEmail: fallbackContactEmail,
      mailto: buildMailto(fallbackContactEmail, lead.lead),
    },
    { status: 202 }
  );
}
