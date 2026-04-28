import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet à Rouen - Développeur web devora freelance",
  description:
    "Développeur web freelance à Rouen. Création de sites internet modernes, rapides et optimisés pour générer des clients.",
  alternates: {
    canonical: "/rouen",
  },
};

export default function RouenPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#F8FEFD] to-[#EFF9F8]">

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Création de site internet{" "}
            <span className="bg-linear-to-r from-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              à Rouen
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#173C91] md:text-3xl">
            Création de sites internet modernes
          </h2>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Développeur web freelance à Rouen, je crée des sites modernes et efficaces pour développer votre activité.
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

    </main>
  );
}