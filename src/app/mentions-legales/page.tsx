import type { Metadata } from "next";
import CodeAtmosphere from "@/components/CodeAtmosphere";

export const metadata: Metadata = {
  title: "Mentions légales - DEVORA",
  description:
    "Mentions légales du site DEVORA, exploité par HarmoniaWear.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales - DEVORA",
    description: "Informations légales relatives au site DEVORA.",
    url: "/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      {/* HERO */}
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-center text-white">
        <CodeAtmosphere />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[12%] top-12 h-64 w-64 rounded-full bg-[#2563EB] blur-3xl" />
          <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-[#22D3EE] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#22D3EE]">
            Informations légales
          </p>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Mentions légales
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/74">
            Retrouvez ici les informations légales relatives à l’édition et à
            l’exploitation du site DEVORA.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Éditeur du site
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              <strong className="text-[#67E8F9]">Nom commercial :</strong> DEVORA
              <br />
              <strong className="text-[#67E8F9]">Société exploitante :</strong> HarmoniaWear
              <br />
              <strong className="text-[#67E8F9]">Forme juridique :</strong> SAS
              <br />
              <strong className="text-[#67E8F9]">Siège social :</strong> 6 RUE D&apos;ARMAILLE, 75017 PARIS
              <br />
              <strong className="text-[#67E8F9]">Numéro SIREN :</strong> 943643353
              <br />
              <strong className="text-[#67E8F9]">Numéro SIRET :</strong> 94364335300015
              <br />
              <strong className="text-[#67E8F9]">TVA intracommunautaire :</strong> FR09943643353
              <br />
              <strong className="text-[#67E8F9]">Email :</strong> contact@devora-freelance.fr
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Directeur de la publication
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Aziz Ayyad
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Hébergement
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              <strong className="text-[#67E8F9]">Hébergeur :</strong> Vercel Inc.
              <br />
              <strong className="text-[#67E8F9]">Site édité :</strong>{" "}https://devora-freelance.fr
              <br />
              <strong className="text-[#67E8F9]">Site web :</strong> https://vercel.com
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Propriété intellectuelle
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              L’ensemble du contenu présent sur ce site, notamment les textes,
              visuels, éléments graphiques, logo, structure et mise en page, est
              protégé par le droit de la propriété intellectuelle.
            </p>

            <p className="mt-4 text-white/70 leading-8">
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, de tout ou partie du site, quel
              que soit le moyen ou le procédé utilisé, est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Responsabilité
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Les informations diffusées sur ce site sont fournies à titre
              informatif. Malgré le soin apporté à leur rédaction et à leur mise
              à jour, l’éditeur ne peut garantir l’exactitude, l’exhaustivité ou
              l’actualité de l’ensemble des contenus.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
