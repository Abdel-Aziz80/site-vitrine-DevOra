import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet en France - Développeur web freelance",
  description:
    "Développeur web freelance en France. Création de sites internet modernes et performants pour générer des clients.",
  alternates: {
    canonical: "/france",
  },
};

export default function FrancePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#F8FEFD] to-[#EFF9F8]">

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Création de site internet{" "}
            <span className="bg-linear-to-r from-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              en France
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Basé en Normandie, j’accompagne des professionnels partout en France dans la création de sites efficaces.
          </p>

          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Un site pensé pour générer des demandes, pas juste être visible.
          </p>        
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
            Exemples de sites
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-[#173C91] md:text-3xl">
            Des exemples concrets pour illustrer les possibilités
          </h2>

          <p className="mt-6 text-neutral-600 leading-8 max-w-2xl mx-auto">
            Je développe actuellement plusieurs exemples de sites internet pour
            montrer les différentes possibilités de création : artisan, restaurant,
            coach, entreprise locale…
            <br /><br />
            L’objectif est simple : vous permettre de visualiser concrètement ce qu’il
            est possible de mettre en place pour votre activité.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link
              href="/portfolio"
              className="rounded-full border border-[#173C91] px-8 py-4 text-[#173C91] font-semibold hover:bg-[#EFF9F8] transition"
            >
              Voir les exemples
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Obtenir un devis gratuit
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}