export const siteUrl = "https://devora-freelance.fr";

export const navigation = [
  { label: "Solutions", href: "#expertises" },
  { label: "Projets", href: "#portfolio" },
  { label: "Approche", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Sites et pages qui convertissent",
    description:
      "Des pages claires pour expliquer votre offre, rassurer rapidement et transformer plus de visiteurs en demandes qualifiées.",
    points: ["Message clair", "Mobile soigné", "Contact visible"],
  },
  {
    title: "Tableaux de pilotage métier",
    description:
      "Un espace unique pour suivre vos demandes, vos clients, vos ventes, vos stocks, vos tâches et vos priorités sans vous éparpiller.",
    points: ["Vue globale", "Priorités visibles", "Décisions plus rapides"],
  },
  {
    title: "Automatisation et IA utile",
    description:
      "Des assistants et automatisations pour réduire les tâches répétitives, préparer des réponses et gagner du temps sans perdre le contrôle.",
    points: ["Moins de saisie", "Réponses préparées", "Validation humaine"],
  },
  {
    title: "Outils privés et sécurité locale",
    description:
      "Des outils internes protégés, dont DEVORA Sentinel, pour surveiller des signaux sensibles et garder les démonstrations avancées en privé.",
    points: ["Données protégées", "Accès contrôlé", "DEVORA Sentinel"],
  },
];

export const projects = [
  {
    title: "DEVORA Sentinel",
    slogan: "Surveillance IA pour signaux business sensibles",
    role: "Produit interne privé",
    utility:
      "Centralise alertes, anomalies et signaux faibles afin d'aider une équipe à prioriser les actions importantes.",
    description:
      "Un outil de surveillance pensé pour rendre les alertes importantes plus visibles et aider à décider quoi traiter en priorité.",
    stack: ["Surveillance locale", "Alertes", "Priorisation", "Sécurité"],
    badges: ["IA locale", "Alertes", "Priorisation"],
    variant: "sentinel",
  },
  {
    title: "DEVORA Commerce OS",
    slogan: "Pilotage opérationnel pour commerce moderne",
    role: "Espace de gestion métier",
    utility:
      "Regroupe produits, commandes, clients et stock dans une interface claire pour gagner du temps en gestion quotidienne.",
    description:
      "Une base de système commerce orientée TPE/PME, conçue pour rendre les opérations lisibles et exploitables rapidement.",
    stack: ["Gestion commerce", "Clients", "Stock", "Commandes"],
    badges: ["Commerce", "Clients", "Gestion"],
    variant: "commerce",
  },
  {
    title: "FluxPilot AI",
    slogan: "Automatisation intelligente des flux métier",
    role: "Assistant d'organisation",
    utility:
      "Transforme des tâches répétitives en scénarios contrôlables, avec suivi des étapes et validation humaine.",
    description:
      "Une interface pour organiser les demandes, préparer des actions et automatiser certaines tâches répétitives.",
    stack: ["IA utile", "Automatisation", "Demandes", "Suivi"],
    badges: ["Tâches", "Assistant", "Productivité"],
    variant: "flux",
  },
  {
    title: "DEVORA Command Center",
    slogan: "Centre de contrôle pour activité indépendante",
    role: "Espace de pilotage",
    utility:
      "Aide à suivre clients, projets, tâches, documents et facturation depuis un espace de travail unique.",
    description:
      "Un tableau de bord de pilotage complet pour entrepreneurs, équipes de service et petites structures qui veulent garder le cap.",
    stack: ["Clients", "Projets", "Revenus", "Priorités"],
    badges: ["Pilotage", "Clients", "Facturation"],
    variant: "command",
  },
  {
    title: "Atlas Commerce OS",
    slogan: "Vue stratégique pour activité e-commerce",
    role: "Lecture commerce",
    utility:
      "Met en évidence ventes, panier moyen, clients actifs et performance catalogue pour décider plus vite.",
    description:
      "Une expérience de reporting e-commerce pensée pour comparer, comprendre et agir sans se perdre dans les chiffres.",
    stack: ["Ventes", "E-commerce", "Produits", "Reporting"],
    badges: ["E-commerce", "Ventes", "Reporting"],
    variant: "atlas",
  },
  {
    title: "DEVORA Agent Business",
    slogan: "Assistant métier pour qualification et suivi",
    role: "Agent IA business",
    utility:
      "Structure les demandes, prépare les réponses et accompagne le suivi commercial avec une logique claire.",
    description:
      "Un agent orienté business pour aider à qualifier les besoins, préparer les prochaines actions et fluidifier le contact client.",
    stack: ["IA utile", "Assistant", "Suivi client", "Productivité"],
    badges: ["Qualification", "Support", "Suivi"],
    variant: "agent",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Comprendre le vrai besoin",
    text: "On clarifie votre activité, vos clients, les blocages actuels et ce que l'outil doit améliorer concrètement.",
  },
  {
    step: "02",
    title: "Structurer une solution lisible",
    text: "Les pages, les écrans, les textes et les parcours sont organisés pour être compris vite, même par un client non technique.",
  },
  {
    step: "03",
    title: "Construire une première version utile",
    text: "DEVORA livre une base propre, rapide, responsive et exploitable, avec les bons appels à l'action et les bons repères métier.",
  },
  {
    step: "04",
    title: "Mesurer puis améliorer",
    text: "Après la mise en ligne, les retours et les données servent à prioriser les améliorations qui ont le plus d'impact.",
  },
];
