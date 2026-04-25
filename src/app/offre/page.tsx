import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offre site internet clé en main à partir de 600€ DevOra",
  description:
    "Offre de lancement DevOra : création de site internet moderne, responsive et adapté à votre activité à partir de 600€. Devis gratuit.",
  alternates: {
    canonical: "/offre",
  },
};

const included = [
  "Site vitrine moderne et responsive",
  "Adaptation à votre activité",
  "Structure basée sur un modèle déjà optimisé",
  "Pages essentielles selon vos besoins",
  "Formulaire de contact",
  "Mise en ligne du site",
  "SEO de base",
  "Accompagnement clair, sans jargon technique",
];

const steps = [
  {
    num: "1",
    title: "Échange",
    description:
      "Nous faisons le point sur votre activité, vos besoins et les informations à mettre en avant.",
  },
  {
    num: "2",
    title: "Adaptation",
    description:
      "J’adapte la structure du site à votre image : textes, couleurs, contenus, sections et appels à l’action.",
  },
  {
    num: "3",
    title: "Mise en ligne",
    description:
      "Le site est vérifié, finalisé puis mis en ligne avec une base propre et professionnelle.",
  },
];

const reassuranceBadges = [
  "Offre valable jusqu’au 5 mai inclus",  
  "Devis gratuit",
  "Réponse sous 24 à 48h ouvrées",
  "Sans engagement",
  "Paiement sécurisé possible via Malt",
];

export default function OffrePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD9C7] opacity-50 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#FFE8D6] opacity-60 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E8C8B8] bg-white/80 px-4 py-2 text-sm font-medium text-[#B86446]">
            Offre de lancement DevOra
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
            Site internet clé en main à partir de 600€
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#B86446] md:text-3xl">
            Une base professionnelle adaptée à votre activité
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
            Vous avez besoin d’un site internet rapidement, sans vous compliquer
            la vie ? Je pars d’une structure déjà optimisée, puis je l’adapte à
            votre image, à vos contenus et à vos objectifs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-[#D97757] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#c96b4e] sm:w-auto"
            >
              Demander mon devis gratuit
            </Link>

            <Link
              href="/portfolio"
              className="w-full rounded-full border border-[#D97757] bg-white px-8 py-4 text-center font-semibold text-[#B86446] transition hover:bg-[#FFF3EA] sm:w-auto"
            >
              Voir mes réalisations
            </Link>
          </div>

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

      {/* OFFRE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-4xl border border-black/5 bg-white p-10 shadow-sm md:p-14">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
              Ce que comprend l’offre
            </p>

            <h2 className="text-3xl font-bold text-neutral-900">
              Un site vitrine prêt à présenter votre activité
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
              Cette offre est idéale pour lancer rapidement une présence en
              ligne professionnelle, avec une base claire, moderne et pensée
              pour faciliter la prise de contact.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#FFF8F3] p-5 text-neutral-700"
              >
                <span className="font-semibold text-[#B86446]">✓ </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIX */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-4xl border border-black/5 bg-white p-10 text-center shadow-sm md:p-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
            Tarif de lancement
          </p>

          <h2 className="text-4xl font-bold text-neutral-900">
            À partir de 600€
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
            Le tarif peut évoluer selon le nombre de pages, les contenus à
            intégrer, les fonctionnalités demandées et le niveau de
            personnalisation souhaité.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
            L’objectif est simple : vous proposer une solution claire, adaptée à
            votre besoin réel, avec un devis transparent avant de commencer.
          </p>
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl bg-[#FFF8F3] p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
                Offre limitée
            </p>

            <p className="mt-3 leading-7 text-neutral-700">
                Offre de lancement valable jusqu’au 5 mai inclus. Les demandes reçues
                avant cette date bénéficieront des conditions actuelles.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
                Après cette période, les tarifs pourront évoluer selon les disponibilités
                et la nature du projet.
            </p>
        </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#D97757] px-8 py-4 font-semibold text-white transition hover:bg-[#c96b4e]"
            >
              Obtenir un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
              Déroulement
            </p>

            <h2 className="text-3xl font-bold text-neutral-900">
              Une méthode simple pour avancer rapidement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
              L’idée n’est pas de vous noyer dans la technique, mais de partir
              d’une base solide et de construire un site adapté à votre activité.
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

                <h3 className="text-xl font-semibold text-neutral-900">
                    {step.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                    {step.description}
                </p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-neutral-900">
            Vous voulez lancer votre site rapidement ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-600">
            Expliquez-moi votre besoin et je vous dirai si cette offre est
            adaptée à votre projet. Si ce n’est pas le cas, je vous proposerai
            une approche plus cohérente.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#D97757] px-8 py-4 font-semibold text-white transition hover:bg-[#c96b4e]"
            >
              Demander mon devis gratuit
            </Link>

            <Link
              href="/services"
              className="inline-flex rounded-full border border-[#D97757] bg-white px-8 py-4 font-semibold text-[#B86446] transition hover:bg-[#FFF3EA]"
            >
              Voir les services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}