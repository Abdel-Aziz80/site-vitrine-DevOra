# Changelog

## 2026-05-21

### Passe premium contenu, SEO et cartes privees

- Branding public harmonise en `DEVORA` dans la documentation et les contenus visibles.
- Textes des pages principales reecrits pour parler benefices client : clarte, gain de temps, suivi des priorites, conversion et securite locale.
- Jargon technique public reduit : les formulations privilegient les usages metier plutot que la technologie.
- Simulateur transforme en qualification de besoin DEVORA : site, outil metier, automatisation, e-commerce, Sentinel, IA locale et visibilite.
- Descriptions projets reformulees autour des problemes resolus, gains attendus et demonstrations privees.
- Cartes sans capture publique equipees d'un apercu anime protege via `PrivateProjectVeil`, avec contenu fictif et non sensible.
- Documentation SEO, branding et projets mise a jour pour cadrer les vues publiques controlees.
- Controle local valide : `.\node_modules\.bin\eslint`.
- Build production valide : `npm run build`.
- QA responsive realisee sur accueil, services, offres, simulateur, projets, fiche DEVORA Sentinel, fiche DEVORA Command Center et contact.
- Backup de cette passe : `docs/backups/copywriting-premium-20260521-142035`.

### Fusion et lancement Sentinel

- Base de travail confirmee : `site vitrine DevOra`.
- Backup local cree avant modification.
- Branding public renforce autour de `DEVORA`.
- Regle de confidentialite ajoutee : aucun projet interne publie sur GitHub.
- Page projets repositionnee : produits internes, captures reelles validees, fonctions concretes.
- Ajout de captures reelles pour DEVORA Atlas Commerce OS et FluxPilot AI.
- DEVORA Sentinel mis en avant comme produit le plus proche de la vente.
- Offre DEVORA Sentinel ajoutee : Early Access limite a 50 personnes, 1 mois inclus, activation manuelle par email.
- Packs DEVORA Sentinel ajoutes depuis la documentation interne : Early Access, Solo, Developer, Business, Enterprise.
- Compatibilite DEVORA Sentinel ajoutee : cible publique `PC x64 2020+`, avec mode leger pour machines modestes.
- Route de collecte ajoutee pour l'Early Access DEVORA Sentinel : `POST /api/early-access/sentinel`, avec relais configurable vers AlexCore.
- Formulaire Early Access ajoute sur la fiche DEVORA Sentinel pour collecter email, OS, annee PC, RAM et usage.
- Option commerciale ajoutee : theme personnalise DEVORA Sentinel `+29€ HT lancement`, avec couleurs precises obligatoires.
- Liens d'aide ajoutes au formulaire pour expliquer, trouver et copier un code couleur HEX.
- Email de secours enrichi avec les infos client, le compte concerne et la liste de couleurs demandee.
- Email professionnel de secours confirme : `contact@devora-freelance.fr`.
- Responsive renforce sur les nouvelles cartes projets et captures.
- Build Next.js valide avec `npm run build`.

## Notes

- DEVORA Commerce OS n'a pas pu etre capture : dependance `next` manquante dans `node_modules`.
- DEVORA Command Center redirige vers login pour les vues de gestion, donc pas de capture publique sans session.
- Les captures DEVORA Sentinel ont ete tentees, mais l'image exploitable reste a reprendre apres stabilisation d'une vue publique non sensible.
