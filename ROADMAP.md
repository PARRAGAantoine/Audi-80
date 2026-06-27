# Roadmap - Carnet Atelier Audi 80 B3

Objectif : creer un outil personnel fiable pour diagnostiquer, reparer et suivre l'entretien de l'Audi 80 B3 1.8S 1988 / millesime 1989, sans perdre les informations deja rassemblees.

Principe directeur : chaque fonctionnalite doit aider a faire une action concrete sur la voiture : chercher une panne, effectuer un controle, identifier une piece, consulter la bonne RTA, retrouver une facture, ou enregistrer une intervention.

---

## Phase 1 - Application statique atelier

But : obtenir un site utilisable immediatement en HTML/CSS/JavaScript, sans backend, consultable localement.

### 1.1 Stabiliser l'interface principale

- Accueil avec photo de la voiture.
- Marque, modele, annee, millesime et informations techniques visibles.
- Menu clair :
  - Accueil
  - Recherche de panne
  - Mode reparation
  - Mode suivi d'entretien
- Theme clair / sombre.
- Interface sobre type atelier.
- Aucun affichage de pannes arbitraires sur l'accueil.

Validation :

- L'accueil donne une vraie identite au vehicule.
- La recherche est disponible partout.
- Aucun texte decoratif inutile.
- Aucun lien vers l'ancien site.

### 1.2 Refaire le moteur de recherche de panne

- Recherche tolerante aux accents : `leve vitre` = `lève-vitre`.
- Recherche par symptome, organe, panne, piece, categorie.
- Classement par pertinence :
  - titre exact en premier ;
  - mots-cles ensuite ;
  - pieces et controles ensuite ;
  - resultats indirects en dernier.
- Pas de liste complete affichee apres une recherche.
- Si aucune fiche n'existe, afficher clairement qu'il manque une fiche.

Validation :

- `leve vitre` trouve `Leve-vitre electrique en panne`.
- `surchauffe` trouve `Surchauffe moteur`.
- `phare` trouve une fiche eclairage.
- `batterie vide` trouve batterie / charge.
- `odeur essence` trouve carburant / carburation.
- `chauffage` trouve chauffage / refroidissement.

### 1.3 Creer les fiches pannes

Chaque fiche panne doit contenir :

- id stable ;
- categorie ;
- titre ;
- symptomes ;
- warning securite si necessaire ;
- controles a faire dans l'ordre ;
- pieces suspectes ;
- RTA ciblee ;
- note "information a completer" si une info manque.

Familles a couvrir :

- Moteur / demarrage.
- Allumage.
- Carburation / alimentation essence.
- Refroidissement.
- Graissage / pression huile.
- Charge / batterie / demarreur.
- Electricite habitacle.
- Eclairage / signalisation.
- Essuie-glace / lave-glace.
- Chauffage / ventilation.
- Freinage.
- Direction / suspension / trains roulants.
- Transmission / embrayage.
- Echappement / pollution.
- Habitacle / commandes.

Validation :

- Une panne courante ne doit pas finir en impasse.
- Les fiches doivent guider vers des controles concrets.
- Les fiches incompletes doivent etre marquees comme telles.

### 1.4 Creer les fiches controles

Chaque controle doit contenir :

- id stable ;
- titre ;
- ou regarder ;
- comment faire, etape par etape ;
- outils ;
- resultat attendu ;
- si mauvais ;
- RTA ciblee ;
- niveau de securite si besoin.

Exemples :

- Mesurer une tension batterie.
- Controler un fusible alimente des deux cotes.
- Controler une masse par chute de tension.
- Tester un ventilateur.
- Verifier thermostat par les durites.
- Controler une arrivee d'essence.
- Lire les bougies.
- Rechercher une prise d'air.
- Controler moteur de leve-vitre.
- Controler eclairage alimentation / masse.

Validation :

- Depuis une fiche panne, chaque controle est cliquable.
- Chaque controle explique quoi faire et ou le faire.
- La RTA affichee est uniquement celle du controle concerne.

### 1.5 Creer les fiches pieces

Chaque fiche piece doit contenir :

