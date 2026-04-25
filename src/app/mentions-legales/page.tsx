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
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B86446]">
            Informations légales
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Mentions légales
          </h1>

          <p className="mt-6 text-lg text-neutral-600 leading-8 max-w-2xl mx-auto">
            Retrouvez ici les informations légales relatives à l’édition et à
            l’exploitation du site DevOra.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Éditeur du site
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              <strong className="text-neutral-900">Nom commercial :</strong> DevOra
              <br />
              <strong className="text-neutral-900">Société exploitante :</strong> HarmoniaWear
              <br />
              <strong className="text-neutral-900">Forme juridique :</strong> SAS
              <br />
              <strong className="text-neutral-900">Siège social :</strong> 6 RUE D&apos;ARMAILLE, 75017 PARIS
              <br />
              <strong className="text-neutral-900">Numéro SIREN :</strong> 943643353
              <br />
              <strong className="text-neutral-900">Numéro SIRET :</strong> 94364335300015
              <br />
              <strong className="text-neutral-900">TVA intracommunautaire :</strong> FR09943643353
              <br />
              <strong className="text-neutral-900">Email :</strong> contact@harmoniawear.com
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Directeur de la publication
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Aziz Ayyad
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Hébergement
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              <strong className="text-neutral-900">Hébergeur :</strong> Vercel Inc.
              <br />
              <strong className="text-neutral-900">Adresse :</strong> 123 Main Street, New York, NY 10001
              <br />
              <strong className="text-neutral-900">Site web :</strong>https://devora-freelance.fr 
              <br />
              <strong className="text-neutral-900">Site web :</strong> https://vercel.com
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Propriété intellectuelle
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              L’ensemble du contenu présent sur ce site, notamment les textes,
              visuels, éléments graphiques, logo, structure et mise en page, est
              protégé par le droit de la propriété intellectuelle.
            </p>

            <p className="mt-4 text-neutral-600 leading-8">
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, de tout ou partie du site, quel
              que soit le moyen ou le procédé utilisé, est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Responsabilité
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
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