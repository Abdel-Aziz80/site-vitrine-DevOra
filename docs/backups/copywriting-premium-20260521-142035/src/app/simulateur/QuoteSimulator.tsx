"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import { trackConversion } from "@/lib/tracking";

const needs = {
  sentinel: {
    label: "DEVORA Sentinel / sécurité défensive",
    price: "Early Access ou sur devis",
    eta: "Validation manuelle",
    offer: "Démo privée Sentinel",
    score: 5,
  },
  iaLocale: {
    label: "IA locale ou copilote IA",
    price: "Sur devis",
    eta: "Cadrage nécessaire",
    offer: "Atelier IA local-first",
    score: 5,
  },
  dashboard: {
    label: "Dashboard métier / cockpit business",
    price: "Sur devis",
    eta: "2 à 6 semaines selon périmètre",
    offer: "Cadrage dashboard",
    score: 4,
  },
  automation: {
    label: "Automatisation business / workflow IA",
    price: "Sur devis",
    eta: "1 à 4 semaines",
    offer: "Automatisation ciblée",
    score: 4,
  },
  saas: {
    label: "MVP SaaS / plateforme business",
    price: "Sur devis",
    eta: "4 à 10 semaines",
    offer: "Prototype SaaS",
    score: 5,
  },
  commerce: {
    label: "E-commerce digital / cockpit commerce",
    price: "300€ HT à sur devis",
    eta: "1 à 6 semaines",
    offer: "Landing ou Commerce OS",
    score: 3,
  },
  conversion: {
    label: "SEO, conversion ou campagne",
    price: "150€ à 600€ HT",
    eta: "2 à 15 jours",
    offer: "Audit, landing ou plateforme starter",
    score: 2,
  },
  maintenance: {
    label: "Maintenance, refonte ou amélioration",
    price: "29€ HT/mois à sur devis",
    eta: "Continu ou ponctuel",
    offer: "Maintenance / optimisation",
    score: 2,
  },
};

const optionLabels = {
  localAi: "IA locale / traitement privé",
  businessDashboard: "Dashboard ou cockpit business",
  automation: "Workflow automatisé",
  security: "Monitoring / sécurité défensive",
  earlyAccess: "Early Access DEVORA Sentinel",
  seo: "Audit SEO technique",
  conversion: "Optimisation conversion / CTA",
  ecommerce: "E-commerce digital",
  desktop: "Application desktop ou local-first",
  privateDemo: "Démo privée plutôt qu'exposition publique",
};

const maturityLabels = {
  idea: "Idée à cadrer",
  existing: "Projet ou site existant",
  urgent: "Besoin urgent avant campagne",
  product: "Produit à structurer sérieusement",
};

