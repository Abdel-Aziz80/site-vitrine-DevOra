# DEVORA Portfolio Structure

## Principe

La page projets publique n'est pas un depot ouvert ni une documentation interne. Elle presente les produits DEVORA comme preuves fonctionnelles, sans exposer les sources, la logique metier profonde ou les systemes sensibles.

## Structure recommandee

Chaque produit doit avoir :

- nom public coherent ;
- statut ;
- contexte simple ;
- probleme client ;
- solution expliquee sans jargon ;
- valeur business ;
- fonctions visibles ;
- gains attendus ;
- services associes ;
- vues publiques validees ou apercu protege ;
- bouton de contact, demande de cadrage ou Early Access.

Ne pas mettre la technologie au premier plan. Les details techniques peuvent rester dans le code ou etre abordes en demo privee si le prospect en a besoin.

Pour DEVORA Sentinel, la fiche publique doit aussi mentionner :

- Early Access limite a 50 personnes ;
- 1 mois inclus ;
- activation manuelle par email ;
- compatibilite cible `PC x64 2020+` ;
- mode leger pour machines modestes ;
- option theme personnalise avec couleurs precises fournies par le client ;
- aucune promesse sur PC anciens, OS obsoletes ou IA locale lourde sans ressources adaptees.

## Vues publiques

Maximum recommande : 2 a 3 vues par produit.

Vues validees :

- DEVORA Atlas Commerce OS : ventes, commandes et tendances commerce.
- FluxPilot AI : priorites, taches repetitives et validations humaines.

Apercus proteges :

- DEVORA Sentinel : vues detaillees reservees a l'Early Access et aux demos privees.
- DEVORA Command Center : vue publique limitee, pas de session demo exposee.
- DEVORA Commerce OS : apercu controle tant que la capture finale n'est pas validee.

Les cartes sans vraie capture publique utilisent `PrivateProjectVeil` : un layer anime fictif, discret et non sensible qui suggere un systeme vivant sans reveler son fonctionnement.

## Confidentialite

Les projets internes restent dans `C:\Users\Morpheus\DevOra`.
Ils ne doivent pas etre ajoutes a GitHub depuis le site vitrine.

Ne jamais exposer publiquement :

- architecture complete ;
- endpoints sensibles ;
- prompts systeme ;
- tokens, cles ou secrets ;
- orchestration interne ;
- pipelines ou regles metier profondes ;
- logique AlexCore ou Sentinel detaillee.
