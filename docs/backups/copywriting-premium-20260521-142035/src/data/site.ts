export const siteUrl = "https://devora-freelance.fr";

export const navigation = [
  { label: "Expertises", href: "#expertises" },
  { label: "Produits", href: "#portfolio" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Plateformes & vitrines premium",
    description:
      "Des interfaces rapides, crédibles et orientées conversion pour lancer une offre, structurer une marque ou préparer une campagne d'acquisition.",
    points: ["SEO technique", "UX mobile", "CTA qualifiés"],
  },
  {
    title: "Dashboards & cockpits métier",
    description:
      "Des espaces de pilotage pour suivre ventes, clients, stocks, projets, incidents, tâches et indicateurs utiles au quotidien.",
    points: ["KPI lisibles", "Rôles métiers", "Données actionnables"],
  },
  {
    title: "Automatisation, copilotes & IA",
    description:
      "Des agents, workflows et assistants métier pour réduire les tâches répétitives, préqualifier les demandes et fiabiliser les opérations.",
    points: ["Copilotes IA", "Workflows", "IA locale"],
  },
  {
    title: "SaaS, sécurité & produits internes",
    description:
      "Des produits web évolutifs et des outils défensifs contrôlés, dont DEVORA Sentinel en Early Access.",
    points: ["Next.js", "API", "DEVORA Sentinel"],
  },
];

export const projects = [
  {
    title: "DEVORA Sentinel",
    slogan: "Surveillance IA pour signaux business sensibles",
    role: "Prototype produit IA",
    utility:
      "Centralise alertes, anomalies et signaux faibles afin d'aider une équipe à prioriser les actions importantes.",
    description:
      "Un cockpit de monitoring pensé pour détecter les événements critiques, synthétiser l'information et accélérer la prise de décision.",
    stack: ["Next.js", "TypeScript", "IA", "Alerting", "Dashboard"],
    badges: ["IA locale", "Monitoring", "Priorisation"],
    variant: "sentinel",
  },
  {
    title: "DEVORA Commerce OS",
    slogan: "Pilotage opérationnel pour commerce moderne",
    role: "Back-office métier",
    utility:
      "Regroupe produits, commandes, clients et stock dans une interface claire pour gagner du temps en gestion quotidienne.",
    description:
      "Une base de système commerce orientée TPE/PME, conçue pour rendre les opérations lisibles et exploitables rapidement.",
    stack: ["Next.js", "React", "Tailwind", "CRM", "Stock"],
    badges: ["Commerce", "CRM", "Gestion"],
    variant: "commerce",
  },
  {
    title: "FluxPilot AI",
    slogan: "Automatisation intelligente des flux métier",
    role: "Assistant d'orchestration",
    utility:
      "Transforme des tâches répétitives en scénarios contrôlables, avec suivi des étapes et validation humaine.",
    description:
      "Une interface de pilotage de workflows IA pour connecter demandes, décisions, documents et actions automatisées.",
    stack: ["IA", "Workflows", "API", "TypeScript", "Automation"],
    badges: ["Flux", "Agents", "Productivité"],
    variant: "flux",
  },
  {
    title: "DEVORA Command Center",
    slogan: "Centre de contrôle pour activité indépendante",
    role: "Dashboard SaaS",
    utility:
      "Aide à suivre clients, projets, tâches, documents et facturation depuis un espace de travail unique.",
    description:
      "Un tableau de bord de pilotage complet pour entrepreneurs, équipes de service et petites structures qui veulent garder le cap.",
    stack: ["Next.js", "SaaS", "Auth", "Analytics", "UX"],
    badges: ["Pilotage", "Clients", "Facturation"],
    variant: "command",
  },
  {
    title: "Atlas Commerce OS",
    slogan: "Vue stratégique pour activité e-commerce",
    role: "Analytics commerce",
    utility:
      "Met en évidence ventes, panier moyen, clients actifs et performance catalogue pour décider plus vite.",
    description:
      "Une expérience de reporting e-commerce pensée pour comparer, comprendre et agir sans se perdre dans les chiffres.",
    stack: ["Analytics", "E-commerce", "KPI", "React", "Data UI"],
    badges: ["E-commerce", "KPI", "Reporting"],
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
    stack: ["IA", "Assistant", "CRM", "Next.js", "Productivité"],
    badges: ["Qualification", "Support", "Suivi"],
    variant: "agent",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Clarifier l'objectif",
    text: "On transforme le besoin business en parcours, pages, modules et indicateurs utiles.",
  },
  {
    step: "02",
    title: "Designer le système",
    text: "Architecture, UX, SEO, contenu et identité visuelle sont pensés ensemble pour éviter l'effet patchwork.",
  },
  {
    step: "03",
    title: "Construire vite et propre",
    text: "Développement Next.js, composants maintenables, responsive, performance et animations maîtrisées.",
  },
  {
    step: "04",
    title: "Livrer et améliorer",
    text: "Build vérifié, base déployable, puis optimisation progressive selon les retours et les métriques.",
  },
];
