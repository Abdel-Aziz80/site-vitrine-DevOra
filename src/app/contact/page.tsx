import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - DevOra",
  description:
    "Contactez DevOra pour discuter de votre projet de site internet, refonte de site ou accompagnement digital en Normandie.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - DevOra",
    description:
      "Échangeons autour de votre projet de site internet en Normandie.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBFDFF] via-[#F4FAFC] to-[#EFF9F8]">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#173C91]">
            Contact
          </p>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Parlons de votre projet
          </h1>

          <p className="mt-6 text-lg text-[#475569] leading-8 max-w-2xl mx-auto">
            Vous avez un projet de site internet, une refonte à prévoir ou un
            besoin d’accompagnement digital ? Échangeons ensemble pour trouver
            la solution la plus adaptée à votre activité.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          {/* FORMULAIRE */}
          <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Décrivez votre besoin
            </h2>

            <p className="mt-4 text-[#475569] leading-7">
              Remplissez ce formulaire pour présenter rapidement votre projet.
              Cela me permettra de mieux comprendre votre besoin et de vous
              répondre plus efficacement.
            </p>

            <form
              action="https://formspree.io/f/xdaypbde"
              method="POST"
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouveau message depuis le site DevOra"
              />
              
              <div>
                <label
                  htmlFor="nom"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                />
              </div>

              <div>
                <label
                  htmlFor="sujet"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Sujet
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  required
                  placeholder="Création de site, refonte, accompagnement..."
                  className="w-full rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Décrivez votre activité, votre besoin et ce que vous recherchez"
                  className="w-full resize-none rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 shadow-sm font-semibold text-white transition hover:brightness-110"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* INFOS / RASSURANCE */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                Comment se passe la suite ?
              </h2>

              <div className="mt-6 space-y-5 text-[#475569] leading-7">
                <p>
                  1. Vous m’expliquez votre besoin, votre activité et vos objectifs.
                </p>
                <p>
                  2. J’analyse votre demande afin de vous orienter vers la
                  solution la plus adaptée.
                </p>
                <p>
                  3. Nous échangeons ensuite sur le cadre du projet, les priorités
                  et les prochaines étapes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                Tarification
              </h2>

              <p className="mt-4 text-[#475569] leading-7">
                Chaque projet est différent. Le tarif dépend du besoin, du niveau
                de personnalisation, des fonctionnalités attendues et du temps
                nécessaire à la réalisation.
              </p>

              <p className="mt-4 text-[#475569] leading-7">
                Un devis personnalisé est proposé en fonction de votre projet,
                afin de vous orienter vers une solution claire, cohérente et adaptée.
              </p>

              <p className="mt-4 text-sm text-[#64748B] leading-7">
                Le TJM peut être communiqué dans le cadre d’un échange ou d’une
                prestation adaptée, mais l’objectif ici est avant tout de proposer
                une solution cohérente avec votre besoin réel.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                Autres pages utiles
              </h2>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3 border border-[#173C91] text-[#173C91] rounded-full hover:bg-[#EFF9F8] transition text-center"
                >
                  Voir mes services
                </Link>

                <Link
                  href="/a-propos"
                  className="px-6 py-3 border border-[#173C91] text-[#173C91] rounded-full hover:bg-[#EFF9F8] transition text-center"
                >
                  En savoir plus sur moi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}