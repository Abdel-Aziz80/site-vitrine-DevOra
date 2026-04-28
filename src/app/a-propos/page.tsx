import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos - Développeur web freelance en Normandie",
  description:
    "Découvrez DevOra, développeur web freelance en Normandie spécialisé dans la création de sites vitrines modernes et performants.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos - Développeur web freelance en Normandie | DevOra",
    description:
      "DevOra accompagne entreprises, artisans et indépendants dans la création de sites internet modernes, clairs et professionnels.",
    url: "/a-propos",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBFDFF] via-[#F4FAFC] to-[#EFF9F8]">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#173C91]">
            À propos
          </p>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Une approche moderne, claire et orientée résultat
          </h1>

          <p className="mt-6 text-lg text-[#475569] leading-8 max-w-2xl mx-auto">
            Développeur web freelance en Normandie, j’accompagne les entreprises,
            artisans et indépendants dans la création de sites internet
            professionnels, pensés pour inspirer confiance et soutenir leur activité.
          </p>
        </div>
      </section>

      {/* MON OBJECTIF */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
            Mon objectif
          </h2>

          <p className="mt-6 text-[#475569] leading-8">
            Aujourd’hui, un site internet est bien plus qu’une simple vitrine.
            C’est un outil essentiel pour présenter son activité, gagner en
            crédibilité et faciliter le contact avec de futurs clients.
          </p>

          <p className="mt-4 text-[#475569] leading-8">
            Mon rôle est de concevoir des sites web modernes, structurés et
            efficaces, adaptés aux besoins réels de chaque activité. L’idée n’est
            pas seulement de créer un site agréable à regarder, mais un site
            utile, lisible et cohérent avec votre image.
          </p>

          <p className="mt-4 text-[#475569] leading-8">
            À travers DevOra, je cherche à proposer une approche sérieuse,
            claire et professionnelle du développement web, avec une attention
            particulière portée à la simplicité, à la présentation et à l’impact
            global du site.
          </p>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Une méthode simple et efficace
            </h2>

            <p className="mt-4 text-[#475569] max-w-2xl mx-auto leading-8">
              Chaque projet suit une logique claire pour avancer dans la bonne
              direction, sans complexité inutile.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#173C91]">
                Comprendre
              </p>
              <p className="mt-4 text-[#475569] leading-7">
                Prendre le temps de comprendre votre activité, vos objectifs et
                le message que votre site doit transmettre.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#173C91]">
                Structurer
              </p>
              <p className="mt-4 text-[#475569] leading-7">
                Organiser le contenu et concevoir une interface claire, moderne
                et facile à utiliser sur tous les écrans.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#173C91]">
                Valoriser
              </p>
              <p className="mt-4 text-[#475569] leading-7">
                Mettre en avant votre activité avec un site plus crédible, plus
                professionnel et plus rassurant pour vos visiteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI ME CHOISIR */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
            Pourquoi travailler avec DevOra ?
          </h2>

          <ul className="mt-6 space-y-4 text-[#475569] leading-7">
            <li>Une approche centrée sur vos objectifs et votre activité</li>
            <li>Un design moderne et une structure claire</li>
            <li>Une attention portée à la lisibilité, à la performance et à l’image</li>
            <li>Une communication simple, fluide et professionnelle</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
            Vous avez un projet de site internet ?
          </h2>

          <p className="mt-4 text-[#475569] max-w-2xl mx-auto leading-8">
            Discutons ensemble de vos besoins et de la meilleure manière de
            construire une présence en ligne claire, moderne et efficace.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] text-white rounded-full shadow-sm hover:brightness-110 transition"
            >
            Discuter de mon projet
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 border border-[#173C91] text-[#173C91] rounded-full hover:bg-[#EFF9F8] transition"
            >
              Voir mes services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}