# Changelog

## 2026-05-21

- Base de travail confirmee : `site vitrine DevOra`.
- Backup local cree avant modification.
- Branding public renforce autour de `DevOra`.
- Regle de confidentialite ajoutee : aucun projet interne publie sur GitHub.
- Portfolio repositionne : produits internes, captures reelles validees, fonctions concretes.
- Ajout de captures reelles pour DevOra Atlas Commerce OS et FluxPilot AI.
- DevOra Sentinel mis en avant comme produit le plus proche de la vente.
- Offre DevOra Sentinel ajoutee : Early Access limite a 50 personnes, 1 mois inclus, activation manuelle par email.
- Packs DevOra Sentinel ajoutes depuis la documentation interne : Early Access, Solo, Developer, Business, Enterprise.
- Compatibilite DevOra Sentinel ajoutee : cible publique `PC x64 2020+`, avec mode leger pour machines modestes.
- Route API ajoutee pour l'Early Access DevOra Sentinel : `POST /api/early-access/sentinel`, avec relais configurable vers AlexCore.
- Formulaire Early Access ajoute sur la fiche DevOra Sentinel pour collecter email, OS, annee PC, RAM et usage.
- Option commerciale ajoutee : theme personnalise DevOra Sentinel `+29€ HT lancement`, avec couleurs precises obligatoires.
- Liens d'aide ajoutes au formulaire pour expliquer, trouver et copier un code couleur HEX.
- Email de secours enrichi avec les infos client, le compte concerne et la liste de couleurs demandee.
- Email professionnel de secours confirme : `contact@devora-freelance.fr`.
- Responsive renforce sur les nouvelles cartes portfolio et captures.
- Build Next.js valide avec `npm run build`.

## Notes

- DevOra Commerce OS n'a pas pu etre capture : dependance `next` manquante dans `node_modules`.
- DevOra Command Center redirige vers login pour les vues dashboard, donc pas de capture publique sans session.
- Les captures DevOra Sentinel ont ete tentees, mais l'image exploitable reste a reprendre apres stabilisation du proxy/API cote cockpit.
