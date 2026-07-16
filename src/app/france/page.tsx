import Link from "next/link";
import type { Metadata } from "next";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { creationOffers } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Création de site internet à distance en France",
  description:
    "Création de sites premium, pages de vente et outils métier à distance. DEVORA accompagne les professionnels depuis la Normandie.",
  alternates: { canonical: "/france" },
};

const remoteBenefits = [
  "Cadrage clair par email, téléphone ou visio",
  "Structure du site validée avant réalisation",
  "Devis transparent avant de commencer",
  "Suivi simple des priorités et contenus",
  "Site responsive et base SEO propre",
  "Accompagnement possible après mise en ligne",
];

export default function FrancePage() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-center text-white">
        <div className="absolute inset-0">
          <CodeAtmosphere />
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C3AED]/25 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#22D3EE]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-[#A5F3FC]">
            Création de site internet à distance
          </span>
          <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Une plateforme claire, même si le cadrage se fait à distance.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
            Basée en Normandie, DEVORA accompagne aussi des professionnels et
            petites entreprises partout en France quand le besoin est bien cadré.
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/62">
            Les tarifs restent cohérents : page de vente à <strong>300€ HT</strong>,
            site starter à <strong>600€ HT</strong> et site vitrine
            complet à <strong>1200€ HT</strong>.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_france_contact"
              eventLabel="France contact"
              className="w-full rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110 sm:w-auto"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/portfolio"
              className="w-full rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/12 sm:w-auto"
            >
              Voir les études de cas
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
              Travail à distance
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Un fonctionnement simple sans rendez-vous physique.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Un projet web peut avancer efficacement à distance si les échanges
              sont clairs. On définit vos services, votre cible, votre zone, vos
              contenus et les priorités avant de lancer la réalisation.
            </p>
          </div>
          <div className="rounded-4xl border border-white/12 bg-white/[0.075] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
              Avantages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Une base pro sans complexité.
            </h2>
            <div className="mt-7 grid gap-4">
              {remoteBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl bg-white/[0.07] p-5 text-white/72">
                  <span className="font-semibold text-[#67E8F9]">✓ </span>
                  {benefit}
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
              Offres disponibles
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Les mêmes repères, même à distance.
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

      <section className="px-6 pb-28">
        <div className="devora-dark-section mx-auto max-w-6xl rounded-4xl p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Vous êtes hors Normandie ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/75">
            Décrivez votre activité et votre besoin. DEVORA vous dira rapidement
            si un accompagnement à distance est adapté.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName="cta_france_final"
              eventLabel="France final"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-8 py-4 text-center font-semibold text-white transition hover:brightness-110"
            >
              Échanger sur mon projet
            </TrackedLink>
            <Link
              href="/normandie"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Voir la page Normandie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