- id stable ;
- nom ;
- role ;
- emplacement ;
- symptomes typiques ;
- controles associes ;
- methode de remplacement ou depose si connue ;
- RTA ciblee ;
- factures/documents lies si disponibles.

Pieces prioritaires :

- Thermostat.
- Pompe a eau.
- Radiateur.
- Thermocontact.
- Ventilateur radiateur.
- Sonde temperature.
- Alternateur.
- Demarreur.
- Carburateur Keihin KS2.
- Bobine / allumeur / module.
- Batterie.
- Leve-vitre.
- Interrupteurs / commandes.
- Moteur essuie-glace.
- Pompe lave-glace.
- Soufflante habitacle.
- Freins / flexibles / plaquettes / disques.

Validation :

- Cliquer sur une piece explique ou elle est et comment la tester.
- Pas de fiche piece qui renvoie seulement vers une autre liste de diagnostics.

### 1.6 RTA ciblee et documents

- Copier uniquement les pages RTA utiles dans V1.
- Nommer les images clairement.
- Lier chaque RTA aux controles/pannes/pieces concernes.
- Ne jamais envoyer vers toute la RTA si une page precise suffit.
- Marquer les pages illisibles ou mal scannees.

Validation :

- Aucun lien RTA casse.
- Chaque controle affiche uniquement ses images RTA.
- Les pages douteuses sont listees dans une section "A rescanner".

### 1.7 Mode suivi d'entretien statique

- Reprendre tout l'historique depuis 1988.
- Afficher date, kilometrage, intervention, zone, source, statut.
- Lier factures et documents disponibles.
- Filtrer l'historique par date, zone, mot-cle, facture.
- Identifier les interventions sans document.

Validation :

- Aucune intervention connue ne manque.
- Les factures disponibles sont accessibles.
- Les interventions sans preuve sont signalees.

### 1.8 Nettoyage et qualite

- Pas de `source-original`.
- Pas de copie inutile du CSV d'exemples.
- Pas de liens vers l'ancien site.
- Pas de page inutile generee automatiquement.
- Pas de commentaires visibles sur le site.
- Tests navigateur : accueil, recherche, panne, controle, piece, entretien.

Validation finale phase 1 :

- Le site fonctionne localement.
- Les recherches courantes donnent une reponse utile.
- Les donnees ne sont pas perdues.
- L'ancien dossier `C:\Users\user\Documents\Audi 80` reste intact.

---

## Phase 2 - Normalisation des donnees

But : transformer les donnees actuelles en structure propre, prete pour Flask et SQLite, sans changer encore l'usage statique.

### 2.1 Definir le schema logique

Entites :

- `vehicule`
- `pannes`
- `controles`
- `pieces`
- `rta`
- `documents`
- `historique`
- `travaux_a_faire`
- `photos`
- `categories`

Relations :

- panne -> controles
- panne -> pieces suspectes
- panne -> RTA
- controle -> RTA
- piece -> controles
- piece -> RTA
- intervention -> documents
- intervention -> pieces
- intervention -> panne eventuelle

Validation :

- Tous les objets ont un `id` stable.
- Aucun texte important n'est bloque dans du HTML.
- Les relations se font par id, pas par texte libre.

### 2.2 Separrer donnees et affichage

- Extraire les donnees dans un format coherent.
- Eviter les doublons.
- Uniformiser titres, categories, mots-cles.
- Ajouter un champ `etat_information` :
  - `confirme`
  - `a_verifier`
  - `incomplet`
  - `a_photographier`
  - `a_rescanner`

Validation :

- Le site affiche les memes informations apres normalisation.
- La recherche continue de fonctionner.

### 2.3 Preparer la migration SQLite

- Mapper chaque entite vers une future table SQLite.
- Verifier les champs obligatoires.
- Prevoir les tables de liaison :
  - `panne_controle`
  - `panne_piece`
  - `panne_rta`
  - `piece_controle`
  - `piece_rta`
  - `intervention_document`

Validation :

- Un script futur pourra importer les donnees sans interpretation manuelle.

---

## Phase 3 - Backend local Flask

