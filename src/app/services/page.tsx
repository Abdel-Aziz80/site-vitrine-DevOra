import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services de création de site vitrine en Normandie",
  description:
    "Création de site vitrine, refonte de site et accompagnement digital pour artisans, indépendants et entreprises en Normandie.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services de création de site vitrine en Normandie | DevOra",
    description:
      "Site vitrine, refonte et accompagnement digital en Normandie.",
    url: "/services",
  },
};

export default function Services() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B86446]">
            Services
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Des services pensés pour développer votre présence en ligne
          </h1>

          <p className="mt-6 text-lg text-neutral-600 leading-8 max-w-2xl mx-auto">
            Je conçois des sites web modernes, rapides et professionnels pour
            aider les entreprises, artisans et indépendants à gagner en crédibilité,
            mieux présenter leur activité et attirer de nouveaux clients.
          </p>
        </div>
      </section>

      {/* OFFRES */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <article className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Création de site vitrine
            </h2>

            <p className="mt-4 text-neutral-600 leading-7">
              Un site clair, moderne et responsive pour présenter votre activité,
              vos services et permettre à vos visiteurs de vous contacter facilement.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>Design professionnel et moderne</li>
              <li>Site adapté mobile, tablette et ordinateur</li>
              <li>Structure pensée pour inspirer confiance</li>
              <li>Base optimisée pour le référencement</li>
            </ul>
          </article>

          <article className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Refonte de site
            </h2>

            <p className="mt-4 text-neutral-600 leading-7">
              Vous avez déjà un site mais il ne correspond plus à votre image
              ou n’est plus assez efficace ? Je vous aide à le moderniser.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>Amélioration du design et de la lisibilité</li>
              <li>Réorganisation du contenu</li>
              <li>Expérience utilisateur plus fluide</li>
              <li>Base plus propre et plus performante</li>
            </ul>
          </article>

          <article className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Accompagnement digital
            </h2>

            <p className="mt-4 text-neutral-600 leading-7">
              Au-delà du site lui-même, je vous accompagne pour clarifier votre
              présence en ligne et construire une image cohérente et rassurante.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>Conseils sur la structure du site</li>
              <li>Orientation sur les pages essentielles</li>
              <li>Approche orientée visibilité et conversion</li>
              <li>Accompagnement adapté à votre activité</li>
            </ul>
          </article>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-black/5 shadow-sm p-10 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Pour qui ?</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-8">
              Mes services s’adressent aux professionnels qui ont besoin d’un site
              sérieux, clair et efficace pour mieux présenter leur activité.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <h3 className="text-xl font-semibold text-neutral-900">Entreprises</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Pour renforcer votre image de marque et disposer d’une présence
                en ligne professionnelle.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <h3 className="text-xl font-semibold text-neutral-900">Artisans</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Pour montrer votre savoir-faire, vos prestations et faciliter
                la prise de contact.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <h3 className="text-xl font-semibold text-neutral-900">Indépendants</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Pour gagner en crédibilité et présenter vos services de manière
                claire et convaincante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Ma méthode</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-8">
              Une approche simple, claire et structurée pour avancer efficacement
              sur votre projet.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                01
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">Échange</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Nous clarifions vos besoins, vos objectifs et l’image que vous
                souhaitez transmettre.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                02
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">Conception</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Je structure le site et conçois une interface moderne, lisible
                et adaptée à votre activité.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                03
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">Mise en ligne</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Le site est finalisé, vérifié et prêt à être présenté à vos
                futurs clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl border border-black/5 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Vous avez un projet de site internet ?
          </h2>

          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-8">
            Discutons de votre activité, de vos besoins et de la meilleure
            manière de créer une présence en ligne claire, moderne et efficace.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#D97757] text-white rounded-full hover:bg-[#c96b4e] transition"
            >
              Discuter de mon projet
            </Link>

            <Link
              href="/a-propos"
              className="px-8 py-4 border border-[#D97757] text-[#B86446] rounded-full hover:bg-[#FFF3EA] transition"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}