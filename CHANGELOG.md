# Changelog

## 2026-05-21

### Passe premium contenu, SEO et cartes privees

- Refonte corrective DEVORA dark/glass : les pages internes ne reposent plus sur l'ancien rendu clair de la precedente home.
- Socle `devora-page` bascule en fond bleu nuit/violet/cyan, avec surfaces translucides et textes clairs.
- Anciennes cartes blanches et fonds pale-blue interceptes par une couche globale DEVORA pour eviter les retours visuels de l'ancien site.
- Mockup portfolio Atlas Commerce OS repasse dans l'univers dark DEVORA.
- Hero DEVORA Sentinel recadre en mobile pour eviter le texte rogne sur les petits ecrans.
- Mention ajoutee a DEVORA Sentinel Early Access : version telephone portable en cours de developpement.
- Backup de la passe dark : `docs/backups/devora-dark-refonte-20260521-170019`.
- Footer DEVORA refait comme composant global unique : present sur accueil, pages internes, portfolio, Sentinel, simulateur, contact, mentions legales et confidentialite.
- Reseaux du footer remplaces par Instagram, TikTok, Facebook et LinkedIn ; anciens liens GitHub/Malt retires des zones publiques globales.
- Ancien footer specifique de la home supprime pour eviter les variations entre pages.
- Section "Qu'est-ce que DEVORA Sentinel ?" repositionnee dans une ambiance immersive bleu nuit/violet/cyan avec cartes glass, afin d'eviter l'effet page claire separee.
- Page contact recadree : grille alignee en haut, moins de vide vertical, CTA simulateur remis dans le gradient DEVORA et liens reseaux harmonises.
- CTA blancs arrondis surcharges par un rendu DEVORA plus visible : gradient bleu/violet/cyan, bordure lumineuse et ombre subtile.
- Fonds bleu nuit `#061A35` enrichis par des halos et overlays pour eviter les aplats trop plats.
- Reprise visuelle additionnelle apres audit : mentions legales et politique de confidentialite remises dans le systeme DEVORA avec hero sombre, code atmosphere, palette cyan/violet et surfaces premium.
- Ajout d'une regle globale de surface DEVORA pour eviter les cartes blanches trop generiques dans les pages publiques.
- Controle statique confirme : plus aucun ancien fond legal `min-h-screen bg-linear-to-b` dans `src/app` ou `src/components`.
- Fiche DEVORA Sentinel refondue pour expliquer clairement le produit : outil local, surveillance defensive, IA locale, donnees conservees sur la machine par defaut et validation humaine.
- Ajout d'une section "Qu'est-ce que DEVORA Sentinel ?" avec cartes de comprehension et garde-fous publics.
- Ajout d'accordeons FAQ sur local, donnees, IA, veilles externes, difference avec antivirus et actions sensibles.
- Packs Sentinel mis a jour avec prix reels : Early Access `0€`, Solo `14,90€/mois`, Developer `29€/mois`, Business `79€/mois`, Enterprise `sur devis`.
- Options Sentinel ajoutees : theme personnalise, installation accompagnee, optimisation locale, surveillance avancee et historique etendu.
- Style Sentinel uniformise avec DEVORA : memes gradients, surfaces premium, bleu profond, cyan, violet et aucun branding separe.
- Message local renforce : donnees gardees sur la machine par defaut, pas de spyware, pas de cloud invasif, aucune collecte cachee.
- Passe responsive globale realisee sur 21 routes publiques et 4 largeurs : desktop, tablette, mobile et petit mobile.
- Recadrage du code-rain et des apercus prives pour eviter tout depassement decoratif.
- Branding public harmonise en `DEVORA` dans la documentation et les contenus visibles.
- Textes des pages principales reecrits pour parler benefices client : clarte, gain de temps, suivi des priorites, conversion et securite locale.
- Jargon technique public reduit : les formulations privilegient les usages metier plutot que la technologie.
- Simulateur transforme en qualification de besoin DEVORA : site, outil metier, automatisation, e-commerce, Sentinel, IA locale et visibilite.
- Descriptions projets reformulees autour des problemes resolus, gains attendus et demonstrations privees.
- Cartes sans capture publique equipees d'un apercu anime protege via `PrivateProjectVeil`, avec contenu fictif et non sensible.
- Documentation SEO, branding et projets mise a jour pour cadrer les vues publiques controlees.
- Documentation Sentinel, pricing et marketing ajoutee.
- Notice Word ajoutee : `docs/DEVORA_SENTINEL_NOTICE_PROCEDURE_CLIENTS.docx`, avec procedure Early Access, qualification, activation, reponses types, prix et limites a ne pas promettre.
- Controle local valide : `.\node_modules\.bin\eslint`.
- Build production valide : `npm run build`.
- QA responsive realisee sur toutes les pages publiques : 84 controles navigateur, aucun overflow horizontal, aucun texte hors cadre et aucune erreur console.
- Backup de cette passe : `docs/backups/copywriting-premium-20260521-142035`.
- Backup Sentinel/pricing : `docs/backups/sentinel-copy-pricing-20260521-150000`.
- Backup reprise visuelle : `docs/backups/visual-style-devora-20260521-160000`.

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
