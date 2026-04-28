import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet en Normandie - Développeur web freelance",
  description:
    "Développeur web freelance en Normandie. Création de sites internet modernes, rapides et optimisés pour générer des clients. Devis gratuit.",
  alternates: {
    canonical: "/normandie",
  },
};

export default function NormandiePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#F8FEFD] to-[#EFF9F8]">

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Création de site internet{" "}
            <span className="bg-linear-to-r from-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              en Normandie
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Développeur web freelance en Normandie, je crée des sites modernes et efficaces pour développer votre activité.
          </p>

          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Un site pensé pour générer des demandes, pas juste être visible.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Obtenir un devis gratuit
            </Link>

            <Link
              href="/offre"
              className="rounded-full border border-[#173C91] px-8 py-4 text-[#173C91] hover:bg-[#EFF9F8] transition"
            >
              Voir l’offre à partir de 600€
            </Link>
          </div>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-2xl font-semibold text-[#173C91] md:text-3xl">
            Développer votre activité en Normandie grâce à internet
          </h2>

          <p className="mt-6 text-neutral-600 leading-8">
            Aujourd’hui, être visible en ligne est indispensable pour toute entreprise en Normandie.
            Un site internet bien conçu permet de gagner en crédibilité et d’attirer de nouveaux clients.
          </p>

        </div>
      </section>

    </main>
  );
}