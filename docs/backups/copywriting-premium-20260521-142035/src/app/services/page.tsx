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
  title: "Services DEVORA - IA, SaaS, dashboards, sécurité et conversion",
  description:
    "Services DEVORA : plateformes premium, dashboards métier, automatisations IA, SaaS internes, IA locale, sécurité défensive, SEO technique et optimisation conversion.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services IA, SaaS, dashboards et sécurité | DEVORA",
    description:
      "Plateformes premium, dashboards métier, automatisations, e-commerce, IA locale, sécurité défensive, SEO et maintenance avec un cadrage clair.",
    url: "/services",
  },
};

const deliverables = [
  "Structure de page orientée conversion",
  "Design responsive mobile, tablette et desktop",
  "Formulaire de contact ou CTA direct",
  "Titres, descriptions et base SEO locale",
  "Mise en ligne accompagnée",
  "Conseils après livraison pour continuer à avancer",
];

const customServices = [
  {
    title: "Plateforme & MVP SaaS",
    text: "Un outil métier pour remplacer un tableur, structurer un workflow ou créer une première version de SaaS exploitable.",
  },
  {
    title: "Dashboard business",
    text: "Une interface de pilotage pour suivre clients, projets, ventes, commandes, priorités ou indicateurs clés.",
  },
  {
    title: "Automatisation, IA locale et copilotes",
    text: "Des parcours plus efficaces : formulaires intelligents, reporting automatisé, copilote interne, tri de demandes ou workflow IA.",
  },
  {
    title: "Sentinel, monitoring et sécurité",
    text: "Des vues contrôlées, alertes défensives et cockpits local-first pour surveiller, prioriser et documenter sans tout exposer publiquement.",
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
            Des services pour vendre, piloter, automatiser et sécuriser.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
            DEVORA accompagne les projets qui ont besoin d&apos;une vitrine premium,
            d&apos;un dashboard métier, d&apos;une automatisation IA, d&apos;un MVP SaaS ou
            d&apos;une démonstration Sentinel sans exposer les systèmes internes.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_services_hero_contact"
              eventLabel="Services devis"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
            >
              Demander un cadrage
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
                className="rounded-3xl border border-[#061A35]/10 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[#061A35]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">
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
                className="rounded-4xl border border-[#061A35]/10 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.tag}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-[#061A35]">
                  {offer.title}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-[#173C91]">
                  {offer.price}
                </p>
                <p className="mt-4 leading-7 text-[#475569]">{offer.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#334155]">
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
          <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              Inclus selon l&apos;offre
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Une base exploitable, pas une simple page posée en ligne.
            </h2>
            <div className="mt-7 grid gap-3">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl bg-[#F4FAFC] p-4 text-[#334155]">
                  <span className="font-semibold text-[#173C91]">✓ </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              Petites interventions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Corriger vite ce qui freine vos prospects.
            </h2>
            <div className="mt-7 grid gap-4">
              {quickOffers.map((offer) => (
                <div key={offer.title} className="rounded-2xl bg-[#F4FAFC] p-5">
                  <p className="font-bold text-[#173C91]">{offer.price}</p>
                  <h3 className="mt-1 font-semibold text-[#061A35]">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              Maintenance
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Garder un site propre après sa mise en ligne.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {maintenanceOffers.map((offer) => (
              <article key={offer.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="font-bold text-[#173C91]">{offer.price}</p>
                <h3 className="mt-2 text-xl font-bold text-[#061A35]">
                  {offer.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569]">{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {trustPillars.map((pillar) => (
              <article key={pillar.title}>
                <h2 className="text-xl font-bold text-[#061A35]">
                  {pillar.title}
                </h2>
                <p className="mt-3 leading-7 text-[#475569]">{pillar.text}</p>
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
            DEVORA vous oriente vers une correction rapide, une landing, un
            dashboard, une automatisation ou une démo privée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_services_final_contact"
              eventLabel="Services final"
              className="rounded-full bg-white px-8 py-4 text-center font-semibold text-[#061A35] transition hover:bg-[#EFF9F8]"
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
