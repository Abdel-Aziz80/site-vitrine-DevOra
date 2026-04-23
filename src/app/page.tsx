import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devora.fr";

export const metadata: Metadata = {
  title: "Création de site internet en Normandie - DevOra",
  description:
    "Développeur web freelance en Normandie - DevOra. Création de sites vitrines modernes, refonte de site et accompagnement digital pour entreprises, artisans et indépendants.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DevOra",
  url: siteUrl,
  email: "contact@harmoniawear.com",
  areaServed: ["Rouen", "Normandie"],
  description:
    "Création de sites vitrines modernes, refonte de site et accompagnement digital.",
  serviceType: [
    "Création de site vitrine",
    "Refonte de site",
    "Accompagnement digital",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      <Script
        id="devora-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden px-6 py-28 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD9C7] blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#FFE8D6] blur-3xl opacity-70" />
        </div>

        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-[#E8C8B8] bg-white/70 px-4 py-2 text-sm font-medium text-[#B86446]">
            Développeur web freelance en Normandie - DevOra
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
            Des sites web modernes,
            <br />
            clairs et conçus pour convertir
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
            J’aide les entreprises, artisans et indépendants à créer une
            présence en ligne plus crédible, plus visible et plus professionnelle.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-[#D97757] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#c96b4e] sm:w-auto"
            >
             Discuter de mon projet
            </Link>

            <Link
              href="/services"
              className="w-full rounded-full border border-[#D97757] bg-white px-8 py-4 text-center font-semibold text-[#B86446] transition hover:bg-[#FFF3EA] sm:w-auto"
            >
              Voir mes services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900">
            Création de site internet en Normandie
          </h2>

          <p className="mt-4 text-neutral-600 leading-8">
            Vous recherchez un développeur web freelance en Normandie pour créer votre site internet ?
            J’accompagne les entreprises, artisans et indépendants à Rouen et dans la région dans la création,
            la refonte et l’optimisation de leur présence en ligne.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Un accompagnement simple et efficace
          </h2>

          <p className="mt-4 text-gray-600">
            De la conception à la mise en ligne, je vous accompagne à chaque étape
            pour créer un site qui correspond réellement à vos objectifs.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-neutral-900">Rapide</h3>
            <p className="mt-3 leading-7 text-neutral-600">
              Des sites optimisés pour la performance, le confort de navigation
              et une meilleure visibilité.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-neutral-900">Moderne</h3>
            <p className="mt-3 leading-7 text-neutral-600">
              Un design clair, responsive et professionnel pour inspirer
              confiance dès les premières secondes.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-neutral-900">Efficace</h3>
            <p className="mt-3 leading-7 text-neutral-600">
              Une structure pensée pour guider vos visiteurs et faciliter la
              prise de contact.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-4xl border border-black/5 bg-white p-10 shadow-sm md:p-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Pourquoi travailler avec DevOra ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
              Mon objectif n’est pas simplement de créer un joli site, mais de
              concevoir un outil utile, rassurant et cohérent avec votre activité.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                Clarté
              </p>
              <p className="mt-3 leading-7 text-neutral-700">
                Une présentation simple et lisible pour que vos visiteurs
                comprennent immédiatement ce que vous proposez.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                Crédibilité
              </p>
              <p className="mt-3 leading-7 text-neutral-700">
                Une image plus professionnelle pour rassurer vos prospects et
                renforcer votre présence en ligne.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                Résultat
              </p>
              <p className="mt-3 leading-7 text-neutral-700">
                Un site pensé pour soutenir votre activité et créer de vraies
                opportunités de contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-neutral-900">
            Un projet de site internet ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
            Discutons ensemble de votre activité, de vos besoins et de la
            meilleure façon de construire une présence en ligne moderne et efficace.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#D97757] px-8 py-4 font-semibold text-white transition hover:bg-[#c96b4e]"
            >
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}