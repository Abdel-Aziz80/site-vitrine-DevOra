import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import PrivateProjectVeil from "@/components/PrivateProjectVeil";
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
          <div className="min-w-0">
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              Retour au portfolio
            </Link>
            <p className="mt-8 max-w-[20rem] text-xs font-bold uppercase tracking-[0.12em] text-[#22D3EE] sm:text-sm">
              {project.type}
            </p>
            <p className="mt-3 hidden text-sm font-semibold text-white/62 sm:block">
              {project.availability}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-white/78 sm:hidden">
              Outil local pour visualiser les incidents, comprendre les alertes et garder le contrôle sans cloud invasif.
            </p>
            <p className="mt-5 hidden max-w-2xl text-lg leading-8 text-white/78 sm:block">
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
          <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#061A35] shadow-2xl shadow-[#061A35]/30">
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
              <PrivateProjectVeil
                title="Interface protégée"
                description="Les vues détaillées existent, mais restent réservées aux démonstrations privées pour protéger le produit."
              />
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
                  <p>Chaque demande est relue avant activation pour garder un accès maîtrisé.</p>
                  <p>Objectif : vérifier le contexte, confirmer la compatibilité et éviter une ouverture trop large.</p>
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
                  className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-6 py-3 text-center font-semibold text-white transition hover:bg-white/[0.07]"
                >
                  {project.launchOffer.cta}
                </TrackedLink>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {project.sentinelOverview ? (
        <section className="devora-sentinel-explain px-6 py-20">
          <CodeAtmosphere />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
                  Comprendre Sentinel
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                  {project.sentinelOverview.title}
                </h2>
                <p className="mt-5 leading-8 text-white/72">
                  {project.sentinelOverview.lead}
                </p>
                <div className="mt-6 grid gap-3">
                  {project.sentinelOverview.guardrails.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#22D3EE]/25 bg-[#22D3EE]/10 px-4 py-3 text-sm font-bold text-[#A5F3FC] shadow-sm shadow-[#22D3EE]/5">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.sentinelOverview.cards.map((card) => (
                  <article key={card.title} className="devora-glass devora-hover-lift rounded-[1.5rem] p-6">
                    <h3 className="text-xl font-extrabold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 leading-7 text-white/68">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-[#22D3EE]/20 bg-[#061A35] p-6 text-white shadow-xl shadow-[#061A35]/20 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
                    Ce que Sentinel clarifie
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold">
                    Un assistant local pour voir, comprendre et décider.
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Visibilité système",
                    "Incidents lisibles",
                    "Historique local",
                    "Veille externe autorisée",
                    "Contrôle humain",
                    "Aucune collecte cachée",
                  ].map((item) => (
                    <span key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white/78">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {project.screenshots?.length ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                Vues publiques validées
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Extraits sélectionnés pour montrer l&apos;usage sans dévoiler les parties sensibles.
              </h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.075] shadow-sm">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1440}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                  <figcaption className="p-4 text-sm font-semibold text-white/70">
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
          <article className="rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#67E8F9]">
              Contexte
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Produit interne orienté business
            </h2>
            <p className="mt-4 leading-8 text-white/70">{project.context}</p>
          </article>
          <article className="rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C4B5FD]">
              Problématique
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Le besoin métier à résoudre
            </h2>
            <p className="mt-4 leading-8 text-white/70">{project.problem}</p>
          </article>
          <article className="rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#67E8F9]">
              Solution
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Une interface claire et exploitable
            </h2>
            <p className="mt-4 leading-8 text-white/70">{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
              Ce que l&apos;outil aide à faire
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Les bénéfices concrets pour un usage réel.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Les projets internes DEVORA ne sont pas exposés en entier. Le site
              présente uniquement ce qui aide à comprendre l&apos;intérêt métier :
              les usages, les gains et les vues validées.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/12 bg-white/[0.075] p-5 text-white/72 shadow-sm">
                <span className="font-bold text-[#67E8F9]">✓ </span>
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                Accès DEVORA Sentinel
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Des packs clairs selon votre niveau d&apos;usage.
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-white/70">
                Les prix affichés servent à cadrer le lancement. L&apos;activation reste contrôlée :
                DEVORA vérifie le contexte, la compatibilité et le périmètre avant ouverture.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.pricing.map((pack) => (
                <article key={pack.name} className="sentinel-price-card rounded-[1.5rem] border border-white/12 bg-white/[0.075] p-6 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#67E8F9]">
                    {pack.name}
                  </p>
                  <p className="mt-3 text-3xl font-extrabold text-white">
                    {pack.price}
                  </p>
                  {pack.highlight ? (
                    <p className="mt-2 inline-flex rounded-full bg-[#22D3EE]/10 px-3 py-1 text-sm font-bold text-[#67E8F9]">
                      {pack.highlight}
                    </p>
                  ) : null}
                  <p className="mt-3 leading-7 text-white/70">
                    {pack.description}
                  </p>
                  <div className="mt-5 grid gap-2">
                    {pack.included.map((item) => (
                      <span key={item} className="rounded-xl bg-white/[0.07] px-3 py-2 text-sm font-semibold text-white/72">
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

      {project.options?.length ? (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                  Options
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-white">
                  Des ajouts simples, sans engagement inutile.
                </h2>
                <p className="mt-4 leading-8 text-white/70">
                  Les options servent à adapter Sentinel au contexte réel : installation,
                  personnalisation, confort local ou historique plus long.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.options.map((option) => (
                  <article key={option.name} className="rounded-2xl border border-white/12 bg-white/[0.07] p-5">
                    <p className="text-sm font-bold text-[#67E8F9]">{option.name}</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">{option.price}</p>
                    <p className="mt-2 leading-7 text-white/70">{option.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {project.faq?.length ? (
        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                Questions fréquentes
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Local, IA, données : les points à comprendre avant de demander l&apos;accès.
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                DEVORA Sentinel doit être lisible avant même la démo. Ces réponses
                posent le cadre : défense, transparence, contrôle et confidentialité.
              </p>
            </div>
            <div className="grid gap-3">
              {project.faq.map((item) => (
                <details key={item.question} className="sentinel-accordion rounded-[1.25rem] border border-white/12 bg-white/[0.075] p-5 shadow-sm">
                  <summary className="cursor-pointer text-lg font-extrabold text-white">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-8 text-white/70">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="devora-dark-section rounded-[1.75rem] p-8 text-white shadow-xl shadow-[#061A35]/20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
              Valeur pour l&apos;activité
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Un outil doit d&apos;abord rendre l&apos;action plus simple.
            </h2>
            <p className="mt-5 leading-8 text-white/78">{project.businessValue}</p>
          </article>
          <article className="rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
              Gains attendus
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">
              Ce que ce type de solution peut améliorer.
            </h2>
            <div className="mt-6 grid gap-3">
              {project.expectedResults.map((result) => (
                <div key={result} className="rounded-2xl bg-white/[0.07] p-4 text-white/72">
                  {result}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                Repères projet
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                Une base sérieuse, pensée pour évoluer.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-white">Ce que DEVORA sécurise</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Clarté des écrans", "Données utiles", "Parcours simple", "Évolution possible"].map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-sm font-semibold text-[#67E8F9]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white">Prestations liées</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-sm font-semibold text-[#C4B5FD]">
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                Maillage portfolio
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                Autres cas d&apos;étude.
              </h2>
            </div>
            <Link href="/portfolio" className="font-semibold text-[#67E8F9]">
              Tous les projets
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="devora-hover-lift rounded-[1.5rem] border border-white/12 bg-white/[0.075] p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-[#67E8F9]">{item.type}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-white/70">
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
            Vous avez besoin d&apos;un outil plus clair pour suivre, vendre ou gagner du temps ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Décrivez votre contexte. DEVORA peut cadrer une première version utile,
            crédible et réaliste, sans exposer les parties sensibles de votre activité.
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
