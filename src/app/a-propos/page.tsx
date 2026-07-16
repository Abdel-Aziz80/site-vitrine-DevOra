import type { Metadata } from "next";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { contactEmail, processSteps, socialLinks, trustPillars } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "À propos DEVORA - sites premium, outils métier et IA utile",
  description:
    "Découvrez DEVORA : une approche premium pour créer des sites, outils métier, automatisations utiles, IA locale et solutions Sentinel compréhensibles.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos - outils métier, IA utile et business | DEVORA",
    description:
      "Une approche claire, technique et business pour aider les professionnels locaux à mieux convertir en ligne.",
    url: "/a-propos",
  },
};

const values = [
  "Dire clairement ce qui est inclus avant de commencer",
  "Construire une base propre plutôt qu'une page bricolée",
  "Penser mobile, SEO local et conversion dès la structure",
  "Rester disponible pour les ajustements utiles après livraison",
];

export default function About() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-white">
        <CodeAtmosphere />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#67E8F9]">
              À propos
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              DEVORA construit des interfaces sobres, utiles et pensées pour
              aider les clients à comprendre, décider et agir.
            </h1>
            <p className="mt-5 leading-8 text-white/70">
              DEVORA est pilotée par Aziz Ayyad, avec une approche produit et
              business : clarifier l&apos;offre, créer des outils utiles, automatiser
              quand c&apos;est pertinent et garder les parties sensibles privées.
            </p>
          </div>

          <div className="space-y-4">
          <div className="devora-glass rounded-4xl p-8 text-white shadow-xl shadow-[#061A35]/15">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8FE7E0]">
                Crédibilité
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Une base technique solide, au service du résultat.
              </h2>
              <p className="mt-4 leading-8 text-white/75">
                Le socle couvre la création web, la sécurité, la performance,
                le référencement, la mise en ligne et la maintenance. L&apos;objectif :
                livrer des interfaces simples à utiliser et propres à faire évoluer.
              </p>
            </div>
            <div className="devora-glass rounded-4xl p-8 text-white shadow-xl shadow-[#061A35]/15">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8FE7E0]">
                Recherche en cours
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Une IA locale pensée pour assister, pas remplacer.
              </h2>
              <p className="mt-4 leading-8 text-white/75">
                DEVORA travaille aussi sur une IA locale en cours de développement.
                Elle est présentée avec prudence : l&apos;objectif est d&apos;aider à trier,
                résumer, prioriser et préparer des actions sans exposer les parties sensibles.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white/[0.075] p-5 text-center font-semibold text-[#67E8F9] shadow-sm transition hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                Ma différence
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                DEVORA ne vend pas juste une jolie interface.
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                Un bon site ou outil doit aider quelqu&apos;un à prendre une décision :
                comprendre, faire confiance, puis contacter ou agir. C&apos;est cette logique
                qui guide les textes, les sections, les boutons et la structure SEO.
              </p>
            </div>
            <div className="grid gap-4">
              {values.map((value) => (
                <div key={value} className="rounded-2xl bg-white/[0.07] p-5 text-white/72">
                  <span className="font-semibold text-[#67E8F9]">✓ </span>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-4xl border border-white/12 bg-white/[0.075] p-7 shadow-sm">
              <h2 className="text-xl font-bold text-white">
                {pillar.title}
              </h2>
              <p className="mt-3 leading-7 text-white/70">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
              Méthode
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Un déroulement simple, même si vous démarrez.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.num} className="rounded-3xl bg-white/[0.075] p-7 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173C91] text-sm font-bold text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="devora-dark-section mx-auto max-w-6xl rounded-4xl p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            On regarde votre projet ensemble ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Écrivez-moi à {contactEmail} ou passez par le formulaire pour une
            réponse structurée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_about_contact"
              eventLabel="A propos contact"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white transition hover:brightness-110"
            >
              Discuter de mon projet
            </TrackedLink>
            <Link
              href="/portfolio"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Voir les études de cas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
