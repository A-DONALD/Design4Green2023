# Sujet Design4Green – 2023

## Contexte

Le Référentiel général d'écoconception de services numériques (RGESN) est issu d’un travail mené dans le cadre de la mission interministérielle numérique responsable et co-pilotée par la Direction interministérielle du numérique (DINUM), le Ministère de la Transition Écologique, l’ADEME et l’Institut du Numérique Responsable. Ses objectifs sont de réduire la consommation de ressources informatiques et énergétiques et la contribution à l’obsolescence des équipements, qu’il s’agisse des équipements utilisateurs ou des équipements réseau ou serveur.

Les principaux objectifs de ce référentiel d’écoconception de service numérique sont de réduire :
 - la consommation de ressources informatiques ;
 - la contribution à l’obsolescence des équipements, qu’il s’agisse des équipements utilisateurs ou des équipements réseau ou serveur.

Le site web du référentiel est : https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/

Aucun label, ni certificat se basant sur ce référentiel n’est pour l’instant prévu. Il s’agit d’abord de promouvoir une démarche volontaire d’écoconception des services numériques.

Un score de conformité peut cependant être calculé de la manière suivante : 

__Nombre de critères conformes / (Total de critères (79) - Nombre de critères non applicables)__

Et c’est justement là le sujet du hackathon !

## Sujet

L'objectif de ce hackathon est de proposer un service permettant d'établir le bilan des critères :
 - Conformes
 - En cours de déploiement
 - Non conformes
 - Non applicables

Un fichier Json des critères se trouve ici : https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/export/referentiel-general-ecoconception-version-v1.json

Il devra permettre une sauvegarde et un export des résultats intermédiaires ou définitif.

1. Le service devra permettre d’indiquer pour un site internet donné, saisit dans un champ adapté, l’ensemble des critères respectés, non respectés, non applicable ou en cours de déploiement. Les critères seront affichés sous forme de liste, chapitre par chapitre (CF Sommaire du RGESN)
2. Le score de conformité devra être calculé sur cette même page. 
3. Il devra être possible de réorganiser les critères par niveaux de conformité, où de ne pouvoir afficher que les critères respectés, non applicable ou en cours de déploiement. 
4. Il devra être possible d’enregistrer un état intermédiaire (correspondant à des réponses partielles) puis un état final et de l’exporter sous forme de PDF accessible. L’état correspond à la liste des critères et leurs niveaux de conformité. 

En résumé, les équipes devront réaliser un site comportant __1 page__ permettant :
1. La présentation des critères sous une forme pertinente et accessible
2. Aux utilisateurs de cocher les différents critères selon leur état (Conformes, en cours de déploiement, non conformes, non applicables)
3. L’enregistrement (temporaire ou définitif) de ce bilan des critères
4. La mise à disposition d’un système de filtres pertinents avec une mise à jour de la liste
5. L’affichage du score de conformité 
6. L’export de l’audit sous format pdf 
    - *Un bonus sera accordé à l’équipe si le PDF respecte les bonnes pratiques d’accessibilité
(Guide des documents bureautiques accessibles : https://github.com/DISIC/guides-documents_bureautiques_accessibles)*

 ***Nous vous demandons d’évaluer en toute honnêteté cette page et de transmettre votre export dans le dossier final. Votre bilan n’influencera pas votre évaluation finale.***

## Evaluations 

__Important__ : Tout projet ne répondant pas aux six critères présentés ci-dessus ne pourra pas être évalué.

L’évaluation reposera sur la réalisation de ces différents points, leur niveau d’écoconception et d’accessibilité. 

Le site ne devra présenter aucune erreur d’accessibilité et un maximum de 10 warnings lors du passage par l’outil https://wave.webaim.org/

Les solutions et l’écoconception seront testées par des outils présentés sur le site https://institutnr.org/outils-ecoconception-accessibilite avec des outils tels que GT Metrix, GreenITAnalysis, Ecograder ou LightHouse. 

Les équipes seront encouragées à utiliser la checklist d’opquast : https://checklists.opquast.com/fr/qualiteweb/ 

**Le jury se basera sur le dépôt fait en temps et en heure des équipes sur l’espace de stockage proposé par le challenge.**

**En aucun cas, il ne cherchera à « faire marcher » un site inaccessible ou inactif sur le dépôt.**

### Les étapes de l’évaluation : 

1. Évaluation de la validité des projets (site évaluable et fonctionnel) + dépôt du document de synthèse (PDF) + dépôt de l’auto-bilan
2. Classement et short list via les outils d’évaluation
3. Les 16 meilleurs dossiers seront évalués via la grille de notation 
4. Les meilleures notes seront les équipes gagnantes : TOP 3 équipes étudiantes et Top 1 équipe professionnelle 

### Grille d'évaluation :
![Grille d'évaluation](https://design4green.org/grille_evaluation.png)

## Restitution ## 
Afin d'analyser le travail effectué par les équipes, un fichier ZIP devra être mis à disposition du jury.
Dans ce fichier ZIP, vous devrez insérer : 
- Le code source 
- Le document de synthèse expliquant dans en détail votre stratégie
- L’autoévaluation de votre page
 
L’utilisation du dépôt est obligatoire, et ce sont les fichiers présents sur ce dépôt qui seront évalués.
(Le site déployé sur le VPS doit être basé sur ce dépôt)

Les accès au dépôt seront coupés à la fin du challenge.

## IMPORTANT : ##  
 - Error 404 ou pas d’accès au VPS = _Disqualifié_
 - Non-respect des six critères d’évaluation obligatoires = _Disqualifié_
 - Ne pas intégrer de données permettant de vous identifier personnellement (nom, école, nom d’équipe…) dans vos travaux, **seulement votre numéro d’équipe**.