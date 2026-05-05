import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offres DevOra | Création, dépannage, SEO et maintenance de site web",
  description:
    "Offres DevOra pour création de site internet, dépannage, refonte, SEO, automatisations simples et maintenance. Interventions dès 50€, devis gratuit.",
  alternates: { canonical: "/offre" },
};

const quickOffers = [
  {
    price: "50€ HT",
    title: "Modification simple",
    text: "Texte, bouton, lien, image, petite correction visible ou ajustement rapide sur une page existante.",
  },
  {
    price: "100€ HT",
    title: "Correction ou amélioration ciblée",
    text: "Correction d’un bloc, amélioration responsive simple, ajustement visuel ou petit dépannage technique.",
  },
  {
    price: "150€ HT",
    title: "Audit express",
    text: "Analyse rapide de votre site : clarté, responsive, SEO de base, points bloquants et recommandations concrètes.",
  },
];

const creationOffers = [
  {
    price: "À partir de 250€ HT",
    title: "Landing page",
    text: "Une page professionnelle pour présenter une offre, un service ou une activité avec un appel à l’action clair.",
  },
  {
  price: "600€ HT",
  title: "Site vitrine starter — offre de lancement",
  text: "Offre spéciale prolongée 7 jours, limitée aux 10 premiers projets validés. Site vitrine professionnel avec structure claire, responsive, pages essentielles, formulaire de contact et SEO de base.",
  },
  {
    price: "900€ HT",
    title: "Site vitrine starter — tarif classique",
    text: "Le même type de site vitrine starter, hors offre de lancement, avec structure professionnelle, responsive, pages essentielles, formulaire de contact et SEO de base.",
  },
  {
    price: "1200€ HT",
    title: "Site vitrine complet",
    text: "Site vitrine plus complet avec plusieurs pages, structure SEO renforcée, responsive premium et accompagnement plus poussé.",
  },
  {
    price: "Sur devis",
    title: "Projet sur mesure",
    text: "Besoin spécifique, fonctionnalités particulières, structure avancée, espace dynamique ou projet plus complet.",
  },
];

const seoOffers = [
  {
    price: "À partir de 150€ HT",
    title: "Optimisation SEO de base",
    text: "Titres, descriptions, structure H1/H2, textes, liens internes et corrections simples pour améliorer la compréhension Google.",
  },
  {
    price: "À partir de 250€ HT",
    title: "Page SEO locale",
    text: "Création ou optimisation d’une page ciblée : Rouen, Normandie, Caen, Le Havre, Évreux ou France.",
  },
  {
    price: "À partir de 300€ HT",
    title: "Optimisation Google Business",
    text: "Aide à l’optimisation de votre fiche : description, services, photos, mots-clés locaux et conseils avis clients.",
  },
];

const automationOffers = [
  {
    price: "À partir de 150€ HT",
    title: "Formulaire de contact optimisé",
    text: "Mise en place ou amélioration d’un formulaire clair pour recevoir des demandes propres et exploitables.",
  },
  {
    price: "À partir de 200€ HT",
    title: "Boutons d’action intelligents",
    text: "Ajout de boutons WhatsApp, appel, email, demande de devis ou redirection stratégique selon votre activité.",
  },
  {
    price: "À partir de 250€ HT",
    title: "Automatisation simple",
    text: "Petite automatisation adaptée : email automatique, redirection de demande, collecte d’informations ou workflow simple.",
  },
];

const maintenanceOffers = [
  {
    price: "29€ HT/mois ou 290€ HT/an",
    title: "Maintenance Essentielle",
    text: "Surveillance simple, petites corrections ponctuelles et vérification générale du bon fonctionnement du site.",
  },
  {
    price: "59€ HT/mois ou 590€ HT/an",
    title: "Maintenance Pro",
    text: "Maintenance, petites évolutions, ajustements de contenu, suivi SEO simple et accompagnement régulier.",
  },
  {
    price: "99€ HT/mois ou 990€ HT/an",
    title: "Suivi Business",
    text: "Suivi plus complet : amélioration continue, conseils, optimisation conversion, SEO et accompagnement digital.",
  },
];

const included = [
  "Design responsive mobile, tablette et ordinateur selon l’offre choisie",
  "Structure claire adaptée à votre activité",
  "Sections orientées conversion",
  "SEO de base pour aider Google à comprendre votre site",
  "Formulaire, bouton ou page de contact selon le besoin",
  "Mise en ligne et accompagnement simple",
  "Conseils pour améliorer votre présence en ligne",
  "Base professionnelle exploitable et évolutive",
];

const limits = [
  "Les prix sont indicatifs et dépendent de l’état du site existant.",
  "Une intervention à 50€ concerne un élément simple, pas une refonte complète.",
  "Le responsive est respecté autant que possible selon la structure déjà en place.",
  "Les projets plus complexes nécessitent un devis personnalisé.",
];

const steps = [
  {
    num: "1",
    title: "On échange",
    description:
      "Vous m’expliquez votre besoin, votre situation actuelle, votre budget et votre objectif.",
  },
  {
    num: "2",
    title: "Je vous oriente",
    description:
      "Je vous propose l’offre la plus cohérente : petite intervention, site, SEO, automatisation ou maintenance.",
  },
  {
    num: "3",
    title: "On avance proprement",
    description:
      "Je réalise le travail avec une approche claire, responsive, structurée et orientée résultat.",
  },
];

