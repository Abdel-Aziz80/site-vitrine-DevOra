export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://devora-freelance.fr";

export const contactEmail =
  process.env.NEXT_PUBLIC_DEVORA_CONTACT_EMAIL || "contact@devora-freelance.fr";

const optionalSocialLinks = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_DEVORA_INSTAGRAM_URL },
  { label: "TikTok", href: process.env.NEXT_PUBLIC_DEVORA_TIKTOK_URL },
  { label: "Facebook", href: process.env.NEXT_PUBLIC_DEVORA_FACEBOOK_URL },
].filter((link): link is { label: string; href: string } => Boolean(link.href));

export const socialLinks = [
  ...optionalSocialLinks,
  {
    label: "LinkedIn",
    href:
      process.env.NEXT_PUBLIC_DEVORA_LINKEDIN_URL ||
      "https://www.linkedin.com/in/aziz-ayyad-0189bb37b/",
  },
];

export const reassuranceBadges = [
  "Diagnostic initial offert",
  "Réponse sous 24 à 48h ouvrées",
  "Cadrage clair avant chiffrage",
  "Accompagnement après livraison",
];

export const quickOffers = [
  {
    price: "50€ HT",
    title: "Correction express",
    text: "Texte, lien, bouton, image ou petit ajustement visible sur une page existante.",
  },
  {
    price: "100€ HT",
    title: "Correction ciblée",
    text: "Correction responsive, bloc cassé, bug léger ou amélioration visuelle rapide.",
  },
  {
    price: "150€ HT",
    title: "Audit express",
    text: "Analyse claire de votre site avec les freins SEO, confiance et conversion à corriger en priorité.",
  },
];

export const creationOffers = [
  {
    price: "300€ HT",
    title: "Page de vente",
    tag: "Acquisition / Facebook Ads",
    text: "Une page claire pour présenter une offre, rassurer vite et déclencher plus de demandes.",
    items: [
      "1 page responsive",
      "Message compréhensible",
      "Bouton de contact visible",
      "SEO de base",
    ],
  },
  {
    price: "600€ HT",
    title: "Site starter",
    tag: "Offre d'appel",
    text: "Une base premium pour expliquer une activité, rassurer les visiteurs et générer des contacts sans complexité inutile.",
    items: [
      "Pages essentielles",
      "Formulaire de contact",
      "Responsive mobile",
      "SEO local de base",
    ],
  },
  {
    price: "sur devis",
    title: "Outil métier sur mesure",
    tag: "Pilotage, automatisation, IA ou sécurité",
    text: "Un outil sur mesure pour suivre votre activité, centraliser vos informations, automatiser des tâches ou protéger certains usages internes.",
    items: [
      "Cadrage fonctionnel",
      "Interface claire et responsive",
      "Données utiles au bon endroit",
      "Architecture évolutive",
    ],
  },
];

export const maintenanceOffers = [
  {
    price: "29€ HT/mois",
    title: "Maintenance essentielle",
    text: "Surveillance simple, petites corrections ponctuelles et vérification générale.",
  },
  {
    price: "59€ HT/mois",
    title: "Maintenance pro",
    text: "Maintenance, ajustements de contenu, suivi SEO simple et accompagnement régulier.",
  },
  {
    price: "99€ HT/mois",
    title: "Suivi business",
    text: "Optimisation continue, conseils conversion, SEO local et priorisation des améliorations.",
  },
];

export const trustPillars = [
  {
    title: "Socle technique certifié",
    text: "Base technique solide : vitesse, sécurité, lisibilité mobile, référencement, mise en ligne et maintenance propre.",
  },
  {
    title: "Approche business",
    text: "La plateforme n'est pas pensée comme une décoration : l'objectif est de clarifier l'offre, rassurer, faire gagner du temps ou générer des demandes.",
  },
  {
    title: "Culture produit",
    text: "DEVORA structure les interfaces comme des outils : parcours simples, priorités visibles, données utiles et base prête à évoluer.",
  },
];

export const processSteps = [
  {
    num: "1",
    title: "Diagnostic",
    text: "On clarifie l'activité, les utilisateurs, les risques, les données utiles et l'objectif prioritaire.",
  },
  {
    num: "2",
    title: "Structure",
    text: "DEVORA structure les pages, les messages, les boutons de contact, les contenus et la base SEO autour des besoins réels.",
  },
  {
    num: "3",
    title: "Mise en ligne",
    text: "La version est vérifiée, mise en ligne, puis améliorée selon les retours, les métriques et les priorités.",
  },
];