export default function QuoteSimulator() {
  const [need, setNeed] = useState<keyof typeof needs>("dashboard");
  const [maturity, setMaturity] = useState<keyof typeof maturityLabels>("existing");
  const [budget, setBudget] = useState("unknown");
  const [timeline, setTimeline] = useState("normal");
  const [options, setOptions] = useState<Record<keyof typeof optionLabels, boolean>>({
    localAi: false,
    businessDashboard: true,
    automation: false,
    security: false,
    earlyAccess: false,
    seo: false,
    conversion: true,
    ecommerce: false,
    desktop: false,
    privateDemo: true,
  });

  const result = useMemo(() => {
    const selected = Object.entries(options)
      .filter(([, value]) => value)
      .map(([key]) => key as keyof typeof optionLabels);

    let score = needs[need].score;
    if (options.localAi) score += 2;
    if (options.security || options.earlyAccess) score += 2;
    if (options.automation) score += 1;
    if (options.businessDashboard) score += 1;
    if (maturity === "urgent") score += 1;
    if (maturity === "product") score += 2;

    const orientation =
      options.earlyAccess || need === "sentinel"
        ? "Priorité : qualifier l'accès DEVORA Sentinel, vérifier la compatibilité et réserver une démo privée."
        : score >= 8
          ? "Priorité : cadrage produit court avant chiffrage, avec démo privée et périmètre contrôlé."
          : score >= 5
            ? "Priorité : construire une première version utile, mesurable et orientée conversion."
            : "Priorité : corriger le parcours public, clarifier le message et renforcer les CTA.";

    return {
      ...needs[need],
      selected,
      score,
      orientation,
      recommendation:
        options.privateDemo || options.security || options.localAi
          ? "Visibilité publique limitée, démonstration détaillée en rendez-vous."
          : "Parcours public optimisé, CTA contact et maillage vers les offres.",
    };
  }, [need, options, maturity]);

  const summary = useMemo(() => {
    const selectedOptions = result.selected.map((key) => `- ${optionLabels[key]}`);

    return [
      "DEVORA - Préqualification besoin",
      `Besoin principal : ${needs[need].label}`,
      `Maturité : ${maturityLabels[maturity]}`,
      `Budget indiqué : ${budget}`,
      `Timing : ${timeline}`,
      `Orientation : ${result.offer}`,
      `Budget repère : ${result.price}`,
      `Délai repère : ${result.eta}`,
      "",
      "Modules utiles :",
      ...selectedOptions,
      "",
      result.orientation,
      result.recommendation,
    ].join("\n");
  }, [budget, maturity, need, result, timeline]);

  const contactUrl = `/contact?devis=${encodeURIComponent(summary)}`;

  function toggleOption(key: keyof typeof optionLabels) {
    setOptions((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <section className="relative overflow-hidden">
      <div className="devora-dark-section relative px-6 py-20 text-white">
        <CodeAtmosphere />
        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-[#A5F3FC]">
            Simulateur DEVORA
          </span>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Préqualifiez votre besoin IA, business, SaaS ou Sentinel.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/74">
            Le simulateur ne remplace pas un devis. Il sert à détecter le bon
            angle : audit, landing, cockpit métier, automatisation, MVP SaaS,
            IA locale, application desktop ou Early Access DEVORA Sentinel.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-[#061A35]/10 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#061A35]">1. Besoin principal</h2>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-[#64748B]">Type de besoin</span>
            <select
              value={need}
              onChange={(event) => setNeed(event.target.value as keyof typeof needs)}
              className="mt-2 w-full rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] px-4 py-3 text-[#061A35] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
            >
              {Object.entries(needs).map(([value, item]) => (
                <option key={value} value={value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-[#64748B]">Maturité</span>
              <select
                value={maturity}
                onChange={(event) => setMaturity(event.target.value as keyof typeof maturityLabels)}
                className="mt-2 w-full rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] px-4 py-3 text-[#061A35] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
              >
                {Object.entries(maturityLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#64748B]">Timing</span>
              <select
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] px-4 py-3 text-[#061A35] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
              >
                <option value="normal">Standard</option>
                <option value="campaign">Avant campagne / lancement</option>
                <option value="urgent">Urgent</option>
                <option value="roadmap">Roadmap produit</option>
              </select>
            </label>
          </div>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-[#64748B]">Budget ou enveloppe</span>
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] px-4 py-3 text-[#061A35] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
            >
              <option value="unknown">À définir</option>
              <option value="moins de 600€">Moins de 600€</option>
              <option value="600€ à 1500€">600€ à 1500€</option>
              <option value="1500€ à 5000€">1500€ à 5000€</option>
              <option value="5000€+">5000€+</option>
            </select>
          </label>

          <h2 className="mt-8 text-2xl font-bold text-[#061A35]">2. Modules utiles</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {Object.entries(optionLabels).map(([key, label]) => (
              <label
                key={key}
                className="flex min-h-14 items-center gap-3 rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] p-4 text-sm font-semibold text-[#334155]"
              >
                <input
                  type="checkbox"
                  checked={options[key as keyof typeof optionLabels]}
                  onChange={() => toggleOption(key as keyof typeof optionLabels)}
                  className="h-4 w-4 shrink-0 accent-[#2563EB]"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#061A35]/10 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-[#061A35]">Orientation DEVORA</h2>
          <div className="mt-6 rounded-[1.25rem] border border-[#2563EB]/15 bg-linear-to-br from-[#EFF6FF] via-white to-[#ECFEFF] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2563EB]">
              {result.offer}
            </p>
            <p className="mt-3 text-4xl font-extrabold text-[#061A35]">
              {result.price}
            </p>
            <p className="mt-3 text-sm font-semibold text-[#64748B]">
              Délai repère : {result.eta}
            </p>
            <p className="mt-5 leading-7 text-[#334155]">{result.orientation}</p>
            <p className="mt-3 rounded-2xl bg-white/80 p-4 text-sm font-semibold text-[#173C91]">
              {result.recommendation}
            </p>
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#061A35]">Brief généré</h3>
          <pre className="mt-3 min-h-52 overflow-auto whitespace-pre-wrap rounded-[1.25rem] border border-[#061A35]/10 bg-[#F8FBFF] p-5 text-sm leading-6 text-[#061A35]">
            {summary}
          </pre>

          <Link
            href={contactUrl}
            onClick={() =>
              trackConversion({
                name: "cta_simulator_contact",
                label: needs[need].label,
                page: window.location.pathname,
              })
            }
            className="mt-6 block w-full rounded-full bg-linear-to-r from-[#061A35] via-[#2563EB] to-[#22D3EE] px-6 py-4 text-center font-bold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
          >
            Envoyer ce brief à DEVORA
          </Link>

          <Link
            href="/portfolio/devora-sentinel#early-access"
            className="mt-4 block w-full rounded-full border border-[#2563EB]/20 bg-white px-6 py-3 text-center font-semibold text-[#173C91] transition hover:bg-[#EFF6FF]"
          >
            Accéder à l&apos;Early Access Sentinel
          </Link>
        </div>
      </div>
    </section>
  );
}
