import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développeur web freelance Le Havre | Création de site internet",
  description:
    "Développeur web freelance Le Havre. Création de sites internet professionnels, refonte, SEO local et accompagnement digital. Devis gratuit.",
  alternates: { canonical: "/le-havre" },
};

const services = [
  "Création de site vitrine professionnel",
  "Refonte de site internet existant",
  "Optimisation SEO locale et technique",
  "Page de contact claire et efficace",
  "Site responsive mobile, tablette et ordinateur",
  "Accompagnement simple, sans jargon inutile",
];

const zones = [
  { href: "/normandie", label: "Normandie" },
  { href: "/rouen", label: "Rouen" },
  { href: "/caen", label: "Caen" },
  { href: "/le-havre", label: "Le Havre" },
  { href: "/evreux", label: "Évreux" },
  { href: "/france", label: "France" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#F8FEFD] to-[#EFF9F8]">
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E7EEFF] opacity-50 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#DDF8F5] opacity-60 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9D7FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#173C91]">
            Développeur web freelance au Havre
          </span>
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Développeur web freelance au Havre
            <br />
            <span className="bg-linear-to-r from-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Création de sites internet professionnels</span>
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-[#173C91] md:text-3xl">Un site clair, responsive et pensé pour générer des demandes</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            Vous avez besoin d’un site internet sérieux pour présenter votre activité au Havre ? Je vous accompagne avec une approche simple : un site propre, lisible, adapté à vos clients et conçu pour faciliter la prise de contact.
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">
            Basé en Normandie, j’accompagne les entrepreneurs, indépendants, artisans et petites entreprises sur des projets de création de site vitrine, de refonte ou d’amélioration de visibilité Google.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:brightness-110 sm:w-auto">Demander un devis gratuit</Link>
            <Link href="/offre" className="w-full rounded-full border border-[#173C91] bg-white px-8 py-4 text-center font-semibold text-[#173C91] transition hover:bg-[#EFF9F8] sm:w-auto">Voir les offres disponibles</Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Besoin concret</p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Création de site internet au Havre</h2>
            <p className="mt-5 leading-8 text-[#475569]">Un bon site ne doit pas seulement être joli. Il doit expliquer clairement ce que vous proposez, rassurer vos visiteurs et leur donner envie de vous contacter. C’est cette logique que j’applique pour chaque projet : structure, contenu, responsive, vitesse et SEO de base.</p>
            <p className="mt-4 leading-8 text-[#475569]">L’objectif est de créer une présence en ligne professionnelle, adaptée à votre activité et compréhensible par vos futurs clients.</p>
          </div>
          <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Ce que je peux gérer</p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Des prestations simples, utiles et adaptées</h2>
            <div className="mt-8 grid gap-4">
              {services.map((service) => (<div key={service} className="rounded-2xl bg-[#F4FAFC] p-5 text-[#334155]"><span className="font-semibold text-[#173C91]">✓ </span>{service}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-10 text-center shadow-sm md:p-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Approche professionnelle</p>
          <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">Une méthode structurée, avec une base technique sérieuse</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#475569]">Mon approche s’appuie sur des compétences en développement web et web mobile : interfaces responsive, sécurité, accessibilité, bases de données, SEO et déploiement. Le but : livrer un site fiable, propre et exploitable, pas une simple page posée en ligne.</p>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">Je peux travailler à distance partout en France, avec des échanges simples par téléphone, visio ou email.</p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-10 shadow-sm md:p-14">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Maillage local</p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Zones d’intervention en Normandie</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">J’interviens également pour la création de sites internet à Rouen, Caen, Le Havre, Évreux, dans toute la Normandie et à distance partout en France.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {zones.map((zone) => (<Link key={zone.href} href={zone.href} className="rounded-full border border-[#173C91]/20 bg-white px-4 py-2 text-sm font-medium text-[#173C91] transition hover:bg-[#F4FAFC]">{zone.label}</Link>))}
          </div>
          <div className="mt-10 text-center"><Link href="/contact" className="inline-flex rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 font-semibold text-white shadow-sm transition hover:brightness-110">Parler de mon projet</Link></div>
        </div>
      </section>
    </main>
  );
}