export const faqs = [
  {
    question: "Est-ce possible de démarrer avec un petit budget ?",
    answer:
      "Oui. Les interventions à 50€, 100€ ou 150€ permettent de corriger un point précis. Pour un premier site complet, l'offre starter lancement démarre à 600€ HT.",
  },
  {
    question: "Combien de temps faut-il pour un site starter ?",
    answer:
      "Le délai dépend surtout des contenus disponibles. Pour une base simple et bien cadrée, il faut généralement compter 7 à 15 jours ouvrés après validation des éléments.",
  },
  {
    question: "Est-ce que le site sera visible sur Google ?",
    answer:
      "La base SEO est incluse : structure propre, titres, descriptions, responsive, vitesse et pages locales si besoin. Le référencement durable dépend ensuite du contenu, de la concurrence et de la régularité.",
  },
  {
    question: "Que dois-je fournir ?",
    answer:
      "Vos services, votre zone d'intervention, vos coordonnées, quelques photos si vous en avez et les informations essentielles sur votre activité. DEVORA peut vous aider à structurer tout ça.",
  },
  {
    question: "Est-ce que je suis accompagné après la mise en ligne ?",
    answer:
      "Oui. Vous pouvez prendre une maintenance mensuelle ou demander des interventions ponctuelles selon vos besoins.",
  },
];

export const caseStudies = [
  {
    title: "DEVORA - plateforme vitrine",
    status: "Vitrine commerciale",
    image: "/assets/devora-hexagon.png",
    objective:
      "Créer une présence professionnelle claire pour présenter une offre web locale et générer des demandes de devis.",
    stack: "Page claire, SEO local, mobile, contact",
    features: [
      "Pages locales Normandie",
      "Offres tarifées",
      "Simulateur de devis",
      "Formulaire de contact",
    ],
    benefit:
      "Une base complète pour tester l'acquisition, affiner le positionnement et convertir les premiers prospects sans exposer les systèmes internes.",
    live: "https://devora-freelance.fr",
    github: "",
  },
  {
    title: "Trouver son artisan",
    status: "Prototype métier",
    image: "/assets/devora-hexagon.png",
    objective:
      "Imaginer une interface simple pour connecter particuliers et artisans autour d'un besoin local.",
    stack: "Recherche locale, cartes prestataires, parcours simple",
    features: [
      "Parcours de recherche",
      "Cartes prestataires",
      "Interface responsive",
      "Structure réutilisable",
    ],
    benefit:
      "Montre la capacité à concevoir des interfaces utiles pour des métiers de proximité.",
    live: "",
    github: "https://github.com/Abdel-Aziz80/trouve-ton-artisan",
  },
  {
    title: "Quote Builder",
    status: "Outil de conversion",
    image: "/assets/devora-hexagon.png",
    objective:
      "Aider un prospect à cadrer son besoin et envoyer une demande plus qualifiée.",
    stack: "Qualification, résumé, contact pré-rempli",
    features: [
      "Estimation dynamique",
      "Résumé automatique",
      "Pré-remplissage contact",
      "Options projet",
    ],
    benefit:
      "Réduit la friction avant le contact et donne un premier repère budgétaire au visiteur.",
    live: "/simulateur",
    github: "https://github.com/Abdel-Aziz80/quote-builder",
  },
  {
    title: "Probeats",
    status: "Maquette UI",
    image: "/assets/devora-hexagon.png",
    objective:
      "Structurer une identité visuelle et une hiérarchie de contenu pour une expérience web claire.",
    stack: "Cadrage visuel, hiérarchie, parcours utilisateur",
    features: [
      "Wireframes",
      "Hiérarchie visuelle",
      "Parcours utilisateur",
      "Design responsive",
    ],
    benefit:
      "Prouve le travail de cadrage avant développement, utile pour éviter un site confus.",
    live: "",
    github:
      "https://github.com/Abdel-Aziz80/Ayyad_Aziz_4_Maquetter_le_site_Probeats_avec_Figma",
  },
];

