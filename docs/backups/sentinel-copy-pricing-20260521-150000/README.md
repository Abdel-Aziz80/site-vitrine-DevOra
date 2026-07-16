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

Offre actuelle a afficher :

- Early Access DEVORA Sentinel ;
- limite a 50 personnes ;
- 1 mois inclus ;
- activation manuelle apres demande par email ;
- option theme personnalise DEVORA Sentinel : `+29€ HT lancement`, uniquement avec couleurs precises fournies ;
- aide formulaire ajoutee pour expliquer, obtenir et copier les codes HEX ;
- format client attendu : compte / organisation + liste simple de couleurs (`Fond #061A35`, `Accent #22D3EE`, etc.) ;
- packs publics a cadrer : Early Access, Solo, Developer, Business, Enterprise.

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

Derniere validation locale de la passe 2026-05-21 :

```bash
npm run build
.\node_modules\.bin\eslint
```

QA responsive verifiee sur desktop et mobile pour les pages principales, avec controle des debordements horizontaux, titres, boutons, metadonnees et apercus prives.

## Passe contenu 2026-05-21

- Textes publics reecrits pour etre plus clairs, plus business et moins techniques.
- Pages principales harmonisees autour de DEVORA : accueil, services, offres, simulateur, projets, Sentinel, AlexCore, contact et pages locales.
- Cartes de projets prives remplacees par un apercu anime fictif, premium et non sensible.
- Maillage interne renforce vers contact, simulateur, offres et projets.
- Titres et descriptions SEO clarifies sans bourrage de mots-cles.

## Documents

- `docs/DEVORA_BRANDING_RULES.md`
- `docs/DEVORA_NAMING_CONVENTION.md`
- `docs/DEVORA_SITE_MIGRATION.md`
- `docs/DEVORA_PORTFOLIO_STRUCTURE.md`
- `docs/DEVORA_SEO_STRUCTURE.md`
- `CHANGELOG.md`

## Backup

Un backup local a ete cree avant cette passe :

`C:\Users\Morpheus\site vitrine DevOra\docs\backups\copywriting-premium-20260521-142035`

## Signature

© 2026 DEVORA. Tous droits reserves.
