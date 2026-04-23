import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - DevOra",
  description:
    "Politique de confidentialité du site DevOra concernant la collecte et le traitement des données personnelles.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité - DevOra",
    description:
      "Informations sur la collecte et le traitement des données personnelles sur le site DevOra.",
    url: "/politique-de-confidentialite",
  },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFFDF9] via-[#FFF8F3] to-[#FFF3EA]">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B86446]">
            Données personnelles
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Politique de confidentialité
          </h1>

          <p className="mt-6 text-lg text-neutral-600 leading-8 max-w-2xl mx-auto">
            Cette page explique quelles données peuvent être collectées via le
            site DevOra et dans quel cadre elles sont utilisées.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Responsable du traitement
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Les données personnelles collectées sur ce site sont traitées par
              HarmoniaWear, exploitant le nom commercial DevOra.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Données collectées
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Lorsque vous utilisez le formulaire de contact, les données
              suivantes peuvent être collectées :
            </p>

            <ul className="mt-4 space-y-2 text-neutral-600 leading-8">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Sujet</li>
              <li>Contenu du message</li>
            </ul>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Finalité de la collecte
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Ces données sont collectées uniquement afin de répondre à votre
              demande, d’échanger avec vous au sujet de votre projet et
              d’assurer le suivi de la relation de contact.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Base légale
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Le traitement repose sur votre démarche volontaire lorsque vous
              remplissez le formulaire de contact, ainsi que sur l’intérêt
              légitime de répondre aux demandes reçues.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Durée de conservation
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Les données sont conservées pendant la durée nécessaire au
              traitement de votre demande, puis supprimées ou archivées selon
              les obligations légales applicables.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Destinataires des données
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Les données collectées sont destinées uniquement à DevOra /
              HarmoniaWear. Elles ne sont ni vendues ni cédées à des tiers,
              sauf obligation légale ou nécessité technique liée au
              fonctionnement du site.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Vos droits
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Conformément à la réglementation applicable, vous disposez d’un
              droit d’accès, de rectification, d’effacement, de limitation et,
              selon les cas, d’opposition au traitement de vos données.
            </p>

            <p className="mt-4 text-neutral-600 leading-8">
              Pour exercer vos droits, vous pouvez écrire à :
              <br />
              contact@harmoniawear.com
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Cookies
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Le site peut utiliser des cookies ou traceurs techniques
              nécessaires à son bon fonctionnement. Si d’autres outils de mesure
              d’audience ou services tiers sont ajoutés ultérieurement, cette
              politique pourra être mise à jour.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-neutral-900">
              Réclamation
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              adresser une réclamation à l’autorité compétente en matière de
              protection des données.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}