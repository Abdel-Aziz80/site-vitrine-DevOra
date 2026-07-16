import type { Metadata } from "next";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import {
  creationOffers,
  maintenanceOffers,
  // processSteps,
  quickOffers,
  trustPillars,
} from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Services DEVORA - sites, outils métier, IA utile et Sentinel",
  description:
    "Services DEVORA : sites premium, pages de vente, tableaux de pilotage, automatisations utiles, outils internes, e-commerce, Sentinel, SEO et conversion.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services sites, outils métier, IA utile et Sentinel | DEVORA",
    description:
      "Sites premium, outils métier, automatisations utiles, e-commerce, Sentinel, SEO et maintenance avec un cadrage clair.",
    url: "/services",
  },
};

const deliverables = [
  "Message clair pour expliquer l'offre",
  "Design lisible sur mobile, tablette et desktop",
  "Formulaire ou bouton de contact visible",
  "Titres et descriptions compréhensibles pour Google",
  "Mise en ligne accompagnée",
  "Conseils après livraison pour continuer à avancer",
];

const customServices = [
  {
    title: "Site premium ou première version d'outil",
    text: "Une base claire pour présenter une offre, tester une idée, remplacer un tableur ou lancer un outil métier simple.",
  },
  {
    title: "Tableau de pilotage business",
    text: "Une interface pour suivre vos clients, vos projets, vos ventes, vos commandes ou vos priorités au même endroit.",
  },
  {
    title: "Automatisation et IA utile",
    text: "Des aides concrètes pour trier des demandes, préparer des réponses, générer un résumé ou réduire les tâches répétitives.",
  },
  {
    title: "Sentinel et outils privés",
    text: "Des interfaces protégées pour surveiller des signaux sensibles, prioriser des alertes et réserver les détails aux démonstrations privées.",
  },
];

export default function Services() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-white">
        <CodeAtmosphere />
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            Services DEVORA
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Des services pour rendre votre activité plus claire, plus rapide et plus facile à piloter.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
            DEVORA accompagne les activités qui veulent mieux présenter leur offre,
            suivre leurs demandes, gagner du temps sur les tâches répétitives ou
            protéger certains outils internes derrière une démonstration privée.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_services_hero_contact"
              eventLabel="Services devis"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
            >
              Expliquer mon besoin
            </TrackedLink>
            <Link
              href="/offre"
              className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/12"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {customServices.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/12 bg-white/[0.075] p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {creationOffers.map((offer) => (
              <article
                key={offer.title}
                className="rounded-4xl border border-white/12 bg-white/[0.075] p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
                  {offer.tag}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  {offer.title}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-[#67E8F9]">
                  {offer.price}
                </p>
                <p className="mt-4 leading-7 text-white/70">{offer.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/72">
                  {offer.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
              Inclus selon l&apos;offre
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Une base exploitable, pas une simple page posée en ligne.
            </h2>
            <div className="mt-7 grid gap-3">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.07] p-4 text-white/72">
                  <span className="font-semibold text-[#67E8F9]">✓ </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
              Petites interventions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Corriger vite ce qui freine vos prospects.
            </h2>
            <div className="mt-7 grid gap-4">
              {quickOffers.map((offer) => (
                <div key={offer.title} className="rounded-2xl bg-white/[0.07] p-5">
                  <p className="font-bold text-[#67E8F9]">{offer.price}</p>
                  <h3 className="mt-1 font-semibold text-white">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    {offer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
              Maintenance
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Garder une présence fiable après la mise en ligne.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {maintenanceOffers.map((offer) => (
              <article key={offer.title} className="rounded-3xl bg-white/[0.075] p-6 shadow-sm">
                <p className="font-bold text-[#67E8F9]">{offer.price}</p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {offer.title}
                </h3>
                <p className="mt-3 leading-7 text-white/70">{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {trustPillars.map((pillar) => (
              <article key={pillar.title}>
                <h2 className="text-xl font-bold text-white">
                  {pillar.title}
                </h2>
                <p className="mt-3 leading-7 text-white/70">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl rounded-4xl bg-[#061A35] p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Vous ne savez pas quelle prestation choisir ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Expliquez simplement le contexte, l&apos;objectif et les contraintes.
            DEVORA vous oriente vers une correction rapide, une page de vente,
            un tableau de pilotage, une automatisation ou une démonstration privée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_services_final_contact"
              eventLabel="Services final"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white transition hover:brightness-110"
            >
              Obtenir un avis clair
            </TrackedLink>
            <Link
              href="/simulateur"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Utiliser le simulateur
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
