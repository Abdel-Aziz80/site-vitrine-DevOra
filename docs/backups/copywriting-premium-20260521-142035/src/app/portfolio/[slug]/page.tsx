import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import SentinelEarlyAccessForm from "@/components/SentinelEarlyAccessForm";
import TrackedLink from "@/components/TrackedLink";
import { getPortfolioProject, portfolioProjects } from "@/lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Portfolio DEVORA`,
      description: project.shortDescription,
      url: `/portfolio/${project.slug}`,
    },
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioProjects.filter((item) => item.slug !== project.slug);

  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-24 text-white">
        <CodeAtmosphere />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[12%] top-12 h-64 w-64 rounded-full bg-[#2563EB] blur-3xl" />
          <div className="absolute bottom-10 right-[10%] h-72 w-72 rounded-full bg-[#22D3EE] blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              Retour au portfolio
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-[#22D3EE]">
              {project.type}
            </p>
            <p className="mt-3 text-sm font-semibold text-white/62">
              {project.availability}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/78">
              {project.shortDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.launchOffer ? (
                <TrackedLink
                  href={project.launchOffer.href}
                  eventName={`cta_project_${project.slug}_early_access`}
                  eventLabel={project.launchOffer.title}
                  className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
                >
                  {project.launchOffer.cta}
                </TrackedLink>
              ) : null}
              <TrackedLink
                href="/contact"
                eventName={`cta_project_${project.slug}_contact`}
                eventLabel={`Contact ${project.title}`}
                className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
              >
                Discuter d&apos;un projet similaire
              </TrackedLink>
              <Link
                href="/services"
                className="rounded-full border border-white/20 bg-white/8 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/12"
              >
                Voir les services
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#061A35] shadow-2xl shadow-[#061A35]/30">
            {project.screenshots?.[0] ? (
              <Image
                src={project.screenshots[0].src}
                alt={project.screenshots[0].alt}
                width={1440}
                height={1000}
                priority
                className="aspect-[16/10] w-full object-cover object-top"
              />
            ) : (
              <div className="flex aspect-[16/10] flex-col justify-center p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
                  Capture non publiée
                </p>
                <p className="mt-3 text-2xl font-extrabold">
                  Interface interne non exposée publiquement
                </p>
                <p className="mt-3 leading-7 text-white/70">
                  Les visuels publics seront ajoutés uniquement à partir de
                  vraies captures produit.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {project.launchOffer ? (
        <section id="early-access" className="scroll-mt-24 px-6 pt-16">
          <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.75rem] border border-[#22D3EE]/20 bg-[#061A35] p-8 text-white shadow-xl shadow-[#061A35]/20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
                Early Access
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">
                {project.launchOffer.title}
              </h2>
              <p className="mt-4 leading-8 text-white/75">
                {project.launchOffer.text}
              </p>
              {project.slug === "devora-sentinel" ? (
                <div className="mt-5 grid gap-3 text-sm text-white/65">
                  <p>La route API transmet la demande vers AlexCore quand il est configuré.</p>
                  <p>Objectif : validation humaine, activation manuelle, puis notification propriétaire côté AlexCore.</p>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/6 p-6">
              <p className="text-4xl font-black">50 places</p>
              <p className="text-white/70">1 mois inclus, activation manuelle par email.</p>
              {project.slug === "devora-sentinel" ? (
                <SentinelEarlyAccessForm />
              ) : (
                <TrackedLink
                  href={project.launchOffer.href}
                  eventName={`cta_project_${project.slug}_offer`}
                  eventLabel={project.launchOffer.title}
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#061A35] transition hover:bg-[#F8FAFC]"
                >
                  {project.launchOffer.cta}
                </TrackedLink>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {project.screenshots?.length ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Captures réelles
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#061A35] md:text-4xl">
                Interfaces produit issues des projets locaux.
              </h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white shadow-sm">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1440}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                  <figcaption className="p-4 text-sm font-semibold text-[#475569]">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2563EB]">
              Contexte
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#061A35]">
              Produit interne orienté business
            </h2>
            <p className="mt-4 leading-8 text-[#475569]">{project.context}</p>
          </article>
          <article className="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7C3AED]">
              Problématique
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#061A35]">
              Le besoin métier à résoudre
            </h2>
            <p className="mt-4 leading-8 text-[#475569]">{project.problem}</p>
          </article>
          <article className="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0891B2]">
              Solution
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#061A35]">
              Une interface claire et exploitable
            </h2>
            <p className="mt-4 leading-8 text-[#475569]">{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Fonctionnalités clés
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#061A35] md:text-4xl">
              Ce que ce type d&apos;outil peut apporter.
            </h2>
            <p className="mt-5 leading-8 text-[#475569]">
              Ces projets internes ne publient pas leur code source. Le site
              présente seulement des captures validées, des fonctions concrètes
              et la valeur métier associée.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-[#E2E8F0] bg-white p-5 text-[#334155] shadow-sm">
                <span className="font-bold text-[#2563EB]">✓ </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.pricing?.length ? (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Packs DEVORA Sentinel
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#061A35] md:text-4xl">
                Tarifs et packs à cadrer avant lancement public.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.pricing.map((pack) => (
                <article key={pack.name} className="rounded-[1.5rem] border border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2563EB]">
                    {pack.name}
                  </p>
                  <p className="mt-3 text-3xl font-extrabold text-[#061A35]">
                    {pack.price}
                  </p>
                  <p className="mt-3 leading-7 text-[#475569]">
                    {pack.description}
                  </p>
                  <div className="mt-5 grid gap-2">
                    {pack.included.map((item) => (
                      <span key={item} className="rounded-xl bg-[#F8FAFC] px-3 py-2 text-sm font-semibold text-[#334155]">
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
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="devora-dark-section rounded-[1.75rem] p-8 text-white shadow-xl shadow-[#061A35]/20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
              Valeur business
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Un outil utile avant d&apos;être spectaculaire.
            </h2>
            <p className="mt-5 leading-8 text-white/78">{project.businessValue}</p>
          </article>
          <article className="rounded-[1.75rem] border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Résultats attendus
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#061A35]">
              Ce qu&apos;un client peut viser.
            </h2>
            <div className="mt-6 grid gap-3">
              {project.expectedResults.map((result) => (
                <div key={result} className="rounded-2xl bg-[#F8FAFC] p-4 text-[#334155]">
                  {result}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-[#E2E8F0] bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Stack et services
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#061A35]">
                Une base technique moderne.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-[#061A35]">Stack utilisée</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-[#EFF6FF] px-3 py-1.5 text-sm font-semibold text-[#2563EB]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#061A35]">Prestations liées</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.map((item) => (
                    <span key={item} className="rounded-full bg-[#F5F3FF] px-3 py-1.5 text-sm font-semibold text-[#7C3AED]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Maillage portfolio
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#061A35]">
                Autres cas d&apos;étude.
              </h2>
            </div>
            <Link href="/portfolio" className="font-semibold text-[#2563EB]">
              Tous les projets
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="devora-hover-lift rounded-[1.5rem] border border-[#E2E8F0] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-[#2563EB]">{item.type}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#061A35]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569]">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="devora-dark-section mx-auto max-w-6xl rounded-[1.75rem] p-8 text-center text-white shadow-2xl shadow-[#061A35]/25 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
            Passer du concept à votre outil
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold md:text-4xl">
            Vous avez besoin d&apos;un dashboard, d&apos;un SaaS interne ou d&apos;une
            automatisation métier ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Décrivez votre contexte. DEVORA peut cadrer une première version
            utile, crédible et réaliste, avec une visibilité publique contrôlée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName={`cta_project_${project.slug}_final`}
              eventLabel={`Final ${project.title}`}
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
            >
              Créer un outil métier
            </TrackedLink>
            <Link
              href="/offre"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
