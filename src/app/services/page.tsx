import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services de création de site vitrine en Normandie",
  description:
    "Création de site vitrine, refonte, landing page, maintenance et accompagnement digital pour artisans, indépendants et entreprises en Normandie.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services de création de site vitrine en Normandie | DevOra",
    description:
      "Site vitrine, refonte, landing page, maintenance et accompagnement digital en Normandie.",
    url: "/services",
  },
};

const prestations = [
  {
    title: "Site vitrine professionnel",
    price: "À partir de 800 € HT",
    description:
      "Un site clair, moderne et responsive pour présenter votre activité, vos services et faciliter la prise de contact.",
    items: [
      "Pages essentielles : accueil, services, à propos, contact",
      "Design adapté mobile, tablette et ordinateur",
      "Formulaire de contact fonctionnel",
      "Base optimisée pour le référencement",
    ],
  },
  {
    title: "Landing page",
    price: "À partir de 300 € HT",
    description:
      "Une page unique pensée pour présenter une offre, générer des contacts ou promouvoir un service précis.",
    items: [
      "Structure orientée conversion",
      "Message clair et direct",
      "Boutons d’action visibles",
      "Mise en page responsive",
    ],
  },
  {
    title: "Refonte ou amélioration",
    price: "À partir de 150 € HT",
    description:
      "Amélioration d’un site existant pour le rendre plus clair, plus moderne ou plus efficace.",
    items: [
      "Corrections visuelles",
      "Amélioration de l’expérience utilisateur",
      "Optimisation de sections existantes",
      "Petits correctifs techniques",
    ],
  },
  {
    title: "Fonctionnalités spécifiques",
    price: "Sur devis",
    description:
      "Ajout de fonctionnalités adaptées à votre besoin : formulaire avancé, affichage dynamique, petite application web ou tableau de bord simple.",
    items: [
      "Analyse du besoin",
      "Développement sur mesure",
      "Connexion à une API ou une base de données",
      "Tests et ajustements",
    ],
  },
  {
    title: "Maintenance et suivi",
    price: "À partir de 50 € HT / mois",
    description:
      "Un accompagnement pour garder votre site propre, à jour et fonctionnel dans le temps.",
    items: [
      "Petites corrections",
      "Mises à jour simples",
      "Vérification du bon fonctionnement",
      "Accompagnement ponctuel",
    ],
  },
  {
    title: "Application web sur mesure",
    price: "À partir de 3 000 € HT",
    description:
      "Développement d’applications web complètes adaptées à vos besoins : interface utilisateur, API, base de données et logique métier.",
    items: [
      "Interface utilisateur moderne avec React",
      "Développement back-end avec Node.js / Express",
      "Création d’API",
      "Base de données MySQL ou MongoDB",
      "Authentification utilisateur",
      "Structure évolutive et maintenable",
    ],
    details:
      "Le délai et le tarif final sont définis après échange et analyse du besoin. Chaque projet étant différent, une estimation précise est proposée uniquement après validation du périmètre.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B86446]">
            Services
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Des prestations claires pour développer votre présence en ligne
          </h1>

          <p className="mt-6 text-lg text-neutral-600 leading-8 max-w-2xl mx-auto">
            Je vous accompagne dans la création, la refonte et l’amélioration de
            votre site internet avec une approche simple, moderne et adaptée à
            votre activité.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {prestations.map((prestation) => (
            <article
              key={prestation.title}
              className={`bg-white rounded-3xl border border-black/5 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition ${
                prestation.title === "Application web sur mesure" ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {prestation.title}
                </h2>

                <p className="shrink-0 rounded-full bg-[#FFF3EA] px-4 py-2 text-sm font-semibold text-[#B86446]">
                  {prestation.price}
                </p>
              </div>

              <p className="mt-5 text-neutral-600 leading-7">
                {prestation.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                {prestation.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {"details" in prestation && prestation.details && (
                <div className="mt-6 rounded-2xl bg-[#FFF8F3] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#B86446]">
                    Estimation après échange
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {prestation.details}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 rounded-3xl border border-black/5 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-neutral-900">
            Des tarifs indicatifs, adaptés à votre projet
          </h2>

          <p className="mt-4 text-neutral-600 leading-8">
            Chaque projet est différent. Les tarifs affichés donnent une base de
            départ, mais le prix final dépend du besoin, du nombre de pages, du
            niveau de personnalisation et des fonctionnalités attendues.
          </p>

          <p className="mt-4 text-neutral-600 leading-8">
            Après un premier échange, je vous propose une solution claire, un
            plan simple et un devis adapté.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-black/5 shadow-sm p-10 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Pour qui ?</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-8">
              Mes services s’adressent aux professionnels qui ont besoin d’un
              site sérieux, clair et efficace pour mieux présenter leur activité.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Entreprises
              </h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Pour renforcer votre image de marque et disposer d’une présence
                en ligne professionnelle.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Artisans
              </h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Pour montrer votre savoir-faire, vos prestations et faciliter la
                prise de contact.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8F3] p-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Indépendants
              </h3>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B86446]">
                Étape 1
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">Échange</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Nous clarifions vos besoins, vos objectifs et l’image que vous
                souhaitez transmettre.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B86446]">
                Étape 2
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">Conception</h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Je structure le site et conçois une interface moderne, lisible
                et adaptée à votre activité.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B86446]">
                Étape 3
              </p>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                Mise en ligne
              </h3>
              <p className="mt-3 text-neutral-600 leading-7">
                Le site est finalisé, vérifié et prêt à être présenté à vos
                futurs clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl border border-black/5 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Vous avez un projet de site internet ?
          </h2>

          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-8">
            Envoyez-moi votre besoin et je vous proposerai une première approche
            claire, adaptée à votre activité.
          </p>

          <p className="mt-3 text-sm font-medium text-[#B86446]">
            Réponse sous 24 à 48h ouvrées, souvent plus rapide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#D97757] text-white rounded-full hover:bg-[#c96b4e] transition"
            >
              Obtenir un devis gratuit
            </Link>

            <Link
              href="/portfolio"
              className="px-8 py-4 border border-[#D97757] text-[#B86446] rounded-full hover:bg-[#FFF3EA] transition"
            >
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}