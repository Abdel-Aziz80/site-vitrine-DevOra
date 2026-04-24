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

const features = [
  {
    title: "Rapide",
    description:
      "Des sites optimisés pour la performance, le confort de navigation et une meilleure visibilité.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D97757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  },
  {
    title: "Moderne",
    description:
      "Un design clair, responsive et professionnel pour inspirer confiance dès les premières secondes.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D97757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`,
  },
  {
    title: "Efficace",
    description:
      "Une structure pensée pour guider vos visiteurs et faciliter la prise de contact.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D97757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  },
];

const values = [
  {
    label: "Clarté",
    description:
      "Une présentation simple et lisible pour que vos visiteurs comprennent immédiatement ce que vous proposez.",
  },
  {
    label: "Crédibilité",
    description:
      "Une image plus professionnelle pour rassurer vos prospects et renforcer votre présence en ligne.",
  },
  {
    label: "Résultat",
    description:
      "Un site pensé pour soutenir votre activité et créer de vraies opportunités de contact.",
  },
];

const steps = [
  {
    num: "1",
    title: "Échange",
    description:
      "Nous clarifions vos besoins, vos objectifs et l'image que vous souhaitez transmettre.",
  },
  {
    num: "2",
    title: "Conception",
    description:
      "Je structure le site et conçois une interface moderne, lisible et adaptée à votre activité.",
  },
  {
    num: "3",
    title: "Mise en ligne",
    description:
      "Le site est finalisé, vérifié et prêt à être présenté à vos futurs clients.",
  },
];

const IconRapide = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D97757" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconModerne = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D97757" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M9 9h6M9 12h6M9 15h4" />
  </svg>
);

const IconEfficace = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D97757" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const featureIcons = [<IconRapide key="rapide" />, <IconModerne key="moderne" />, <IconEfficace key="efficace" />];

const reassuranceBadges = ["Réponse sous 48h", "Devis gratuit", "Basé en Normandie"];

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      <Script
        id="devora-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD9C7] blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#FFE8D6] blur-3xl opacity-60" />
        </div>

        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E8C8B8] bg-white/80 px-4 py-2 text-sm font-medium text-[#B86446]">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5">
              <circle cx="8" cy="8" r="6" />
              <path d="M8 5v3l2 2" strokeLinecap="round" />
            </svg>
            Développeur web freelance en Normandie — DevOra
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
            Des sites web modernes,
            <br />
            clairs et conçus pour convertir
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
            J&apos;aide les entreprises, artisans et indépendants à créer une
            présence en ligne plus crédible, plus visible et plus professionnelle.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-[#D97757] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#c96b4e] sm:w-auto"
            >
              Obtenir un devis gratuit
            </Link>
            <Link
              href="/services"
              className="w-full rounded-full border border-[#D97757] bg-white px-8 py-4 text-center font-semibold text-[#B86446] transition hover:bg-[#FFF3EA] sm:w-auto"
            >
              Voir mes services
            </Link>
          </div>

          {/* Badges de réassurance */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {reassuranceBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF3EA] px-3 py-1.5 text-xs font-medium text-[#B86446]"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D97757]" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION SEO */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900">
            Création de site internet en Normandie
          </h2>
          <p className="mt-4 text-neutral-600 leading-8">
            Vous recherchez un développeur web freelance en Normandie pour créer votre site internet ?
            J&apos;accompagne les entreprises, artisans et indépendants à Rouen et dans la région dans la création,
            la refonte et l&apos;optimisation de leur présence en ligne.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF3EA]">
                {featureIcons[i]}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI DEVORA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-4xl border border-black/5 bg-white p-10 shadow-sm md:p-14">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
              Pourquoi DevOra
            </p>
            <h2 className="text-3xl font-bold text-neutral-900">
              Pourquoi travailler avec DevOra ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
              Mon objectif n&apos;est pas simplement de créer un joli site, mais de
              concevoir un outil utile, rassurant et cohérent avec votre activité.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.label} className="rounded-2xl bg-[#FFF8F3] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
                  {value.label}
                </p>
                <p className="mt-3 leading-7 text-neutral-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE EN 3 ÉTAPES */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
              Ma méthode
            </p>
            <h2 className="text-3xl font-bold text-neutral-900">
              Un accompagnement simple et efficace
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 leading-8">
              De la conception à la mise en ligne, je vous accompagne à chaque étape
              pour créer un site qui correspond réellement à vos objectifs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#D97757] text-sm font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-neutral-900">
            Un projet de site internet ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
            Discutons ensemble de votre activité, de vos besoins et de la
            meilleure façon de construire une présence en ligne moderne et efficace.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#D97757] px-8 py-4 font-semibold text-white transition hover:bg-[#c96b4e]"
            >
              Obtenir un devis gratuit
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-[#D97757] bg-white px-8 py-4 font-semibold text-[#B86446] transition hover:bg-[#FFF3EA]"
            >
              Voir mes réalisations
            </Link>
          </div>

          <p className="mt-5 text-sm text-neutral-400">
            Réponse sous 24 à 48h ouvrées, souvent plus rapide.
          </p>
        </div>
      </section>
    </main>
  );
}
