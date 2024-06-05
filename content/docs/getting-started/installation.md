# Installation

Avant de vouloir installer l'ensemble des services nécessaires, veuillez vérifier que vous disposez bien de la
bonne version de NodeJS et que pnpm soit bien installée sur votre machine. Beep a besoin de `Node.JS >= 20.6`

Vous pouvez installer Node.js à l'aide des [installateurs officiels](https://nodejs.org/en/download/) ou de [Volta](https://docs.volta.sh/guide/getting-started). Volta est un gestionnaire de paquets multiplateforme qui installe et exécute plusieurs versions de Node.js sur votre ordinateur.

```sh
// title: Vérifiez votre version de Node.JS
node -v
# v21.7.3
```

Bien sûr, voici le fichier README.md avec les sections réorganisées pour une meilleure lisibilité :

## Front

Ce dossier contient les instructions pour lancer la stack front-end de l'application.

### Liens Utiles

1. [Trello Front](https://trello.com/invite/b/VV5c6znJ/ATTI791d6c78e353dfba56a89b25abf45379A1532A43/beep-front) - Ce lien conduit vers un tableau Trello spécifique dédié au front-end du projet. Trello est un outil de gestion de projet en ligne qui permet d'organiser des tâches sous forme de cartes sur des tableaux.
2. [Trello composant](https://trello.com/invite/b/eDPWKHlE/ATTI5d798f2d27160f95ff948e5059cc99f569849308/beep-composants) - Ce lien mène vers un autre tableau Trello, cette fois-ci destiné à la gestion des composants du projet. Il peut s'agir de composants réutilisables, de bibliothèques ou de tout autre élément constitutif de l'interface utilisateur.
3. [Documentation Notion](https://www.notion.so/Beep-4f3dd311e08a4de38fc1c901bef44322) - Ce lien renvoie à une documentation hébergée sur Notion. Notion est une plateforme qui permet de créer des documents, des bases de connaissances et des wikis collaboratifs. Cette documentation peut contenir des informations sur le projet, son architecture, ses fonctionnalités, etc.


Assurez-vous d'avoir `pnpm` installé. Si non, vous pouvez l'installer avec la commande suivante :

```bash
sudo npm install -g pnpm
```

Pour installer les packages nécessaires, utilisez la commande :

```sh
pnpm install
```

### Lancer le Frontend

Pour démarrer l'application front-end, utilisez la commande suivante :

```sh
pnpm run start
```

### Docker

Si vous préférez utiliser Docker, voici les étapes à suivre :

Pour construire localement pour le débogage :

```sh
pnpm run build:docker
```
(Veuillez noter que cela peut prendre un certain temps)

Pour exécuter l'image construite :

```sh
pnpm run start:docker
```

### Qualité

Pour tester l'application :

```bash
pnpm run lint
```

Pour effectuer le linting :

```bash
pnpm run test
```
