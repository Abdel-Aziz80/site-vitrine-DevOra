import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import PrivateProjectVeil from "@/components/PrivateProjectVeil";
import TrackedLink from "@/components/TrackedLink";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio DEVORA - outils métier, IA utile et Sentinel",
  description:
    "Portfolio DEVORA : exemples d'outils métier, automatisations, pilotage e-commerce, suivi client et DEVORA Sentinel avec vues publiques contrôlées.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio outils métier, IA utile et Sentinel | DEVORA",
    description:
      "Découvrez les cas d'étude DEVORA : Sentinel, Commerce OS, FluxPilot AI, Command Center, Atlas Commerce OS et Agent Business.",
    url: "/portfolio",
  },
};

const proofPoints = [
  "Interfaces faciles à comprendre",
  "Suivi des priorités",
  "Automatisations utiles",
  "Conversion et confiance",
];

export default function Portfolio() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-24 text-white">
        <CodeAtmosphere />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[8%] top-16 h-72 w-72 rounded-full bg-[#2563EB] blur-3xl" />
          <div className="absolute bottom-10 right-[12%] h-72 w-72 rounded-full bg-[#22D3EE] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#22D3EE]">
            Portfolio DEVORA
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Des exemples d&apos;outils conçus pour mieux vendre, mieux suivre et gagner du temps.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Chaque projet est expliqué par son usage : le problème traité, le gain attendu
            et ce qui reste volontairement privé. Les vues publiques sont choisies pour
            montrer la valeur sans dévoiler les systèmes internes.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_portfolio_hero_contact"
              eventLabel="Portfolio hero contact"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/services"
              className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/12"
            >
              Voir les solutions DEVORA
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white/86"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10">
            {portfolioProjects.map((project) => (
              <article
                key={project.slug}
                className="devora-hover-lift grid gap-8 rounded-[2rem] border border-white/12 bg-white/[0.075] p-5 shadow-xl shadow-[#061A35]/8 md:p-8 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#061A35] shadow-xl shadow-[#061A35]/12">
                  {project.screenshots?.[0] ? (
                    <Image
                      src={project.screenshots[0].src}
                      alt={project.screenshots[0].alt}
                      width={1440}
                      height={1000}
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  ) : (
                    <PrivateProjectVeil
                      title="Aperçu interne protégé"
                      description="Le produit existe, mais les vues complètes restent réservées aux démonstrations privées."
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#67E8F9]">
                    {project.type}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/58">
                    {project.availability}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 text-white/70">
                    {project.shortDescription}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-white/[0.07] p-4">
                        <p className="text-2xl font-extrabold text-white">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white/58">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                      className="rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/10 px-3 py-1.5 text-sm font-semibold text-[#67E8F9]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {project.launchOffer ? (
                      <TrackedLink
                        href={project.launchOffer.href}
                        eventName={`cta_early_access_${project.slug}`}
                        eventLabel={project.launchOffer.title}
                        className="devora-cta rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-6 py-3 text-center font-semibold text-white transition hover:scale-[1.02] hover:brightness-110"
                      >
                        {project.launchOffer.cta}
                      </TrackedLink>
                    ) : null}
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="devora-cta rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-6 py-3 text-center font-semibold text-white transition hover:scale-[1.02] hover:brightness-110"
                    >
                      Voir l&apos;étude de cas
                    </Link>
                    <TrackedLink
                      href="/contact"
                      eventName={`cta_portfolio_${project.slug}`}
                      eventLabel={`Contact ${project.title}`}
                      className="rounded-full border border-[#22D3EE]/30 bg-white/8 px-6 py-3 text-center font-semibold text-[#67E8F9] transition hover:scale-[1.02] hover:bg-white/12"
                    >
                      Demander un cadrage
                    </TrackedLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
              Positionnement
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Un portfolio pensé pour expliquer la valeur, pas pour publier les coulisses.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Pages dédiées aux usages réels",
              "Aucune exposition des systèmes internes",
              "Captures publiques uniquement quand elles sont validées",
              "Accès aux détails en démo privée",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.075] p-5 text-white/72 shadow-sm">
                <span className="font-bold text-[#67E8F9]">✓ </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="devora-dark-section mx-auto max-w-6xl rounded-[2rem] p-8 text-center text-white shadow-2xl shadow-[#061A35]/25 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
            Votre projet
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold md:text-4xl">
            Vous voulez transformer un besoin métier en outil clair ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Suivi client, gestion commerce, automatisation, page de vente ou outil privé :
            DEVORA aide à cadrer une première version compréhensible, utile et crédible.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_portfolio_final_contact"
              eventLabel="Portfolio final"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.07]"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/simulateur"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Préqualifier mon besoin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
