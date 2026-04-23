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
    live: "",
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
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B86446]">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
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
              className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#B86446]">
                {project.status}
              </p>

              <h2 className="mt-3 text-xl font-semibold text-neutral-900">
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
                    className="px-4 py-2.5 bg-[#D97757] text-white rounded-full text-center hover:bg-[#c96b4e] transition"
                  >
                    Voir le site
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    className="px-4 py-2.5 border border-[#D97757] text-[#B86446] rounded-full text-center hover:bg-[#FFF3EA] transition"
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
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl border border-black/5 shadow-sm p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Vous avez un projet en tête ?
          </h2>

          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-8">
            Je peux vous accompagner dans la création d’un site internet moderne,
            clair et professionnel, adapté à votre activité.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#D97757] text-white rounded-full hover:bg-[#c96b4e] transition"
            >
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}