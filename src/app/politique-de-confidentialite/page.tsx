import type { Metadata } from "next";
import CodeAtmosphere from "@/components/CodeAtmosphere";

export const metadata: Metadata = {
  title: "Politique de confidentialité - DEVORA",
  description:
    "Politique de confidentialité du site DEVORA concernant la collecte et le traitement des données personnelles.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité - DEVORA",
    description:
      "Informations sur la collecte et le traitement des données personnelles sur le site DEVORA.",
    url: "/politique-de-confidentialite",
  },
};

export default function PolitiqueDeConfidentialite() {
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
            Données personnelles
          </p>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Politique de confidentialité
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/74">
            Cette page explique quelles données peuvent être collectées via le
            site DEVORA et dans quel cadre elles sont utilisées.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Responsable du traitement
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Les données personnelles collectées sur ce site sont traitées par
              HarmoniaWear, exploitant le nom commercial DEVORA.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Données collectées
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Lorsque vous utilisez le formulaire de contact, les données
              suivantes peuvent être collectées :
            </p>

            <ul className="mt-4 space-y-2 text-white/70 leading-8">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Sujet</li>
              <li>Contenu du message</li>
            </ul>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Finalité de la collecte
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Ces données sont collectées uniquement afin de répondre à votre
              demande, d’échanger avec vous au sujet de votre projet et
              d’assurer le suivi de la relation de contact.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Base légale
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Le traitement repose sur votre démarche volontaire lorsque vous
              remplissez le formulaire de contact, ainsi que sur l’intérêt
              légitime de répondre aux demandes reçues.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Durée de conservation
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Les données sont conservées pendant la durée nécessaire au
              traitement de votre demande, puis supprimées ou archivées selon
              les obligations légales applicables.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Destinataires des données
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Les données collectées sont destinées uniquement à DEVORA /
              HarmoniaWear. Elles ne sont ni vendues ni cédées à des tiers,
              sauf obligation légale ou nécessité technique liée au
              fonctionnement du site.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Vos droits
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Conformément à la réglementation applicable, vous disposez d’un
              droit d’accès, de rectification, d’effacement, de limitation et,
              selon les cas, d’opposition au traitement de vos données.
            </p>

            <p className="mt-4 text-white/70 leading-8">
              Pour exercer vos droits, vous pouvez écrire à :
              <br />
              contact@devora-freelance.fr
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Cookies
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              Le site peut utiliser des cookies ou traceurs techniques
              nécessaires à son bon fonctionnement. Si d’autres outils de mesure
              d’audience ou services tiers sont ajoutés ultérieurement, cette
              politique pourra être mise à jour.
            </p>
          </section>

          <section className="bg-white/[0.075] rounded-3xl border border-white/12 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white">
              Réclamation
            </h2>

            <p className="mt-6 text-white/70 leading-8">
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
