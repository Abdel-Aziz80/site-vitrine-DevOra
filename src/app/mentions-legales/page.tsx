import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - DevOra",
  description:
    "Mentions légales du site DevOra, exploité par HarmoniaWear.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales - DevOra",
    description: "Informations légales relatives au site DevOra.",
    url: "/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBFDFF] via-[#F4FAFC] to-[#EFF9F8]">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#173C91]">
            Informations légales
          </p>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Mentions légales
          </h1>

          <p className="mt-6 text-lg text-[#475569] leading-8 max-w-2xl mx-auto">
            Retrouvez ici les informations légales relatives à l’édition et à
            l’exploitation du site DevOra.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Éditeur du site
            </h2>

            <p className="mt-6 text-[#475569] leading-8">
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Nom commercial :</strong> DevOra
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Société exploitante :</strong> HarmoniaWear
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Forme juridique :</strong> SAS
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Siège social :</strong> 6 RUE D&apos;ARMAILLE, 75017 PARIS
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Numéro SIREN :</strong> 943643353
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Numéro SIRET :</strong> 94364335300015
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">TVA intracommunautaire :</strong> FR09943643353
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Email :</strong> contact@harmoniawear.com
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Directeur de la publication
            </h2>

            <p className="mt-6 text-[#475569] leading-8">
              Aziz Ayyad
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Hébergement
            </h2>

            <p className="mt-6 text-[#475569] leading-8">
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Hébergeur :</strong> Vercel Inc.
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Site édité :</strong>{" "}https://devora-freelance.fr
              <br />
              <strong className="bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">Site web :</strong> https://vercel.com
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Propriété intellectuelle
            </h2>

            <p className="mt-6 text-[#475569] leading-8">
              L’ensemble du contenu présent sur ce site, notamment les textes,
              visuels, éléments graphiques, logo, structure et mise en page, est
              protégé par le droit de la propriété intellectuelle.
            </p>

            <p className="mt-4 text-[#475569] leading-8">
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, de tout ou partie du site, quel
              que soit le moyen ou le procédé utilisé, est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Responsabilité
            </h2>

            <p className="mt-6 text-[#475569] leading-8">
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