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
    type: "Prototype SaaS IA",
    availability: "Prototype interne DEVORA, code source non publié",
    positioning: "Workflow automation, copilote IA et productivité",
    seoTitle: "FluxPilot AI - Prototype SaaS d'automatisation IA",
    seoDescription:
      "Cas d'étude DEVORA : prototype SaaS FluxPilot AI pour automatiser des workflows, prioriser les actions et visualiser les gains de productivité.",
    shortDescription:
      "Une interface de pilotage qui transforme des workflows dispersés en actions priorisées, avec assistant IA et lecture business claire.",
    context:
      "FluxPilot AI est un produit interne DEVORA orienté business, pensé pour montrer comment une PME peut centraliser ses routines, suivre les blocages et déléguer une partie de l'analyse à un copilote IA.",
    problem:
      "Les équipes perdent du temps entre les outils, les tâches récurrentes et les décisions à prendre sans vision synthétique. Le vrai sujet n'est pas seulement d'automatiser, mais de rendre les priorités lisibles.",
    solution:
      "Le prototype propose un cockpit SaaS avec tableau de bord, workflows, assistant IA simulé, scores de priorité et indicateurs de temps gagné.",
    businessValue:
      "Aider une entreprise à repérer les tâches répétitives, réduire la charge manuelle et mieux piloter ses automatisations avant d'investir dans un outil sur mesure.",
    expectedResults: [
      "Moins de temps passé à trier les tâches récurrentes",
      "Priorités plus visibles pour les équipes",
      "Meilleure lecture des workflows automatisables",
      "Base fonctionnelle pour cadrer un SaaS interne",
    ],
    features: [
      "Dashboard de productivité",
      "Assistant IA avec recommandations",
      "Suivi des workflows",
      "Scores de priorité",
      "Analyse du temps économisé",
      "Interface responsive SaaS",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UX SaaS", "Simulation IA"],
    services: [
      "Application web sur mesure",
      "Automatisation métier",
      "Dashboard IA",
      "Prototype SaaS",
    ],
    metrics: [
      { label: "Workflows suivis", value: "24" },
      { label: "Temps cible économisé", value: "18h" },
      { label: "Actions prioritaires", value: "7" },
    ],
    screenshots: [
      {
        src: "/assets/product-screenshots/fluxpilot-ai-dashboard.png",
        alt: "Dashboard FluxPilot AI avec priorités, workflows et indicateurs de productivité",
        caption: "Dashboard de pilotage des flux, priorités et gains de temps.",
      },
      {
        src: "/assets/product-screenshots/fluxpilot-ai-workflows.png",
        alt: "Vue workflows FluxPilot AI avec scénarios d'automatisation",
        caption: "Vue workflows pour suivre les scénarios et validations humaines.",
      },
    ],
    color: "violet",
  },
  {
    slug: "devora-command-center",
    title: "DEVORA Command Center",
    type: "Interface métier",
    availability: "Produit interne DEVORA, accès privé uniquement",
    positioning: "Dashboard business, CRM, analytics et pilotage",
    seoTitle: "DEVORA Command Center - Dashboard business CRM",
    seoDescription:
      "Cas d'étude DEVORA : interface métier de pilotage avec CRM, projets, factures, documents, tâches et analytics business.",
    shortDescription:
      "Un command center pour suivre les clients, projets, tâches, factures et indicateurs d'une activité de service.",
    context:
      "DEVORA Command Center est un back-office interne pour équipe de service, créateur ou petite entreprise, construit autour du pilotage quotidien.",
    problem:
      "Les informations commerciales et opérationnelles sont souvent éclatées entre tableurs, emails, dossiers et outils de facturation. Cela rend la relance et le suivi moins fiables.",
    solution:
      "L'interface regroupe CRM, pipeline projets, tâches, factures, documents et analytics dans une expérience sobre, exploitable et orientée décision.",
    businessValue:
      "Donner une vision claire de l'activité, des priorités et des revenus afin de gagner en rigueur commerciale sans imposer un outil trop lourd.",
    expectedResults: [
      "Suivi client plus structuré",
      "Relances et tâches mieux priorisées",
      "Lecture plus rapide du chiffre d'affaires",
      "Moins de pertes d'information entre les outils",
    ],
    features: [
      "CRM clients et statuts",
      "Pilotage projets",
      "Tâches et priorités",
      "Factures et revenus",
      "Documents centralisés",
      "Analytics opérationnels",
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "Auth", "Design system"],
    services: [
      "Dashboard business",
      "CRM sur mesure",
      "Application métier",
      "Refonte d'outil interne",
    ],
    metrics: [
      { label: "Modules métier", value: "6" },
      { label: "KPIs pilotés", value: "12" },
      { label: "Vues de gestion", value: "10+" },
    ],
    color: "blue",
  },
  {
    slug: "atlas-commerce-os",
    title: "DEVORA Atlas Commerce OS",
    type: "Cockpit e-commerce",
    availability: "Prototype interne DEVORA, code source non publié",
    positioning: "Analytics e-commerce, gestion business et optimisation",
    seoTitle: "DEVORA Atlas Commerce OS - Cockpit e-commerce analytics",
    seoDescription:
      "Cas d'étude DEVORA : cockpit e-commerce avec analytics, commandes, produits, clients, alertes business et suivi de performance.",
    shortDescription:
      "Un cockpit e-commerce pour visualiser ventes, marges, commandes, produits et signaux d'optimisation business.",
    context:
      "DEVORA Atlas Commerce OS est un produit interne conçu pour illustrer un outil de pilotage e-commerce lisible, pensé pour une marque ou une boutique en croissance.",
    problem:
      "Un commerçant peut avoir des données dans Shopify, Stripe, Analytics et des tableurs, sans vue simple sur les marges, les produits à surveiller ou les canaux à optimiser.",
    solution:
      "Le prototype rassemble les indicateurs clés dans une interface dashboard : revenus, conversion, commandes, clients, produits, alertes et tendances par canal.",
    businessValue:
      "Aider un e-commerçant à prendre de meilleures décisions : détecter les produits performants, surveiller les ruptures, comprendre les canaux et prioriser les optimisations.",
    expectedResults: [
      "Vision plus rapide des performances e-commerce",
      "Alertes business exploitables",
      "Priorisation des produits et canaux",
      "Meilleur cadrage d'un outil analytics sur mesure",
    ],
    features: [
      "Dashboard revenus et conversion",
      "Tableaux commandes et clients",
      "Suivi produits",
      "Alertes business",
      "Graphiques par canal",
      "Filtres et recherche",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Data UI", "Analytics"],
    services: [
      "Dashboard e-commerce",
      "Automatisation reporting",
      "Application web sur mesure",
      "Optimisation business",
    ],
    metrics: [
      { label: "Canaux analysés", value: "5" },
      { label: "Commandes simulées", value: "320" },
      { label: "Alertes business", value: "9" },
    ],
    screenshots: [
      {
        src: "/assets/product-screenshots/atlas-commerce-os-dashboard.png",
        alt: "Dashboard DEVORA Atlas Commerce OS avec revenus, commandes et indicateurs e-commerce",
        caption: "Dashboard commerce pour lire rapidement ventes, commandes et signaux d'optimisation.",
      },
      {
        src: "/assets/product-screenshots/atlas-commerce-os-analytics.png",
        alt: "Vue analytics DEVORA Atlas Commerce OS avec graphiques de performance",
        caption: "Vue analytics pour comparer canaux, revenus et tendances catalogue.",
      },
    ],
    color: "cyan",
  },
  {
    slug: "devora-sentinel",
    title: "DEVORA Sentinel",
    type: "Mini-SOC local défensif",
    availability: "Produit DEVORA le plus proche d'une phase de vente",
    positioning: "Monitoring business, alertes intelligentes et priorisation",
    seoTitle: "DEVORA Sentinel - Mini-SOC local défensif",
    seoDescription:
      "DEVORA Sentinel : mini-SOC local défensif compatible PC x64 2020+, avec monitoring, incidents, licence, veille et actions validées.",
    shortDescription:
      "Un cockpit local-first de surveillance défensive, pensé pour les PC x64 2020+, afin de rendre alertes, preuves, incidents et actions de durcissement plus lisibles.",
    context:
      "DEVORA Sentinel V17.5 est le produit interne le plus avancé commercialement : mini-SOC local défensif, privacy-first, avec licence, incidents, preuves locales et assistance sécurité.",
    problem:
      "Les signaux de risque local arrivent souvent dispersés : ports ouverts, dépendances, secrets visibles, changements workspace, incidents et actions non tracées. Le risque est de perdre la preuve et la priorité.",
    solution:
      "Le cockpit organise les alertes par criticité, affiche des preuves locales, construit une timeline incident et propose des actions défensives qui restent soumises à validation humaine.",
    businessValue:
      "Aider un indépendant, développeur, homelab, TPE ou studio à surveiller son environnement local sur une machine moderne, sans envoyer ses données sensibles vers une plateforme externe.",
    expectedResults: [
      "Alertes et preuves locales plus visibles",
      "Meilleure hygiène workspace et réseau local",
      "Actions sensibles validées et journalisées",
      "Base prête pour une offre commerciale contrôlée",
    ],
    features: [
      "Dashboard sécurité local",
      "Score de criticité",
      "Timeline incidents",
      "Truth Monitor",
      "Dual Watch défensif",
      "Licence locale visible",
      "Compatibilité cible PC x64 2020+",
      "Mode léger pour machines modestes",
      "Option thème personnalisé sur couleurs précises",
    ],
    stack: ["React", "Vite", "TypeScript", "Node.js", "Express", "Local-first", "PC x64 2020+"],
    services: [
      "Sécurité défensive locale",
      "Mini-SOC privé",
      "Monitoring workspace",
      "Assistance durcissement",
    ],
    metrics: [
      { label: "Compatibilité", value: "PC x64 2020+" },
      { label: "Early Access", value: "50 places" },
      { label: "Durée incluse", value: "1 mois" },
    ],
    launchOffer: {
      title: "Early Access DEVORA Sentinel",
      text: "Accès privé limité à 50 personnes, avec 1 mois d'utilisation inclus. Les demandes passent par le formulaire DEVORA, sont relayées vers AlexCore quand il est actif, puis chaque accès est validé et activé manuellement.",
      cta: "Rejoindre l'Early Access",
      href: "/portfolio/devora-sentinel#early-access",
    },
    pricing: [
      {
        name: "Sentinel Early Access",
        price: "1 mois inclus",
        description: "Accès privé limité à 50 personnes, activé manuellement après demande par email. Cible recommandée : PC x64 2020+.",
        included: ["Cockpit local", "Detection Engine", "Timeline incidents", "Dual Watch manuel", "Profil compatibilité PC x64 2020+"],
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
        included: ["Dashboard", "Incidents", "Exports JSON/Markdown", "2 projets max"],
      },
      {
        name: "Sentinel Developer",
        price: "Tarif de lancement à valider",
        description: "Hygiène workspace, réseau local et surveillance dev.",
        included: ["Tout Solo", "Sentinel Watch", "Threat Intel défensive", "5 projets max"],
      },
      {
        name: "Sentinel Business",
        price: "Tarif de lancement à valider",
        description: "Mini-SOC local pour TPE, agence ou équipe opérationnelle.",
        included: ["Tout Developer", "Response Gate complet", "Escalade", "15 projets max"],
      },
      {
        name: "Sentinel Enterprise",
        price: "Sur devis",
        description: "On-prem, politiques dédiées et accompagnement installation.",
        included: ["Tout Business", "Politiques on-prem", "Support prioritaire", "Projets étendus"],
      },
    ],
    color: "blue",
  },
  {
    slug: "devora-commerce-os",
    title: "DEVORA Commerce OS",
    type: "Back-office commerce",
    availability: "Produit interne DEVORA, capture publique volontairement limitée",
    positioning: "Gestion commerce, CRM léger, stock et opérations",
    seoTitle: "DEVORA Commerce OS - Back-office commerce moderne",
    seoDescription:
      "Cas d'étude DEVORA : back-office commerce pour gérer produits, commandes, clients, stock et indicateurs opérationnels.",
    shortDescription:
      "Une interface de gestion commerce pour centraliser produits, commandes, clients et stock dans une expérience claire.",
    context:
      "DEVORA Commerce OS illustre une base d'outil métier pour commerces, TPE et marques qui veulent dépasser le simple tableur.",
    problem:
      "La gestion quotidienne devient vite dispersée quand les commandes, stocks, fournisseurs et clients sont suivis dans plusieurs outils sans vision commune.",
    solution:
      "Le cockpit rassemble les vues essentielles : catalogue, commandes, clients, stock, fournisseurs et indicateurs de pilotage.",
    businessValue:
      "Donner une base opérationnelle lisible à une activité commerce afin de réduire les frictions et mieux suivre les priorités.",
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
      "Statistiques commerciales",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CRM", "Stock"],
    services: [
      "Back-office métier",
      "Dashboard commerce",
      "CRM léger",
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
    type: "Agent IA business",
    availability: "Prototype interne DEVORA",
    positioning: "Qualification, suivi commercial et assistant métier",
    seoTitle: "DEVORA Agent Business - Assistant IA pour suivi commercial",
    seoDescription:
      "Cas d'étude DEVORA : agent IA business pour qualifier les demandes, préparer les réponses et structurer le suivi commercial.",
    shortDescription:
      "Un assistant métier qui aide à qualifier les demandes, préparer les prochaines actions et fluidifier la relation client.",
    context:
      "DEVORA Agent Business montre comment un agent IA peut assister une activité de service sans remplacer le jugement humain.",
    problem:
      "Beaucoup de demandes entrantes sont incomplètes, difficiles à prioriser ou mal suivies. Cela ralentit les réponses et fragilise la conversion.",
    solution:
      "L'agent structure les informations, propose une qualification, prépare une réponse et met en évidence la prochaine action utile.",
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
    stack: ["Next.js", "React", "TypeScript", "IA", "CRM", "Automation"],
    services: [
      "Agent IA métier",
      "Automatisation commerciale",
      "Assistant interne",
      "Dashboard de suivi",
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
