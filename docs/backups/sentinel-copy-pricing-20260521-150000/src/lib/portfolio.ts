export type PortfolioProject = {
  slug: string;
  title: string;
  type: string;
  availability: string;
  positioning: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  context: string;
  problem: string;
  solution: string;
  businessValue: string;
  expectedResults: string[];
  features: string[];
  stack: string[];
  services: string[];
  metrics: { label: string; value: string }[];
  screenshots?: { src: string; alt: string; caption: string }[];
  pricing?: { name: string; price: string; description: string; included: string[] }[];
  launchOffer?: {
    title: string;
    text: string;
    cta: string;
    href: string;
  };
  color: "blue" | "violet" | "cyan";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fluxpilot-ai",
    title: "FluxPilot AI",
    type: "Outil d'automatisation",
    availability: "Prototype interne DEVORA, code source non publié",
    positioning: "Réduire les tâches répétitives et rendre les priorités plus visibles",
    seoTitle: "FluxPilot AI - Outil d'automatisation métier et gain de temps",
    seoDescription:
      "Cas d'étude DEVORA : FluxPilot AI aide à centraliser des tâches répétitives, préparer des actions et visualiser les gains de temps possibles.",
    shortDescription:
      "Un outil qui rassemble des tâches dispersées, propose des priorités et aide une équipe à avancer sans tout gérer manuellement.",
    context:
      "FluxPilot AI est un produit interne DEVORA pensé pour les activités qui perdent du temps entre emails, outils, relances et tâches répétitives.",
    problem:
      "Les équipes perdent du temps quand les demandes, validations et tâches à refaire sont réparties dans trop d'endroits. Les priorités deviennent floues et les relances arrivent trop tard.",
    solution:
      "L'interface regroupe les actions à suivre, signale les priorités et prépare certaines recommandations, tout en gardant une validation humaine.",
    businessValue:
      "Aider une entreprise à repérer ce qui peut être simplifié, réduire la charge manuelle et décider plus vite quoi automatiser en premier.",
    expectedResults: [
      "Moins de temps passé à trier les tâches récurrentes",
      "Priorités plus visibles pour les équipes",
      "Meilleure lecture des tâches à simplifier",
      "Base concrète pour cadrer un outil interne",
    ],
    features: [
      "Vue claire des tâches récurrentes",
      "Recommandations préparées",
      "Suivi des actions en cours",
      "Priorités visibles",
      "Estimation du temps économisé",
      "Interface lisible sur ordinateur et mobile",
    ],
    stack: ["Taches recurrentes", "Priorites", "Validation humaine", "Gain de temps"],
    services: [
      "Outil métier sur mesure",
      "Automatisation utile",
      "Aide à la décision",
      "Gain de temps",
    ],
    metrics: [
      { label: "Parcours suivis", value: "24" },
      { label: "Temps cible économisé", value: "18h" },
      { label: "Actions prioritaires", value: "7" },
    ],
    screenshots: [
      {
        src: "/assets/product-screenshots/fluxpilot-ai-dashboard.png",
        alt: "Vue FluxPilot AI avec priorités, tâches et indicateurs de productivité",
        caption: "Vue de suivi pour lire rapidement priorités et gains de temps.",
      },
      {
        src: "/assets/product-screenshots/fluxpilot-ai-workflows.png",
        alt: "Vue FluxPilot AI avec scénarios d'automatisation et validations",
        caption: "Vue d'automatisation pour suivre les scénarios et validations humaines.",
      },
    ],
    color: "violet",
  },
  {
    slug: "devora-command-center",
    title: "DEVORA Command Center",
    type: "Espace de pilotage",
    availability: "Produit interne DEVORA, accès privé uniquement",
    positioning: "Suivre les clients, les projets et les priorités au même endroit",
    seoTitle: "DEVORA Command Center - Espace de pilotage clients et projets",
    seoDescription:
      "Cas d'étude DEVORA : espace de pilotage pour suivre les clients, projets, tâches, documents, revenus et priorités d'une activité.",
    shortDescription:
      "Un espace unique pour suivre les clients, les projets, les tâches et les revenus d'une activité de service.",
    context:
      "DEVORA Command Center est un outil interne pour créateur, équipe de service ou petite entreprise qui veut mieux suivre son activité au quotidien.",
    problem:
      "Les informations utiles sont souvent dispersées entre tableurs, emails, dossiers et outils de facturation. Résultat : relances oubliées, priorités floues et perte de temps.",
    solution:
      "L'interface regroupe les clients, les projets, les tâches, les documents et les revenus dans une expérience sobre, lisible et orientée action.",
    businessValue:
      "Donner une vision claire de l'activité pour mieux relancer, mieux prioriser et gagner en rigueur sans ajouter un outil trop lourd.",
    expectedResults: [
      "Suivi client plus structuré",
      "Relances et tâches mieux priorisées",
      "Lecture plus rapide des revenus",
      "Moins de pertes d'information entre les outils",
    ],
    features: [
      "Suivi clients et statuts",
      "Pilotage des projets",
      "Tâches et priorités",
      "Factures et revenus",
      "Documents centralisés",
      "Indicateurs opérationnels",
    ],
    stack: ["Clients", "Projets", "Documents", "Revenus", "Priorites"],
    services: [
      "Tableau de pilotage",
      "Suivi client",
      "Outil métier",
      "Organisation interne",
    ],
    metrics: [
      { label: "Modules métier", value: "6" },
      { label: "Indicateurs suivis", value: "12" },
      { label: "Vues de gestion", value: "10+" },
    ],
    color: "blue",
  },
  {
    slug: "atlas-commerce-os",
    title: "DEVORA Atlas Commerce OS",
    type: "Pilotage e-commerce",
    availability: "Prototype interne DEVORA, code source non publié",
    positioning: "Comprendre les ventes, les produits et les priorités d'une boutique",
    seoTitle: "DEVORA Atlas Commerce OS - Pilotage e-commerce et ventes",
    seoDescription:
      "Cas d'étude DEVORA : outil de pilotage e-commerce pour suivre les ventes, commandes, clients, produits et alertes importantes.",
    shortDescription:
      "Un outil pour visualiser les ventes, les commandes, les produits à surveiller et les actions commerciales à prioriser.",
    context:
      "DEVORA Atlas Commerce OS montre comment une boutique peut mieux comprendre ses ventes sans se perdre entre plusieurs tableaux et outils.",
    problem:
      "Un commerçant peut avoir ses ventes, paiements, statistiques et stocks dans plusieurs outils. Sans vue simple, il devient difficile de savoir quoi améliorer en premier.",
    solution:
      "L'interface rassemble les ventes, commandes, clients, produits et alertes dans une lecture claire, pensée pour décider plus vite.",
    businessValue:
      "Aider un e-commerçant à repérer les produits qui fonctionnent, surveiller les points faibles et prioriser les actions qui peuvent améliorer la rentabilité.",
    expectedResults: [
      "Vision plus rapide des ventes",
      "Alertes utiles pour agir",
      "Priorisation des produits et canaux",
      "Meilleur cadrage d'un outil commerce sur mesure",
    ],
    features: [
      "Vue revenus et demandes",
      "Suivi commandes et clients",
      "Suivi produits",
      "Alertes business",
      "Lecture par canal de vente",
      "Filtres et recherche",
    ],
    stack: ["Ventes", "Commandes", "Produits", "Alertes", "Canaux"],
    services: [
      "Pilotage e-commerce",
      "Suivi de performance",
      "Outil sur mesure",
      "Optimisation commerciale",
    ],
    metrics: [
      { label: "Canaux analysés", value: "5" },
      { label: "Commandes simulées", value: "320" },
      { label: "Alertes business", value: "9" },
    ],
    screenshots: [
      {
        src: "/assets/product-screenshots/atlas-commerce-os-dashboard.png",
        alt: "Vue DEVORA Atlas Commerce OS avec revenus, commandes et indicateurs e-commerce",
        caption: "Vue commerce pour lire rapidement les ventes, commandes et signaux d'optimisation.",
      },
      {
        src: "/assets/product-screenshots/atlas-commerce-os-analytics.png",
        alt: "Vue DEVORA Atlas Commerce OS avec graphiques de performance commerce",
        caption: "Vue d'analyse pour comparer canaux, revenus et tendances catalogue.",
      },
    ],
    color: "cyan",
  },
  {
    slug: "devora-sentinel",
    title: "DEVORA Sentinel",
    type: "Surveillance locale défensive",
    availability: "Produit DEVORA le plus proche d'une phase de vente",
    positioning: "Rendre les alertes locales plus visibles, plus compréhensibles et mieux priorisées",
    seoTitle: "DEVORA Sentinel - Surveillance locale et alertes défensives",
    seoDescription:
      "DEVORA Sentinel : outil local de surveillance défensive pour rendre les alertes, incidents et actions de protection plus lisibles.",
    shortDescription:
      "Un outil local pour suivre des alertes, conserver des preuves utiles et prioriser des actions de protection sur une machine moderne.",
    context:
      "DEVORA Sentinel est le produit interne le plus avancé commercialement : un outil local, orienté confidentialité, conçu pour rendre la surveillance défensive plus compréhensible.",
    problem:
      "Les signaux de risque peuvent être dispersés : changements inhabituels, alertes, fichiers sensibles, incidents ou actions non suivies. Sans vue claire, il devient difficile de savoir quoi traiter en premier.",
    solution:
      "Sentinel classe les alertes, aide à conserver les éléments utiles, affiche l'historique d'un incident et propose des actions défensives qui restent validées par l'utilisateur.",
    businessValue:
      "Aider un indépendant, développeur, studio, homelab ou TPE à mieux surveiller son environnement local sans transformer ses données sensibles en démonstration publique.",
    expectedResults: [
      "Alertes et preuves locales plus lisibles",
      "Meilleure hygiène de l'environnement de travail",
      "Actions sensibles validées et suivies",
      "Base prête pour une offre commerciale contrôlée",
    ],
    features: [
      "Vue de sécurité locale",
      "Niveau de priorité",
      "Historique des incidents",
      "Vérification des signaux",
      "Surveillance défensive",
      "Licence locale visible",
      "Compatibilité cible PC x64 2020+",
      "Mode léger pour machines modestes",
      "Option thème personnalisé sur couleurs précises",
    ],
    stack: ["Alertes locales", "Priorites", "Historique", "Validation humaine", "PC x64 2020+"],
    services: [
      "Sécurité locale",
      "Surveillance privée",
      "Suivi des alertes",
      "Aide au durcissement",
    ],
    metrics: [
      { label: "Compatibilité", value: "PC x64 2020+" },
      { label: "Early Access", value: "50 places" },
      { label: "Durée incluse", value: "1 mois" },
    ],
    launchOffer: {
      title: "Early Access DEVORA Sentinel",
      text: "Accès privé limité à 50 personnes, avec 1 mois d'utilisation inclus. Chaque demande est relue avant activation afin de garder un lancement maîtrisé.",
      cta: "Rejoindre l'Early Access",
      href: "/portfolio/devora-sentinel#early-access",
    },
    pricing: [
      {
        name: "Sentinel Early Access",
        price: "1 mois inclus",
        description: "Accès privé limité à 50 personnes, activé manuellement après demande par email. Cible recommandée : PC x64 2020+.",
        included: ["Vue locale", "Alertes lisibles", "Historique incidents", "Validation humaine", "Profil compatibilité PC x64 2020+"],
      },
      {
        name: "Option thème personnalisé",
        price: "+29€ HT lancement",
        description: "Stylisation légère de DEVORA Sentinel avec les couleurs précises fournies par le client.",
        included: ["Couleurs HEX/RGB requises", "Ajustement interface", "Contraste vérifié", "Pas de refonte complète"],
      },
      {
        name: "Sentinel Solo",
        price: "Tarif de lancement à valider",
        description: "Poste local unique pour créateur, développeur, studio ou homelab sur machine PC x64 2020+.",
        included: ["Vue de suivi", "Incidents", "Exports simples", "2 projets max"],
      },
      {
        name: "Sentinel Developer",
        price: "Tarif de lancement à valider",
        description: "Suivi renforcé pour environnement de travail, réseau local et usages développeur.",
        included: ["Tout Solo", "Surveillance renforcée", "Veille défensive", "5 projets max"],
      },
      {
        name: "Sentinel Business",
        price: "Tarif de lancement à valider",
        description: "Surveillance locale pour TPE, agence ou équipe opérationnelle.",
        included: ["Tout Developer", "Validation avancée", "Escalade", "15 projets max"],
      },
      {
        name: "Sentinel Enterprise",
        price: "Sur devis",
        description: "Installation accompagnée, règles dédiées et support prioritaire.",
        included: ["Tout Business", "Règles dédiées", "Support prioritaire", "Projets étendus"],
      },
    ],
    color: "blue",
  },
  {
    slug: "devora-commerce-os",
    title: "DEVORA Commerce OS",
    type: "Gestion commerce",
    availability: "Produit interne DEVORA, capture publique volontairement limitée",
    positioning: "Centraliser produits, commandes, clients et stock dans une interface simple",
    seoTitle: "DEVORA Commerce OS - Gestion commerce, commandes et stock",
    seoDescription:
      "Cas d'étude DEVORA : outil commerce pour gérer produits, commandes, clients, stock et priorités opérationnelles.",
    shortDescription:
      "Une interface pour centraliser les produits, commandes, clients et stocks sans multiplier les tableurs.",
    context:
      "DEVORA Commerce OS illustre un outil métier pour commerces, TPE et marques qui veulent une gestion plus claire que le simple tableur.",
    problem:
      "La gestion quotidienne devient vite dispersée quand les commandes, stocks, fournisseurs et clients sont suivis dans plusieurs endroits.",
    solution:
      "L'interface rassemble les vues essentielles : catalogue, commandes, clients, stock, fournisseurs et indicateurs simples.",
    businessValue:
      "Donner une base claire à une activité commerce pour réduire les oublis, mieux suivre le stock et gagner du temps en gestion.",
    expectedResults: [
      "Gestion quotidienne plus claire",
      "Meilleure visibilité sur le stock",
      "Suivi client plus structuré",
      "Base évolutive pour un outil interne",
    ],
    features: [
      "Catalogue produits",
      "Suivi commandes",
      "Fiches clients",
      "Alertes stock",
      "Vue fournisseurs",
      "Indicateurs commerciaux",
    ],
    stack: ["Produits", "Commandes", "Clients", "Stock", "Fournisseurs"],
    services: [
      "Gestion commerce",
      "Tableau de suivi",
      "Suivi client léger",
      "Application interne",
    ],
    metrics: [
      { label: "Modules commerce", value: "6" },
      { label: "Alertes stock", value: "14" },
      { label: "Vues métier", value: "9" },
    ],
    color: "cyan",
  },
  {
    slug: "devora-agent-business",
    title: "DEVORA Agent Business",
    type: "Assistant business",
    availability: "Prototype interne DEVORA",
    positioning: "Mieux qualifier les demandes et préparer les prochaines actions",
    seoTitle: "DEVORA Agent Business - Assistant pour demandes et suivi commercial",
    seoDescription:
      "Cas d'étude DEVORA : assistant business pour qualifier les demandes, préparer les réponses et structurer le suivi commercial.",
    shortDescription:
      "Un assistant qui aide à comprendre une demande, préparer la réponse et ne pas oublier la prochaine action.",
    context:
      "DEVORA Agent Business montre comment une aide intelligente peut assister une activité de service sans remplacer le jugement humain.",
    problem:
      "Beaucoup de demandes entrantes sont incomplètes, difficiles à prioriser ou mal suivies. Cela ralentit les réponses et fragilise la conversion.",
    solution:
      "L'assistant structure les informations, propose une qualification, prépare une réponse et met en évidence la prochaine action utile.",
    businessValue:
      "Améliorer la vitesse de réponse, la qualité du suivi et la cohérence commerciale pour transformer plus de demandes en vrais échanges.",
    expectedResults: [
      "Demandes mieux qualifiées",
      "Réponses préparées plus vite",
      "Suivi commercial plus régulier",
      "Moins d'oublis dans les relances",
    ],
    features: [
      "Qualification de brief",
      "Synthèse automatique",
      "Prochaines actions",
      "Historique client",
      "Aide à la réponse",
      "Suivi des relances",
    ],
    stack: ["Briefs", "Demandes", "Reponses", "Relances", "Suivi client"],
    services: [
      "Assistant métier",
      "Automatisation commerciale",
      "Assistant interne",
      "Tableau de suivi",
    ],
    metrics: [
      { label: "Briefs qualifiés", value: "54" },
      { label: "Réponses prêtes", value: "24h" },
      { label: "Relances suivies", value: "31" },
    ],
    color: "violet",
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
