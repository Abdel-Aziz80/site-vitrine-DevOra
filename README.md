# DEVORA - Site vitrine principal

Base principale du site DEVORA, issue de `site vitrine DevOra`.

## Positionnement

DEVORA est presente comme une plateforme premium orientee business autour de :

- IA locale et automatisation ;
- tableaux de pilotage metier ;
- securite defensive avec DEVORA Sentinel ;
- outils internes et espaces de suivi ;
- commerce digital et pilotage operationnel ;
- pages de vente et sites capables de generer des demandes.

Le site ne publie pas les projets internes. Il montre uniquement des vues controlees, des fonctions concretes et des boutons de contact lisibles.

## Regle de confidentialite projets

- Aucun code source des produits internes ne doit etre pousse sur GitHub depuis ce site.
- Aucun dossier produit interne ne doit etre copie dans le build public.
- Les captures publiques doivent rester controlees et ne jamais exposer de logique sensible.
- Les projets sans capture publique validee utilisent un apercu anime fictif, sobre et volontairement limite.
- Les demonstrations detaillees restent reservees aux rendez-vous, visios ou demandes qualifiees.

## Offre DEVORA Sentinel

DEVORA Sentinel est le produit le plus proche d'une phase commerciale.

Positionnement public :

- outil local premium de surveillance defensive ;
- IA locale utile, non magique ;
- donnees gardees sur la machine par defaut ;
- aucune collecte cachee ;
- aucune revente de donnees ;
- validation humaine avant action sensible ;
- veilles externes uniquement sur sources autorisees ;
- design et palette strictement alignes avec l'identite DEVORA.

Offre actuelle a afficher :

- Early Access DEVORA Sentinel ;
- prix : `0€` ;
- limite a 50 personnes ;
- 1 mois inclus ;
- activation manuelle apres demande par email ;
- version telephone portable en cours de developpement ;
- Solo : `14,90€/mois` ;
- Developer : `29€/mois` ;
- Business : `79€/mois` ;
- Enterprise : `sur devis` ;
- option theme personnalise DEVORA Sentinel : `+29€`, uniquement avec couleurs precises fournies ;
- installation accompagnee : `+49€` ;
- configuration optimisation locale : `+29€` ;
- surveillance avancee supplementaire : `+9€/mois` ;
- historique incidents etendu : `+5€/mois` ;
- aide formulaire ajoutee pour expliquer, obtenir et copier les codes HEX ;
- format client attendu : compte / organisation + liste simple de couleurs (`Fond #061A35`, `Accent #22D3EE`, etc.) ;
- packs publics : Early Access, Solo, Developer, Business, Enterprise.

## Pont AlexCore Early Access

La vitrine expose une route serveur :

```txt
POST /api/early-access/sentinel
```

Elle collecte les demandes Early Access DEVORA Sentinel et les relaie vers AlexCore si l'endpoint est configure.

Variables recommandees :

```bash
ALEXCORE_EARLY_ACCESS_URL=http://127.0.0.1:8787/api/devora/sentinel/early-access
ALEXCORE_API_TOKEN=token_prive_a_changer
DEVORA_CONTACT_EMAIL=contact@devora-freelance.fr
NEXT_PUBLIC_DEVORA_CONTACT_EMAIL=contact@devora-freelance.fr
```

Si AlexCore n'est pas encore lance ou configure, le formulaire affiche l'email professionnel de secours : `contact@devora-freelance.fr`.

## Commandes

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Verification

Derniere validation locale de la passe Sentinel 2026-05-21 :

```bash
npm run build
.\node_modules\.bin\eslint
```

QA responsive verifiee sur desktop et mobile pour les pages principales et la fiche DEVORA Sentinel, avec controle des debordements horizontaux, titres, boutons, metadonnees, FAQ, prix et coherence palette DEVORA.

Passe responsive complete :

- 21 routes publiques verifiees ;
- 4 largeurs controlees : desktop, tablette, mobile et petit mobile ;
- 84 controles navigateur ;
- aucun overflow horizontal ;
- aucun texte hors cadre ;
- aucune erreur console ;
- code-rain et apercus prives recadres pour rester dans les bords.

Passe visuelle DEVORA additionnelle :

- pages legales remises dans le systeme visuel DEVORA avec hero sombre, animation subtile et palette cyan/violet ;
- suppression des anciens fonds trop clairs generiques sur les pages legales ;
- surfaces blanches publiques retouchees globalement avec reflets DEVORA, bordures bleutees et ombres premium ;
- section explicative DEVORA Sentinel basculee en ambiance immersive bleu/violet pour rester coherente avec la home ;
- CTA blancs visibles remplaces ou surcharges par le gradient DEVORA ;
- footer global unique integre via `SiteChrome`, present aussi sur l'accueil ;
- footer structure avec liens plateforme, liens DEVORA, email et reseaux Instagram, TikTok, Facebook, LinkedIn ;
- verification statique : plus aucune page app avec l'ancien fond `bg-linear-to-b` des pages legales.

## Passe contenu 2026-05-21

- Textes publics reecrits pour etre plus clairs, plus business et moins techniques.
- Pages principales harmonisees autour de DEVORA : accueil, services, offres, simulateur, projets, Sentinel, AlexCore, contact et pages locales.
- Fiche DEVORA Sentinel enrichie : definition claire, donnees locales, IA locale, FAQ, packs reels et options.
- Cartes Sentinel alignees sur la palette DEVORA : bleu profond, cyan, violet, surfaces premium et aucun style produit separe.
- Pages legales harmonisees avec le meme langage visuel que les pages business et Sentinel.
- Footer global premium unifie sur toutes les pages publiques.
- Passe visuelle responsive complete : toutes les pages publiques recadrees et verifiees sur desktop/tablette/mobile.
- Cartes de projets prives remplacees par un apercu anime fictif, premium et non sensible.
- Maillage interne renforce vers contact, simulateur, offres et projets.
- Titres et descriptions SEO clarifies sans bourrage de mots-cles.

## Documents

- `docs/DEVORA_BRANDING_RULES.md`
- `docs/DEVORA_NAMING_CONVENTION.md`
- `docs/DEVORA_SITE_MIGRATION.md`
- `docs/DEVORA_PORTFOLIO_STRUCTURE.md`
- `docs/DEVORA_SEO_STRUCTURE.md`
- `docs/DEVORA_SENTINEL.md`
- `docs/DEVORA_SENTINEL_PRICING.md`
- `docs/DEVORA_MARKETING.md`
- `docs/DEVORA_SENTINEL_NOTICE_PROCEDURE_CLIENTS.docx`
- `CHANGELOG.md`

## Backup

Backups locaux crees avant les passes sensibles :

- `C:\Users\Morpheus\site vitrine DevOra\docs\backups\copywriting-premium-20260521-142035`
- `C:\Users\Morpheus\site vitrine DevOra\docs\backups\sentinel-copy-pricing-20260521-150000`
- `C:\Users\Morpheus\site vitrine DevOra\docs\backups\visual-style-devora-20260521-160000`
- `C:\Users\Morpheus\site vitrine DevOra\docs\backups\global-visual-footer-20260521-162000`
- `C:\Users\Morpheus\site vitrine DevOra\docs\backups\devora-dark-refonte-20260521-170019`

## Signature

© 2026 DEVORA. Tous droits reserves.
