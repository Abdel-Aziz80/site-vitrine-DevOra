import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio DEVORA - produits IA, dashboards, SaaS et Sentinel",
  description:
    "Portfolio DEVORA : produits internes, dashboards business, automatisation IA, cockpit e-commerce, Sentinel et applications métier avec captures publiques contrôlées.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio SaaS, dashboards, IA et Sentinel | DEVORA",
    description:
      "Découvrez les cas d'étude DEVORA : Sentinel, Commerce OS, FluxPilot AI, Command Center, Atlas Commerce OS et Agent Business.",
    url: "/portfolio",
  },
};

const proofPoints = [
  "Interfaces SaaS modernes",
  "Dashboards business lisibles",
  "Automatisation et IA appliquées",
  "SEO et conversion intégrés",
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
            Cas d&apos;étude premium pour SaaS, dashboards et interfaces IA.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Ces projets sont présentés comme des cas d&apos;étude produit :
            ils prouvent une capacité à concevoir des outils web concrets. Les
            projets internes restent privés ; le site montre seulement des
            captures validées, des interfaces partielles et des explications fonctionnelles.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_portfolio_hero_contact"
              eventLabel="Portfolio hero contact"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
            >
              Discuter de votre projet
            </TrackedLink>
            <Link
              href="/services"
              className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/12"
            >
              Voir les services DEVORA
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
                className="devora-hover-lift grid gap-8 rounded-[2rem] border border-[#E2E8F0] bg-white p-5 shadow-xl shadow-[#061A35]/8 md:p-8 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-[#061A35] shadow-xl shadow-[#061A35]/12">
                  {project.screenshots?.[0] ? (
                    <Image
                      src={project.screenshots[0].src}
                      alt={project.screenshots[0].alt}
                      width={1440}
                      height={1000}
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] flex-col justify-center p-8 text-white">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
                        Capture non publiée
                      </p>
                      <p className="mt-3 text-2xl font-extrabold">
                        Produit interne non exposé publiquement
                      </p>
                      <p className="mt-3 leading-7 text-white/70">
                        Capture ajoutée uniquement depuis une vraie interface,
                        sans mockup ni dépôt public.
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                    {project.type}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#64748B]">
                    {project.availability}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#061A35] md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 text-[#475569]">
                    {project.shortDescription}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-[#F8FAFC] p-4">
                        <p className="text-2xl font-extrabold text-[#061A35]">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#64748B]">
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
                      Créer un outil similaire
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Positionnement
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#061A35] md:text-4xl">
              Un portfolio utile pour vendre une expertise, pas pour exposer un
              dépôt complet.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Pages SEO dédiées à chaque produit",
              "Aucun dépôt public des projets internes",
              "Captures réelles uniquement quand elles sont validées",
              "CTA vers contact, audit, démo privée et Early Access",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#E2E8F0] bg-white p-5 text-[#334155] shadow-sm">
                <span className="font-bold text-[#2563EB]">✓ </span>
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
            Vous voulez transformer une idée métier en application web claire ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Dashboard, automatisation, outil interne, cockpit e-commerce ou
            prototype SaaS : DEVORA aide à cadrer une première version qui sert
            vraiment l&apos;activité sans exposer les mécaniques internes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_portfolio_final_contact"
              eventLabel="Portfolio final"
              className="rounded-full bg-white px-8 py-4 text-center font-semibold text-[#061A35] transition hover:bg-[#F8FAFC]"
            >
              Demander un devis
            </TrackedLink>
            <Link
              href="/simulateur"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Estimer mon projet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