export const localPages = {
  normandie: {
    slug: "normandie",
    city: "Normandie",
    label: "en Normandie",
    title: "Création de site internet en Normandie",
    h1: "Création de sites internet pour artisans et TPE en Normandie",
    subtitle:
      "Une vitrine claire, crédible et pensée pour générer des demandes locales.",
    intro:
      "J'accompagne les professionnels normands qui veulent une présence en ligne sérieuse : artisans, indépendants, commerces de proximité et petites entreprises.",
    localAngle:
      "La Normandie regroupe des marchés très locaux : un prospect cherche souvent un professionnel proche, disponible et fiable. Votre site doit donc rassurer vite, montrer votre zone d'intervention et faciliter l'appel ou la demande de devis.",
    examples: [
      "Artisan du bâtiment qui veut recevoir plus de demandes qualifiées",
      "Indépendant qui doit clarifier ses prestations",
      "TPE locale qui veut moderniser son image",
    ],
  },
  rouen: {
    slug: "rouen",
    city: "Rouen",
    label: "à Rouen",
    title: "Création de site internet à Rouen",
    h1: "Création de site internet à Rouen pour artisans, indépendants et TPE",
    subtitle:
      "Un site local clair pour être trouvé, rassurer et déclencher plus de contacts.",
    intro:
      "À Rouen, beaucoup de recherches commencent sur Google avant un appel. Votre site doit expliquer votre activité, votre zone et vos preuves dès les premières secondes.",
    localAngle:
      "DEVORA structure votre site pour parler à des clients rouennais : services visibles, zone d'intervention, contact direct, pages utiles et base SEO locale propre.",
    examples: [
      "Artisan rouennais sans site ou avec une page vieillissante",
      "Prestataire local qui veut valoriser ses réalisations",
      "Indépendant qui veut être plus crédible avant un premier appel",
    ],
  },
  caen: {
    slug: "caen",
    city: "Caen",
    label: "à Caen",
    title: "Création de site internet à Caen",
    h1: "Création de site internet à Caen pour professionnels locaux",
    subtitle:
      "Une présence digitale claire pour transformer les recherches locales en demandes.",
    intro:
      "Pour un artisan, un commerce ou un indépendant à Caen, le site doit rassurer vite : qui vous êtes, ce que vous faites, où vous intervenez et comment vous contacter.",
    localAngle:
      "DEVORA construit des pages simples à comprendre, avec une structure SEO locale et des appels à l'action adaptés aux prospects qui comparent plusieurs prestataires.",
    examples: [
      "Commerce caennais qui veut présenter ses services",
      "Artisan qui veut clarifier ses prestations et délais",
      "TPE qui veut moderniser son image sans gros dispositif",
    ],
  },
  "le-havre": {
    slug: "le-havre",
    city: "Le Havre",
    label: "au Havre",
    title: "Création de site internet au Havre",
    h1: "Création de site internet au Havre pour artisans et TPE",
    subtitle:
      "Un site professionnel pour inspirer confiance et faciliter les demandes de devis.",
    intro:
      "Au Havre, votre site doit aider un prospect à comprendre rapidement votre sérieux, vos prestations et votre zone de déplacement.",
    localAngle:
      "DEVORA met l'accent sur une présentation claire, des preuves visibles, un contact simple et une base technique propre pour éviter l'effet site abandonné.",
    examples: [
      "Entreprise locale qui veut une vitrine plus crédible",
      "Prestataire qui veut mettre en avant ses services",
      "Artisan qui veut recevoir des demandes mieux cadrées",
    ],
  },
  evreux: {
    slug: "evreux",
    city: "Évreux",
    label: "à Évreux",
    title: "Création de site internet à Évreux",
    h1: "Création de site internet à Évreux pour professionnels de proximité",
    subtitle:
      "Un site lisible, responsive et orienté contact pour développer votre présence locale.",
    intro:
      "À Évreux, une vitrine web claire peut faire la différence quand un prospect compare plusieurs professionnels avant de demander un devis.",
    localAngle:
      "DEVORA travaille la clarté de l'offre, les informations pratiques, le formulaire et les textes SEO locaux pour donner envie de vous contacter.",
    examples: [
      "Indépendant qui veut structurer son offre",
      "Artisan local qui veut être plus visible",
      "Petite entreprise qui veut remplacer un site ancien",
    ],
  },
} as const;

export const localFaqs = [
  {
    question: "Est-ce utile de créer une page locale pour mon activité ?",
    answer:
      "Oui si vos clients cherchent un professionnel proche. Une page locale aide Google et les visiteurs à comprendre votre zone, vos services et votre légitimité.",
  },
  {
    question: "Est-ce que je dois déjà avoir des photos ou des textes ?",
    answer:
      "Non, mais c'est préférable. DEVORA peut vous aider à structurer les contenus essentiels pour lancer une première version propre.",
  },
  {
    question: "Est-ce possible de travailler à distance ?",
    answer:
      "Oui. Les échanges peuvent se faire par email, téléphone ou visio, avec un cadrage clair avant réalisation.",
  },
];
