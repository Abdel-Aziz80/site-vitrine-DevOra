"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import { trackConversion } from "@/lib/tracking";

const needs = {
  sentinel: {
    label: "Surveiller des alertes locales avec DEVORA Sentinel",
    price: "Early Access ou sur devis",
    eta: "Validation manuelle",
    offer: "Démonstration privée Sentinel",
    score: 5,
  },
  iaLocale: {
    label: "Utiliser une IA locale ou un assistant métier",
    price: "Sur devis",
    eta: "Cadrage nécessaire",
    offer: "Cadrage IA privée",
    score: 5,
  },
  dashboard: {
    label: "Suivre clients, ventes ou priorités dans un tableau clair",
    price: "Sur devis",
    eta: "2 à 6 semaines selon périmètre",
    offer: "Cadrage tableau de pilotage",
    score: 4,
  },
  automation: {
    label: "Réduire des tâches répétitives",
    price: "Sur devis",
    eta: "1 à 4 semaines",
    offer: "Automatisation ciblée",
    score: 4,
  },
  saas: {
    label: "Créer une première version d'outil métier",
    price: "Sur devis",
    eta: "4 à 10 semaines",
    offer: "Première version d'outil",
    score: 5,
  },
  commerce: {
    label: "Mieux piloter une activité e-commerce",
    price: "300€ HT à sur devis",
    eta: "1 à 6 semaines",
    offer: "Page de vente ou outil commerce",
    score: 3,
  },
  conversion: {
    label: "Améliorer une page, le SEO ou une campagne",
    price: "150€ à 600€ HT",
    eta: "2 à 15 jours",
    offer: "Audit, page de vente ou site starter",
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
  localAi: "IA locale ou traitement privé",
  businessDashboard: "Tableau de pilotage business",
  automation: "Tâches répétitives à automatiser",
  security: "Surveillance ou alertes défensives",
  earlyAccess: "Early Access DEVORA Sentinel",
  seo: "Audit de visibilité Google",
  conversion: "Amélioration des messages et boutons",
  ecommerce: "Vente en ligne ou catalogue",
  desktop: "Application locale ou ordinateur",
  privateDemo: "Démonstration privée",
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
        ? "Priorité : qualifier l'accès DEVORA Sentinel, vérifier la compatibilité et réserver une démonstration privée."
        : score >= 8
          ? "Priorité : cadrer une première version utile avant chiffrage, avec une démonstration privée si le sujet est sensible."
          : score >= 5
            ? "Priorité : construire une version simple, utile et mesurable pour gagner du temps ou mieux convertir."
            : "Priorité : clarifier le message, corriger les freins visibles et rendre le contact plus évident.";

    return {
      ...needs[need],
      selected,
      score,
      orientation,
      recommendation:
        options.privateDemo || options.security || options.localAi
          ? "Visibilité publique limitée, démonstration détaillée en rendez-vous."
          : "Parcours public optimisé, boutons de contact visibles et liens vers les offres utiles.",
    };
  }, [need, options, maturity]);

  const summary = useMemo(() => {
    const selectedOptions = result.selected.map((key) => `- ${optionLabels[key]}`);

    return [
      "DEVORA - Préqualification du besoin",
      `Besoin principal : ${needs[need].label}`,
      `Maturité : ${maturityLabels[maturity]}`,
      `Budget indiqué : ${budget}`,
      `Timing : ${timeline}`,
      `Orientation : ${result.offer}`,
      `Budget repère : ${result.price}`,
      `Délai repère : ${result.eta}`,
      "",
      "Éléments utiles :",
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
            Identifiez le bon point de départ pour votre projet.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/74">
            En moins d&apos;une minute, indiquez votre besoin : mieux vendre,
            suivre votre activité, automatiser une tâche, lancer un outil ou
            demander un accès DEVORA Sentinel.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-white">1. Besoin principal</h2>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-white/58">Type de besoin</span>
            <select
              value={need}
              onChange={(event) => setNeed(event.target.value as keyof typeof needs)}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
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
              <span className="text-sm font-semibold text-white/58">Maturité</span>
              <select
                value={maturity}
                onChange={(event) => setMaturity(event.target.value as keyof typeof maturityLabels)}
                className="mt-2 w-full rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
              >
                {Object.entries(maturityLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-white/58">Timing</span>
              <select
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
              >
                <option value="normal">Standard</option>
                <option value="campaign">Avant campagne / lancement</option>
                <option value="urgent">Urgent</option>
                <option value="roadmap">Roadmap produit</option>
              </select>
            </label>
          </div>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-white/58">Budget ou enveloppe</span>
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFEFFF]"
            >
              <option value="unknown">À définir</option>
              <option value="moins de 600€">Moins de 600€</option>
              <option value="600€ à 1500€">600€ à 1500€</option>
              <option value="1500€ à 5000€">1500€ à 5000€</option>
              <option value="5000€+">5000€+</option>
            </select>
          </label>

          <h2 className="mt-8 text-2xl font-bold text-white">2. Ce qui vous aiderait</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {Object.entries(optionLabels).map(([key, label]) => (
              <label
                key={key}
                className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.07] p-4 text-sm font-semibold text-white/72"
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

        <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-white">Orientation DEVORA</h2>
          <div className="mt-6 rounded-[1.25rem] border border-white/12 bg-white/[0.07] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#67E8F9]">
              {result.offer}
            </p>
            <p className="mt-3 text-4xl font-extrabold text-white">
              {result.price}
            </p>
            <p className="mt-3 text-sm font-semibold text-white/58">
              Délai repère : {result.eta}
            </p>
            <p className="mt-5 leading-7 text-white/72">{result.orientation}</p>
            <p className="mt-3 rounded-2xl bg-white/[0.08] p-4 text-sm font-semibold text-[#67E8F9]">
              {result.recommendation}
            </p>
          </div>

          <h3 className="mt-6 text-xl font-bold text-white">Résumé à envoyer</h3>
          <pre className="mt-3 min-h-52 overflow-auto whitespace-pre-wrap rounded-[1.25rem] border border-white/12 bg-white/[0.07] p-5 text-sm leading-6 text-white">
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
            Envoyer ce résumé à DEVORA
          </Link>

          <Link
            href="/portfolio/devora-sentinel#early-access"
            className="mt-4 block w-full rounded-full border border-[#2563EB]/20 bg-white/[0.075] px-6 py-3 text-center font-semibold text-[#67E8F9] transition hover:bg-white/[0.07]"
          >
            Accéder à l&apos;Early Access Sentinel
          </Link>
        </div>
      </div>
    </section>
  );
}
