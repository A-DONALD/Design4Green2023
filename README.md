# DESIGN 4 GREEN 2023

## Sujet
**Le sujet est diponible dans le fichier [SUJET.md](SUJET.md)**

## Règlement 
### Partie logistique
Le challenge débute le **mercredi 15 à 9h30** novembre et se termine le **vendredi 17 novembre à 9h**. 
Chaque jour du challenge, à 16h, vous aurez à disposition sur Discord, un talk d’expert du numérique responsable. 

Chaque jour, sur **Discord**, vous aurez la possibilité de **poser des questions**, par écrit, à des membres du jury sur des plages horaires précises : **9h-12h et 14h-17h**.
Les questions auxquelles répondront le jury doivent strictement être relatives à la compréhension du sujet.

Les membres du jury ne peuvent aider individuellement les participants.

### Partie technique
Ressources mises à disposition :
-	Une machine virtuelle avec 1vCPU / 2Go de RAM / 20Go de stockage
-	Un repository git

Les accès vous seront communiqués lors du démarrage du concours sur l’adresse mail du capitaine d’équipe à 9h30.

Attention, il est formellement interdit :
-	De modifier la configuration firewall,
-	D’arrêter la machine (reboot autorisé)

La VM est fournie par notre partenaire Neutral-IT.

Celle-ci ne **possède pas** d’IP publique.

Seuls les services SSH et web (port 80) sont exposés sur Internet via un reverse proxy :
![Principe de L'infrastructure](https://design4green.org/infra.png)

---


Pour vous connecter en **SSH**, il faut rentrer l’IP suivante : **46.105.63.50** et renseigner le **port** qui vous a été communiqué _(ne pas utiliser le port 22)_

---

Votre service web doit être exposé en local sur votre machine sur le **port 80** et sera joignable par l’extérieur via l’url sous la forme :
```https://neutral-it-x-y-z.hebergement.green```

Attention à la fin du concours, la machine sera **automatiquement redémarrée**, assurez-vous que vos **services démarrent automatiquement** lors du boot de la machine.