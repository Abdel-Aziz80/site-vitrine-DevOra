"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/siteContent";

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string; mailto?: string }
  | { status: "error"; message: string };

const hexVideoUrl = "https://www.youtube.com/results?search_query=comment+trouver+copier+code+couleur+hex";
const hexPickerUrl = "https://htmlcolorcodes.com/color-picker/";

export default function SentinelEarlyAccessForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState({ status: "loading" });

    const response = await fetch("/api/early-access/sentinel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        phone: data.get("phone"),
        os: data.get("os"),
        pcYear: data.get("pcYear"),
        ramGb: data.get("ramGb"),
        customTheme: data.get("customTheme") === "on",
        themeColors: data.get("themeColors"),
        usage: data.get("usage"),
        consent: data.get("consent") === "on",
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
      setState({
        status: "error",
        message: "La demande n'a pas pu être envoyée. Vous pouvez utiliser l'email professionnel juste en dessous.",
      });
      return;
    }

    const connected = result.status === "sent_to_alexcore";
    setState({
      status: "success",
      message: connected
        ? "Demande transmise. Elle sera relue avant activation manuelle."
        : "Demande préparée. L'email de secours reste disponible si vous voulez l'envoyer directement.",
      mailto: result.mailto,
    });

    if (connected) {
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Nom
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder="Votre nom"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder="vous@email.com"
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Compte / organisation
          <input
            name="company"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder="Nom du compte, entreprise, perso..."
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Téléphone
          <input
            name="phone"
            autoComplete="tel"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder="Optionnel"
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          OS
          <select
            name="os"
            className="rounded-xl border border-white/10 bg-[#10213f] px-4 py-3 text-white outline-none transition focus:border-[#22D3EE]/70"
            defaultValue=""
          >
            <option value="" disabled>
              Choisir
            </option>
            <option>Windows 11</option>
            <option>Windows 10</option>
            <option>Linux x64</option>
            <option>macOS</option>
            <option>Autre</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Année PC
          <input
            name="pcYear"
            inputMode="numeric"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder="2020+"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          RAM
          <input
            name="ramGb"
            inputMode="numeric"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder="8 Go, 16 Go..."
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white/82">
        Usage prévu
        <textarea
          required
          name="usage"
          rows={4}
          className="resize-y rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
          placeholder="Décrivez votre usage : poste perso, studio, homelab, TPE, surveillance dev..."
          aria-describedby="sentinel-privacy-note"
        />
      </label>
      <p id="sentinel-privacy-note" className="text-sm leading-6 text-white/58">
        Décrivez uniquement le contexte utile. DEVORA ne demande pas de clé, secret,
        mot de passe ou donnée sensible dans ce formulaire.
      </p>
      <div className="grid gap-3 rounded-xl border border-white/10 bg-white/6 p-4">
        <label className="flex gap-3 text-sm leading-6 text-white/72">
          <input name="customTheme" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#22D3EE]" />
          <span>
            Je suis intéressé par l&apos;option thème personnalisé DEVORA Sentinel.
          </span>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Couleurs souhaitées
          <textarea
            name="themeColors"
            rows={4}
            className="resize-y rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#22D3EE]/70"
            placeholder={"Copiez une liste simple :\nFond : #061A35\nAccent : #22D3EE\nSecondaire : #7C3AED"}
          />
        </label>
        <p className="text-xs leading-5 text-white/50">
          Format attendu : nom du compte + liste de couleurs copiées. Exemple : `Fond #061A35, bouton #22D3EE, accent #7C3AED`.
          L&apos;option est facturable séparément.
          {" "}
          <a className="font-semibold text-[#22D3EE]" href={hexVideoUrl} target="_blank" rel="noreferrer">
            Voir comment trouver et copier un code HEX
          </a>
          {" · "}
          <a className="font-semibold text-[#22D3EE]" href={hexPickerUrl} target="_blank" rel="noreferrer">
            Trouver un code HEX
          </a>
        </p>
      </div>
      <label className="flex gap-3 rounded-xl border border-white/10 bg-white/6 p-4 text-sm leading-6 text-white/72">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#22D3EE]" />
        <span>
          J&apos;accepte d&apos;être contacté au sujet de l&apos;Early Access DEVORA Sentinel. Accès limité à 50 personnes,
          1 mois inclus, activation manuelle. Aucune activation ne se fait sans validation humaine.
        </span>
      </label>
      <button
        type="submit"
        disabled={state.status === "loading"}
        className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-6 py-3 text-center font-semibold text-white transition hover:bg-white/[0.07] disabled:cursor-wait disabled:opacity-70"
      >
        {state.status === "loading" ? "Envoi de la demande..." : "Envoyer la demande"}
      </button>
      <p className="text-sm leading-6 text-white/62">
        Secours direct :{" "}
        <a className="font-semibold text-[#22D3EE]" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>
      {state.status === "success" ? (
        <div className="rounded-xl border border-[#35F0A1]/25 bg-[#35F0A1]/10 p-4 text-sm leading-6 text-[#D7FFE9]">
          {state.message}
          {state.mailto ? (
            <a className="mt-2 block font-semibold text-[#22D3EE]" href={state.mailto}>
              Ouvrir l&apos;email de secours
            </a>
          ) : null}
        </div>
      ) : null}
      {state.status === "error" ? (
        <div className="rounded-xl border border-red-300/25 bg-red-500/10 p-4 text-sm leading-6 text-red-100">
          {state.message}
        </div>
      ) : null}
    </form>
  );
}
