# DevOra - Site vitrine principal

Base principale du site DevOra, issue de `site vitrine DevOra`.

## Positionnement

DevOra est presente comme une plateforme/studio produit autour de :

- IA locale et automatisation ;
- dashboards business ;
- securite defensive avec DevOra Sentinel ;
- outils internes et cockpits metier ;
- commerce digital et pilotage operationnel.

Le site ne publie pas les projets internes. Il montre uniquement des captures
reelles validees, des fonctions concretes et des CTA de contact.

## Regle de confidentialite portfolio

- Aucun code source des produits internes ne doit etre pousse sur GitHub depuis ce site.
- Aucun dossier produit interne ne doit etre copie dans le build public.
- Les captures doivent venir de vraies interfaces locales.
- Les projets sans capture validee restent marques comme internes ou en validation.

## Offre DevOra Sentinel

DevOra Sentinel est le produit le plus proche d'une phase commerciale.

Offre actuelle a afficher :

- Early Access DevOra Sentinel ;
- limite a 50 personnes ;
- 1 mois inclus ;
- activation manuelle apres demande par email ;
- option theme personnalise DevOra Sentinel : `+29€ HT lancement`, uniquement avec couleurs precises fournies ;
- aide formulaire ajoutee pour expliquer, obtenir et copier les codes HEX ;
- format client attendu : compte / organisation + liste simple de couleurs (`Fond #061A35`, `Accent #22D3EE`, etc.) ;
- packs publics a cadrer : Early Access, Solo, Developer, Business, Enterprise.

## Pont AlexCore Early Access

La vitrine expose une route serveur :

```txt
POST /api/early-access/sentinel
```

Elle collecte les demandes Early Access DevOra Sentinel et les relaie vers AlexCore si l'endpoint est configure.

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

Derniere verification locale :

```bash
npm run build
```

Build Next.js OK.

## Documents

- `docs/DEVORA_BRANDING_RULES.md`
- `docs/DEVORA_NAMING_CONVENTION.md`
- `docs/DEVORA_SITE_MIGRATION.md`
- `docs/DEVORA_PORTFOLIO_STRUCTURE.md`
- `docs/DEVORA_SEO_STRUCTURE.md`
- `CHANGELOG.md`

## Backup

Un backup local a ete cree avant fusion :

`C:\Users\Morpheus\DevOra\_backups\site-vitrine-DEVORA-before-fusion-20260521-011759`

## Signature

© 2026 DevOra. Tous droits reserves.
