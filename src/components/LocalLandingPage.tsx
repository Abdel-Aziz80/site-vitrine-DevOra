import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { creationOffers, localFaqs, localPages } from "@/lib/siteContent";

type LocalPageKey = keyof typeof localPages;

const zoneLinks = [
  { href: "/normandie", label: "Normandie" },
  { href: "/rouen", label: "Rouen" },
  { href: "/caen", label: "Caen" },
  { href: "/le-havre", label: "Le Havre" },
  { href: "/evreux", label: "Évreux" },
  { href: "/france", label: "France" },
];

const services = [
  "Site vitrine professionnel",
  "Refonte ou amélioration",
  "Landing page locale",
  "SEO local de base",
  "Formulaire de contact",
  "Maintenance après mise en ligne",
];

export default function LocalLandingPage({ pageKey }: { pageKey: LocalPageKey }) {
  const page = localPages[pageKey];

  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-white">
        <div className="absolute inset-0">
          <CodeAtmosphere />
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C3AED]/25 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#22D3EE]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-[#A5F3FC]">
            {page.title}
          </span>
          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {page.h1}
          </h1>
          <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            {page.subtitle}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
            {page.intro}
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/62">
            Site starter à <strong>600€ HT</strong>, page de vente à
            <strong> 300€ HT</strong> et site complet à
            <strong> 1200€ HT</strong>.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName={`cta_local_${page.slug}_contact`}
              eventLabel={`Contact ${page.city}`}
              className="w-full rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110 sm:w-auto"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/offre"
              className="w-full rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/12 sm:w-auto"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
              Contexte local
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Un site doit parler à vos clients {page.label}.
            </h2>
            <p className="mt-5 leading-8 text-white/70">{page.localAngle}</p>
          </div>
          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
              Exemples de besoins
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Des cas simples, très concrets.
            </h2>
            <div className="mt-7 grid gap-4">
              {page.examples.map((example) => (
                <div key={example} className="rounded-2xl bg-white/[0.07] p-5 text-white/72">
                  <span className="font-semibold text-[#67E8F9]">✓ </span>
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
                Prestations
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Ce que DEVORA peut construire pour vous.
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                L&apos;objectif reste le même : une vitrine claire, responsive et
                crédible qui aide vos visiteurs à vous contacter.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-2xl bg-white/[0.07] p-5 text-white/72">
                  <span className="font-semibold text-[#67E8F9]">✓ </span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
              Offres utiles {page.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Une grille simple pour choisir.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {creationOffers.map((offer) => (
              <article key={offer.title} className="rounded-4xl border border-white/12 bg-white/[0.075] p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
                  {offer.tag}
                </p>
                <h3 className="mt-3 text-xl font-bold text-white">
                  {offer.title}
                </h3>
                <p className="mt-2 text-2xl font-extrabold text-[#67E8F9]">
                  {offer.price}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  {offer.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
              FAQ locale
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Questions fréquentes.
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {localFaqs.map((item) => (
              <article key={item.question} className="rounded-3xl border border-white/12 bg-white/[0.075] p-6 shadow-sm">
                <h3 className="font-bold text-white">{item.question}</h3>
                <p className="mt-2 leading-7 text-white/70">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl rounded-4xl border border-white/12 bg-white/[0.075] p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
            Maillage local
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Autres zones d&apos;intervention.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {zoneLinks.map((zone) => (
              <Link
                key={zone.href}
                href={zone.href}
                className="rounded-full border border-[#173C91]/20 bg-white/[0.075] px-4 py-2 text-sm font-medium text-[#67E8F9] transition hover:bg-white/[0.07]"
              >
                {zone.label}
              </Link>
            ))}
          </div>
          <div className="mt-9">
            <TrackedLink
              href="/contact"
              eventName={`cta_local_${page.slug}_final`}
              eventLabel={`Final ${page.city}`}
              className="inline-flex rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Parler de mon projet {page.label}
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