const faq = [
  {
    question: "Est-ce que je peux commencer avec une petite intervention ?",
    answer:
      "Oui. Les offres à 50€ ou 100€ sont justement prévues pour corriger ou améliorer un élément simple avant d’aller plus loin.",
  },
  {
    question: "Est-ce que le site sera responsive ?",
    answer:
      "Oui, l’objectif est d’avoir un rendu adapté mobile, tablette et ordinateur. Pour un site existant, cela dépend aussi de sa structure actuelle.",
  },
  {
    question: "Est-ce que vous travaillez à distance ?",
    answer:
      "Oui. Les échanges peuvent se faire par téléphone, email, visio ou message, partout en France.",
  },
  {
    question: "Est-ce que je peux demander un devis avant de commencer ?",
    answer:
      "Oui. Le devis permet de cadrer clairement le besoin, le budget et le niveau d’intervention nécessaire.",
  },
];

export default function OffrePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBFDFF] via-[#F4FAFC] to-[#EFF9F8]">
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E7EEFF] opacity-50 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#DDF8F5] opacity-60 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9D7FF] bg-white/80 px-4 py-2 text-sm font-medium text-[#173C91]">
            Offres DevOra
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent sm:text-6xl md:text-7xl">
            Des offres web adaptées à votre besoin
            <br />
            <span className="bg-linear-to-r from-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              du dépannage au projet complet
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#173C91] md:text-3xl">
            Commencer petit, avancer proprement, investir au bon moment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            Vous avez besoin d’un site internet, d’une correction, d’une page SEO,
            d’une automatisation simple ou d’un suivi régulier ? Je vous propose
            des solutions progressives, claires et adaptées à votre budget.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:brightness-110 sm:w-auto"
            >
              Demander un devis gratuit
            </Link>

            <Link
              href="/simulateur"
              className="w-full rounded-full bg-[#EFF9F8] px-8 py-4 text-center font-semibold text-[#173C91] transition hover:bg-[#DDF8F5] sm:w-auto"
            >
              Estimer mon projet en ligne
            </Link>

            <Link
              href="#interventions"
              className="w-full rounded-full border border-[#173C91] bg-white px-8 py-4 text-center font-semibold text-[#173C91] transition hover:bg-[#EFF9F8] sm:w-auto"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      <section id="interventions" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Petites interventions
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">
              Une porte d’entrée simple dès 50€
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">
              Idéal pour corriger un détail, améliorer un élément ou tester une
              première collaboration sans engager un gros budget.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {quickOffers.map((offer) => (
              <div key={offer.title} className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.price}
                </p>
                <h3 className="mt-4 text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-8 text-[#475569]">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Création de site internet
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">
              Des solutions évolutives selon votre projet
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {creationOffers.map((offer) => (
              <div key={offer.title} className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.price}
                </p>
                <h3 className="mt-4 text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-8 text-[#475569]">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              SEO et visibilité
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">
              Être visible ne doit pas être laissé au hasard
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {seoOffers.map((offer) => (
              <div key={offer.title} className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.price}
                </p>
                <h3 className="mt-4 text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-8 text-[#475569]">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Automatisations simples
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">
              Gagner du temps avec des actions simples
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">
              Je reste sur des automatisations cohérentes et maîtrisées :
              formulaires, boutons, redirections, emails ou petits workflows simples.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {automationOffers.map((offer) => (
              <div key={offer.title} className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.price}
                </p>
                <h3 className="mt-4 text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-8 text-[#475569]">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Suivi annuel
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent md:text-4xl">
              Votre site doit rester propre après sa mise en ligne
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {maintenanceOffers.map((offer) => (
              <div key={offer.title} className="rounded-4xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
                  {offer.price}
                </p>
                <h3 className="mt-4 text-2xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                  {offer.title}
                </h3>
                <p className="mt-4 leading-8 text-[#475569]">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-4xl border border-[#061A35]/10 bg-white p-10 shadow-sm md:p-14">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Inclus selon l’offre
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Une base professionnelle claire et exploitable
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="rounded-2xl bg-[#F4FAFC] p-5 text-[#334155]">
                <span className="font-semibold text-[#173C91]">✓ </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#EFF9F8] p-6">
            <p className="font-semibold text-[#061A35]">Important :</p>
            <ul className="mt-4 space-y-2 text-[#475569]">
              {limits.map((limit) => (
                <li key={limit}>• {limit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-4xl border border-[#061A35]/10 bg-white p-10 text-center shadow-sm md:p-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
            Crédibilité
          </p>
          <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
            Une approche structurée et professionnelle
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#475569]">
            Développeur web formé et certifié RNCP niveau 5, je m’appuie sur une
            méthode de travail claire : analyse du besoin, structure responsive,
            SEO de base, sécurité, mise en ligne et accompagnement.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Déroulement
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Une méthode simple pour avancer sans confusion
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="rounded-3xl border border-[#061A35]/10 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#173C91] text-sm font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#475569]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#173C91]">
              Questions fréquentes
            </p>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
              Avant de me contacter
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <div key={item.question} className="rounded-3xl border border-[#061A35]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#061A35]">{item.question}</h3>
                <p className="mt-3 leading-7 text-[#475569]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] bg-clip-text text-transparent">
            Vous ne savez pas quelle offre choisir ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#475569]">
            Expliquez-moi simplement votre besoin. Je vous dirai si une petite
            intervention suffit ou s’il faut prévoir une solution plus complète.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Demander mon devis gratuit
            </Link>

            <Link
              href="/simulateur"
              className="inline-flex rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Estimer mon projet en ligne
            </Link>  

            <Link
              href="/services"
              className="inline-flex rounded-full border border-[#173C91] bg-white px-8 py-4 font-semibold text-[#173C91] transition hover:bg-[#EFF9F8]"
            >
              Voir les services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}