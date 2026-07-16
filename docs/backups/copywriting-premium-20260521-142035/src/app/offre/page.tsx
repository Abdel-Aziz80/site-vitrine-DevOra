import Link from "next/link";
import type { Metadata } from "next";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { portfolioProjects } from "@/lib/portfolio";
import {
  creationOffers,
  faqs,
  maintenanceOffers,
  processSteps,
  quickOffers,
  reassuranceBadges,
} from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Offres DEVORA - plateformes, dashboards, IA et Sentinel",
  description:
    "Offres DEVORA : landing de campagne, plateforme starter, dashboard métier, automatisation IA, MVP SaaS, sécurité défensive, Early Access Sentinel et maintenance.",
  alternates: { canonical: "/offre" },
};

const seoOffers = [
  {
    price: "150€ HT",
    title: "Optimisation SEO de base",
    text: "Titres, descriptions, H1/H2, liens internes et corrections simples pour mieux comprendre votre page.",
  },
  {
    price: "250€ HT",
    title: "Page SEO locale",
    text: "Création ou amélioration d'une page ciblée Rouen, Caen, Le Havre, Évreux ou Normandie.",
  },
  {
    price: "300€ HT",
    title: "Google Business Profile",
    text: "Optimisation de description, services, photos, mots-clés locaux et conseils pour obtenir plus d'avis.",
  },
];

const premiumOffers = [
  {
    title: "Cadrage SaaS ou outil métier",
    text: "Clarification des utilisateurs, fonctionnalités, parcours, données utiles et première version réaliste.",
  },
  {
    title: "Dashboard ou cockpit business",
    text: "Interface de pilotage pour suivre vos clients, commandes, projets, ventes, tâches ou indicateurs.",
  },
  {
    title: "Automatisation ciblée",
    text: "Connexion de formulaires, reporting, tri de demandes, génération de résumés ou workflows internes.",
  },
];

const sentinelOffer = portfolioProjects.find((project) => project.slug === "devora-sentinel");

export default function OffrePage() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-white">
        <CodeAtmosphere />
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            Offres DEVORA
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Des offres lisibles pour avancer vers une version utile.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
            Commencez par une correction, une landing ou une plateforme starter.
            Pour un dashboard, un MVP SaaS, une IA locale, Sentinel ou une
            automatisation, DEVORA cadre d&apos;abord une version utile avant de chiffrer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {reassuranceBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/78 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_offers_hero_contact"
              eventLabel="Offres devis"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/simulateur"
              className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/12"
            >
              Estimer mon projet
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
                Projets premium
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
                Pour les besoins SaaS, dashboard, IA ou e-commerce.
              </h2>
              <p className="mt-4 leading-8 text-[#475569]">
                Ces projets dépendent du périmètre, des données et des
                intégrations. Le bon départ : cadrer une première version utile,
                puis construire proprement.
              </p>
            </div>
            <div className="grid gap-4">
              {premiumOffers.map((offer) => (
                <article key={offer.title} className="rounded-2xl bg-[#F4FAFC] p-5">
                  <h3 className="font-bold text-[#061A35]">{offer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    {offer.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sentinelOffer ? (
        <section className="px-6 pb-20">
          <div className="devora-dark-section mx-auto grid max-w-6xl gap-8 rounded-4xl p-8 text-white shadow-2xl shadow-[#061A35]/25 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#22D3EE]">
                Offre produit
              </p>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                DEVORA Sentinel Early Access
              </h2>
              <p className="mt-5 leading-8 text-white/75">
                Accès privé limité à 50 personnes, avec 1 mois inclus. Sentinel
                cible les PC x64 2020+ et reste activé manuellement après
                demande pour garder un lancement propre.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={sentinelOffer.launchOffer?.href ?? "/portfolio/devora-sentinel#early-access"}
                  eventName="cta_offers_sentinel_early_access"
                  eventLabel="Offre Sentinel Early Access"
                  className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
                >
                  Rejoindre l&apos;Early Access
                </TrackedLink>
                <Link
                  href="/portfolio/devora-sentinel"
                  className="rounded-full border border-white/20 bg-white/8 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/12"
                >
                  Voir DEVORA Sentinel
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sentinelOffer.pricing?.slice(0, 2).map((pack) => (
                <article key={pack.name} className="rounded-3xl border border-white/10 bg-white/8 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#67E8F9]">
                    {pack.name}
                  </p>
                  <p className="mt-3 text-3xl font-black">{pack.price}</p>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    {pack.description}
                  </p>
                  <div className="mt-5 grid gap-2">
                    {pack.included.map((item) => (
                      <span key={item} className="rounded-xl bg-white/8 px-3 py-2 text-sm font-semibold text-white/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {quickOffers.map((offer) => (
              <article key={offer.title} className="rounded-4xl border border-[#061A35]/10 bg-white p-7 shadow-sm">
                <p className="text-3xl font-extrabold text-[#173C91]">
                  {offer.price}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-[#061A35]">
                  {offer.title}
                </h2>
                <p className="mt-4 leading-7 text-[#475569]">{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              Création de site
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Les offres principales.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {creationOffers.map((offer) => (
              <article
                key={offer.title}
                className={`rounded-4xl border bg-white p-7 shadow-sm ${
                  offer.title.includes("starter")
                    ? "border-[#2DBEB5] shadow-[#2DBEB5]/10"
                    : "border-[#061A35]/10"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.tag}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#061A35]">
                  {offer.title}
                </h3>
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
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              SEO local
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Pour être plus clair aux yeux de Google et des clients.
            </h2>
            <div className="mt-7 grid gap-4">
              {seoOffers.map((offer) => (
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

          <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              Maintenance
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Un site propre doit rester suivi.
            </h2>
            <div className="mt-7 grid gap-4">
              {maintenanceOffers.map((offer) => (
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
        <div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              Déroulement
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Une méthode simple avant de dépenser.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.num} className="rounded-3xl bg-[#F4FAFC] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173C91] text-sm font-bold text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#061A35]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#173C91]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#061A35]">
              Questions avant de choisir.
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-3xl border border-[#061A35]/10 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-[#061A35]">{item.question}</h3>
                <p className="mt-2 leading-7 text-[#475569]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl rounded-4xl bg-[#061A35] p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Vous voulez savoir quoi choisir ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Envoyez votre situation. DEVORA répond avec l&apos;option la plus
            cohérente : correction, landing, dashboard, SaaS, IA ou démo privée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_offers_final_contact"
              eventLabel="Offres final"
              className="rounded-full bg-white px-8 py-4 text-center font-semibold text-[#061A35] transition hover:bg-[#EFF9F8]"
            >
              Demander mon cadrage
            </TrackedLink>
            <Link
              href="/services"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Revoir les services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
