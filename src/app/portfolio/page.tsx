import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - DevOra",
  description:
    "Découvrez les projets réalisés par DevOra, développeur web freelance en Normandie.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio - DevOra",
    description:
      "Découvrez une sélection de projets web et design réalisés par DevOra.",
    url: "/portfolio",
  },
};

const projects = [
  {
    title: "DevOra - Site vitrine freelance",
    description:
      "Création d’un site vitrine moderne pour présenter une activité de développeur web freelance, avec une approche centrée sur la clarté, l’image et la conversion.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    live: "https://devora-freelance.fr",
    github: "",
    status: "Projet principal",
  },
  {
    title: "Trouver son artisan",
    description:
      "Projet de formation visant à concevoir une interface simple permettant de connecter des particuliers avec des artisans.",
    tech: "React",
    live: "",
    github: "https://github.com/Abdel-Aziz80/trouve-ton-artisan",
    status: "Projet de formation",
  },
  {
    title: "Touche pas à mon klaxon",
    description:
      "Application web développée en PHP dans le cadre d’un projet de formation, avec une gestion des données et une logique backend sans framework.",
    tech: "PHP, HTML, CSS",
    image: "/portfolio/klaxon.jpg",
    live: "",
    github: "https://github.com/Abdel-Aziz80/touche-pas-au-klaxon",
    status: "Projet backend",
  },
  {
    title: "Maquettes UI - Probeats",
    description:
      "Conception de maquettes d’un site web avec Figma, incluant la structure des pages, la hiérarchie visuelle et l’organisation du contenu.",
    tech: "Figma",
    live: "",
    github:
      "https://github.com/Abdel-Aziz80/Ayyad_Aziz_4_Maquetter_le_site_Probeats_avec_Figma",
    status: "Projet design",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBFDFF] via-[#F4FAFC] to-[#EFF9F8]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#173C91]">
            Portfolio
          </p>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Quelques projets et réalisations
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Découvrez une sélection de projets web et design qui illustrent mon
            approche : créer des interfaces claires, modernes et utiles.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl border border-[#061A35]/10 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#2DBEB5]/30 transition"
            >
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#173C91]">
                {project.status}
              </p>

              <h2 className="mt-3 text-xl font-semibold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                {project.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-gray-500">{project.tech}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {project.live && (
                  <Link
                    href={project.live}
                    className="px-4 py-2.5 bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] text-white rounded-full shadow-sm text-center hover:brightness-110 transition"
                  >
                    Voir le site
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    className="px-4 py-2.5 border border-[#173C91] text-[#173C91] rounded-full text-center hover:bg-[#EFF9F8] transition"
                  >
                    Voir le code
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
            Vous avez un projet en tête ?
          </h2>

          <p className="mt-4 text-[#475569] max-w-2xl mx-auto leading-8">
            Je peux vous accompagner dans la création d’un site internet moderne,
            clair et professionnel, adapté à votre activité.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] text-white rounded-full shadow-sm hover:brightness-110 transition"
            >
              Obtenir un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}