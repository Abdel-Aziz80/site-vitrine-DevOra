import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développeur web freelance en Normandie | Création de site internet",
  description:
    "Développeur web freelance en Normandie. Création de sites internet professionnels, responsive, SEO local, refonte et accompagnement digital. Devis gratuit.",
  alternates: { canonical: "/normandie" },
};

const cityLinks = [
  { href: "/rouen", label: "Rouen" },
  { href: "/caen", label: "Caen" },
  { href: "/le-havre", label: "Le Havre" },
  { href: "/evreux", label: "Évreux" },
  { href: "/france", label: "France" },
];

const services = ["Site vitrine professionnel", "Refonte de site internet", "Optimisation SEO locale", "Pages adaptées à votre activité", "Formulaire de contact clair", "Accompagnement à distance partout en France"];

export default function NormandiePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-[#F8FEFD] to-[#EFF9F8]">
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10"><div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E7EEFF] opacity-50 blur-3xl" /><div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#DDF8F5] opacity-60 blur-3xl" /></div>
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9D7FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#173C91]">Développeur web freelance en Normandie</span>
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Développeur web freelance en Normandie<br /><span className="bg-linear-to-r from-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Création de sites internet professionnels</span>
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-[#173C91] md:text-3xl">Une présence en ligne claire pour attirer plus de clients</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">J’accompagne les entrepreneurs, artisans, indépendants et entreprises normandes dans la création de sites internet professionnels, responsive et pensés pour générer des demandes concrètes.</p>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">Que vous soyez à Rouen, Caen, Le Havre, Évreux ou ailleurs en Normandie, je vous aide à poser une base digitale sérieuse : un site clair, rapide, crédible et optimisé pour Google.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><Link href="/contact" className="w-full rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:brightness-110 sm:w-auto">Demander un devis gratuit</Link><Link href="/offre" className="w-full rounded-full border border-[#173C91] bg-white px-8 py-4 text-center font-semibold text-[#173C91] transition hover:bg-[#EFF9F8] sm:w-auto">Voir les offres</Link></div>
        </div>
      </section>
      <section className="px-6 pb-24"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-10"><p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">SEO local</p><h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Création de site internet en Normandie</h2><p className="mt-5 leading-8 text-[#475569]">Un site internet doit présenter votre activité, rassurer vos visiteurs et faciliter le passage à l’action. Je travaille chaque page avec une logique simple : expliquer, guider et donner envie de vous contacter.</p><p className="mt-4 leading-8 text-[#475569]">L’objectif n’est pas seulement d’avoir un site joli. L’objectif est d’avoir un support commercial fiable, utilisable au quotidien et capable de renforcer votre image professionnelle.</p></div>
        <div className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm md:p-10"><p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Prestations possibles</p><h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Des solutions adaptées à votre niveau de besoin</h2><div className="mt-8 grid gap-4">{services.map((service) => (<div key={service} className="rounded-2xl bg-[#F4FAFC] p-5 text-[#334155]"><span className="font-semibold text-[#173C91]">✓ </span>{service}</div>))}</div></div>
      </div></section>
      <section className="px-6 pb-24"><div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-10 text-center shadow-sm md:p-14"><p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Crédibilité</p><h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">Une approche structurée pour un site fiable</h2><p className="mx-auto mt-6 max-w-3xl leading-8 text-[#475569]">Mon travail s’appuie sur une formation orientée développement web et web mobile : interfaces responsive, sécurité, accessibilité, bases de données, SEO et déploiement. Cette base me permet de construire des sites propres, cohérents et adaptés aux besoins réels d’une entreprise.</p></div></section>
      <section className="px-6 pb-28"><div className="mx-auto max-w-6xl rounded-4xl border border-[#061A35]/10 bg-white p-10 shadow-sm md:p-14"><div className="text-center"><p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">Zones d’intervention</p><h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Rouen, Caen, Le Havre, Évreux et toute la Normandie</h2><p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">Je peux vous accompagner localement en Normandie ou à distance partout en France.</p></div><div className="mt-8 flex flex-wrap justify-center gap-3">{cityLinks.map((city) => (<Link key={city.href} href={city.href} className="rounded-full border border-[#173C91]/20 bg-white px-4 py-2 text-sm font-medium text-[#173C91] transition hover:bg-[#F4FAFC]">{city.label}</Link>))}</div><div className="mt-10 text-center"><Link href="/contact" className="inline-flex rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 font-semibold text-white shadow-sm transition hover:brightness-110">Échanger sur mon projet</Link></div></div></section>
    </main>
  );
}
