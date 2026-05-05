"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const pricing = {
  modification: 50,
  correction: 100,
  audit: 150,
  landing: 250,
  vitrineStarterLancement: 600,
  vitrineStarterClassique: 900,
  vitrineComplet: 1200,
  surMesure: null,
  maintenanceEssentielle: 29,
  maintenancePro: 59,
  suiviBusiness: 99,
};

const typeLabels: Record<string, string> = {
  modification: "Modification simple",
  correction: "Correction / amélioration ciblée",
  audit: "Audit express",
  landing: "Landing page",
  vitrineStarterLancement: "Site vitrine starter — offre de lancement",
  vitrineStarterClassique: "Site vitrine starter — tarif classique",
  vitrineComplet: "Site vitrine complet",
  surMesure: "Projet web sur mesure",
  maintenanceEssentielle: "Maintenance essentielle",
  maintenancePro: "Maintenance pro",
  suiviBusiness: "Suivi business",
};

const offerDetails: Record<string, string[]> = {
  vitrineStarterLancement: [
    "Offre spéciale de lancement prolongée",
    "Valable pendant 7 jours ",
    "ou pour les 10 premiers projets validés",
    "Site vitrine professionnel",
    "Structure claire et responsive",
    "Pages essentielles incluses",
    "Formulaire de contact",
    "SEO de base",
    "Prix réduit par rapport au tarif classique",
  ],
  vitrineStarterClassique: [
    "Site vitrine professionnel",
    "Structure claire et responsive",
    "Pages essentielles incluses",
    "Formulaire de contact",
    "SEO de base",
    "Tarif classique hors offre de lancement",
  ],
  vitrineComplet: [
    "Site vitrine plus complet",
    "Plusieurs pages de présentation",
    "Structure SEO renforcée",
    "Responsive premium",
    "Accompagnement plus poussé",
  ],
};

export default function QuoteSimulator() {
  const [type, setType] = useState("landing");
  const [pages, setPages] = useState(1);
  const [contactForm, setContactForm] = useState(false);
  const [seo, setSeo] = useState(false);
  const [responsivePremium, setResponsivePremium] = useState(false);
  const [express, setExpress] = useState(false);

  const result = useMemo(() => {
    const base = pricing[type as keyof typeof pricing];

    if (type === "surMesure") {
      return { label: "Sur devis", eta: "À définir", mode: "Sur mesure" };
    }

    if (
      type === "maintenanceEssentielle" ||
      type === "maintenancePro" ||
      type === "suiviBusiness"
    ) {
      return { label: `${base} € HT/mois`, eta: "Continu", mode: "Abonnement" };
    }

    let total = Number(base);
    total += (pages - 1) * 50;
    if (contactForm) total += 80;
    if (seo) total += 150;
    if (responsivePremium) total += 100;
    if (express) total += 180;

    return {
      label: `${total} € HT`,
      eta: express ? "1-2 jours" : "3-5 jours",
      mode: express ? "Express" : "Standard",
    };
  }, [type, pages, contactForm, seo, responsivePremium, express]);

  const summary = useMemo(() => {
    const options = [
      `Pages : ${pages}`,
      contactForm && "Formulaire de contact",
      seo && "SEO de base",
      responsivePremium && "Responsive premium",
      express && "Délai express",
    ].filter(Boolean);

    return [
      "DEVORA — Estimation",
      `Type : ${typeLabels[type]}`,
      `Délai : ${result.eta} (${result.mode})`,
      "",
      "Options :",
      ...options.map((option) => `- ${option}`),
      ...(offerDetails[type]
        ? ["", "Inclus dans l’offre :", ...offerDetails[type].map((item) => `- ${item}`)]
        : []),
      "",
      result.label === "Sur devis"
        ? "Total : Sur devis (échange nécessaire)"
        : `Total estimatif : ${result.label}`,
    ].join("\n");
  }, [type, pages, contactForm, seo, responsivePremium, express, result]);

  const contactUrl = `/contact?devis=${encodeURIComponent(summary)}`;

  function resetOptions() {
    setPages(1);
    setContactForm(false);
    setSeo(false);
    setResponsivePremium(false);
    setExpress(false);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-[#C9D7FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#173C91]">
          Simulateur de devis
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-6xl">
          Estimez votre projet web
          <br />
          en moins de 30 secondes
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#475569]">
          Obtenez une estimation indicative hors taxes pour une landing page,
          un site vitrine, une maintenance ou un projet sur mesure.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#061A35]">1) Type de projet</h2>

          <label className="mt-6 block">
            <span className="text-sm font-medium text-[#64748B]">Type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] px-4 py-3 text-[#061A35]"
            >
              {Object.entries(typeLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <p className="mt-2 text-sm text-[#64748B]">
            L’offre de lancement est prolongée 7 jours et limitée aux 10 premiers projets validés.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-[#061A35]">2) Options</h2>

          <label className="mt-6 block">
            <span className="text-sm font-medium text-[#64748B]">Nombre de pages</span>
            <input
              type="number"
              min={1}
              max={10}
              value={pages}
              onChange={(e) => setPages(Math.min(10, Math.max(1, Number(e.target.value))))}
              className="mt-2 w-full rounded-2xl border border-[#061A35]/10 bg-[#F8FAFC] px-4 py-3 text-[#061A35]"
            />
          </label>

          <div className="mt-6 space-y-3 text-[#061A35]">
            {[
              ["Formulaire de contact", contactForm, setContactForm],
              ["SEO de base", seo, setSeo],
              ["Responsive premium", responsivePremium, setResponsivePremium],
              ["Délai express", express, setExpress],
            ].map(([label, value, setter]) => (
              <label key={String(label)} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => (setter as (v: boolean) => void)(e.target.checked)}
                  className="accent-[#173C91]"
                />
                <span>{String(label)}</span>
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={resetOptions}
            className="mt-6 inline-flex rounded-full border border-[#061A35]/10 bg-white px-6 py-3 text-center font-semibold text-[#061A35] transition hover:bg-[#F4FAFC]"
          >
            Réinitialiser les options
          </button>
        </div>

        <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#061A35]">Résultat</h2>

          <div className="mt-6 rounded-3xl border border-[#061A35]/10 bg-linear-to-br from-[#F4FAFC] to-white p-6">
            <p className="text-sm text-[#64748B]">Estimation</p>
            <p className="mt-2 text-4xl font-extrabold text-[#061A35]">{result.label}</p>
            <p className="mt-3 text-sm text-[#64748B]">
              Estimation indicative hors taxes — TVA applicable selon la situation.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-[#334155]">
              <p>Délai : {result.eta}</p>
              <p>Mode : {result.mode}</p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#061A35]">Résumé</h3>
          <pre className="mt-3 min-h-40 overflow-auto whitespace-pre-wrap rounded-3xl border border-[#061A35]/10 bg-[#F8FBFF] p-5 text-sm text-[#061A35]">
            {summary}
          </pre>

          <Link
            href={contactUrl}
            className="mt-6 block w-full rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-6 py-4 text-center font-bold text-white shadow-sm transition hover:brightness-110"
          >
            Demander mon devis personnalisé
          </Link>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-4 block w-full rounded-full border border-[#061A35]/10 bg-white px-6 py-3 text-center font-semibold text-[#061A35] transition hover:bg-[#F4FAFC]"
          >
            Modifier mon estimation
          </a>
        </div>
      </div>
    </section>
  );
}