But : ajouter un mode edition local pour enrichir le carnet sans modifier le code a la main.

### 3.1 Mettre en place Flask

- Serveur local Python Flask.
- Pages servies depuis le dossier V1.
- Mode consultation identique a la phase 1.
- Mode edition reserve au local.

Validation :

- L'app fonctionne via `http://127.0.0.1`.
- La version statique reste consultable si possible.

### 3.2 Ajouter les formulaires d'edition

Formulaires :

- Ajouter / modifier une panne.
- Ajouter / modifier un controle.
- Ajouter / modifier une piece.
- Ajouter une intervention.
- Ajouter un travail a faire.
- Associer une RTA.
- Associer une facture.
- Ajouter une photo.

Validation :

- On peut enrichir le carnet sans ouvrir les fichiers JS.
- Les champs obligatoires empechent les fiches inutilisables.

### 3.3 Gestion locale des fichiers

- Upload local de factures.
- Upload local de photos.
- Classement automatique :
  - `docs/factures`
  - `docs/rta`
  - `photos/interventions`
  - `photos/pieces`
- Renommage propre des fichiers.

Validation :

- Ajouter une facture depuis l'interface cree un lien dans l'historique.
- Aucun fichier n'est perdu ou ecrase sans confirmation.

### 3.4 Sauvegarde et export

- Export JSON complet.
- Export dossier complet.
- Sauvegarde avant modification importante.
- Journal simple des modifications.

Validation :

- On peut restaurer les donnees si une erreur est faite.

---

## Phase 4 - SQLite

But : remplacer progressivement les fichiers de donnees par une base locale fiable.

### 4.1 Creer la base

Tables principales :

- `vehicule`
- `pannes`
- `controles`
- `pieces`
- `rta`
- `documents`
- `historique`
- `travaux_a_faire`
- `photos`
- `categories`

Tables de liaison :

- `panne_controle`
- `panne_piece`
- `panne_rta`
- `controle_rta`
- `piece_controle`
- `piece_rta`
- `intervention_document`
- `intervention_piece`

Validation :

- Toutes les donnees de phase 2 sont importees.
- Aucun id ne change.

### 4.2 Recherche avancee

- Recherche plein texte.
- Recherche par categorie.
- Recherche par piece.
- Recherche par RTA.
- Recherche dans l'historique.
- Recherche dans les documents.

Validation :

- Une recherche retrouve a la fois pannes, pieces, controles et interventions.

### 4.3 Vue entretien avancee

- Historique par date.
- Historique par kilometrage.
- Travaux a faire.
- Alertes entretien.
- Documents manquants.
- Pieces deja remplacees.

Validation :

- Le carnet devient un vrai suivi de vie du vehicule.

---

## Phase 5 - Ameliorations atelier

But : rendre l'outil encore plus pratique pendant les reparations.

### 5.1 Photos annotees

- Photos moteur.
- Photos habitacle.
- Photos fusibles/relais.
- Photos dessous de caisse.
- Emplacement des sondes et pieces.

Validation :

- Une fiche piece importante montre ou chercher sur la voiture reelle.

### 5.2 Procedures guidees

- Checklist pas a pas.
- Cases cochees pendant l'intervention.
- Notes de mesure.
- Photos avant/apres.

Validation :

- On peut suivre une procedure sans autre document ouvert.

### 5.3 Impression / export PDF

- Export fiche panne.
- Export fiche controle.
- Export historique.
- Export dossier pour controle technique ou revente.

Validation :

- Les exports sont lisibles et complets.

---

## Regles permanentes

- Ne jamais modifier l'ancien dossier `C:\Users\user\Documents\Audi 80`.
- Travailler uniquement dans `C:\Users\user\Documents\Audi 80 V1`.
- Ne jamais supprimer une information sans l'avoir migree ou signalee.
- Ne jamais copier une source exemple si elle ne doit servir que d'inspiration.
- Ne jamais afficher de commentaires inutiles sur le site.
- Ne jamais ajouter une fonctionnalite qui n'aide pas a reparer, entretenir ou documenter la voiture.
- Quand une information technique manque, l'indiquer clairement au lieu d'inventer.

