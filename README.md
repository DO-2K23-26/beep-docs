# Beep documentation

Ce repository retrace la documentation technique ainsi que les spécifications fonctionnelles des projets Beep.

Cette documentation est rédigée en markdown et est accessible à tous les collaborateurs ayant la permission keycloak
d'accéder à celle-ci.

La documentation doit suivre les mises à jour des projets. Pour cela, il est nécessaire de la mettre à jour.

La documentation est contenue dans le dossier `/content/*`

## Workflow
La structure de base de la documentation est construite autour des exigences de flux de travail suivantes.

- Créer un pipeline de rendu Markdown hautement personnalisable. J'ai besoin de contrôler le rendu de chaque élément Markdown et d'ajuster sa sortie HTML selon mes besoins. Cela est alimenté par les packages [@dimerapp/markdown](https://github.com/dimerapp/markdown) et [@dimerapp/edge](https://github.com/dimerapp/edge).

- Utiliser [Shiki](https://github.com/shikijs/shiki) pour styliser les blocs de code. Shiki utilise les thèmes et la grammaire de VSCode pour la coloration syntaxique et ne nécessite aucun code frontend.

- Utiliser un [thème HTML et CSS de base](https://github.com/dimerapp/docs-theme) pour éviter de reconstruire les sites de documentation à partir de zéro à chaque fois. Mais permettre toujours des personnalisations pour ajouter de la personnalité à chaque site.

- Utiliser un fichier JSON simpliste pour afficher la barre latérale de la documentation (fichier de base de données JSON). Scanner les fichiers et dossiers et les trier selon une convention rend la refonte beaucoup plus difficile.

- Autoriser la liaison vers des fichiers Markdown et résoudre automatiquement leurs URL lors du rendu en HTML.

- Autoriser la conservation des images et vidéos à côté du contenu Markdown et résoudre automatiquement leurs URL lors du rendu en HTML.

## Structure des dossiers


## Folder structure

```
.
├── assets
│  ├── app.css
│  └── app.js
├── bin
│  ├── build.ts
│  └── serve.ts
├── content
│  ├── docs
│  └── config.json
├── src
│  ├── bootstrap.ts
│  └── collections.ts
├── templates
│  ├── elements
│  ├── layouts
│  ├── partials
│  └── docs.edge
├── vscode_grammars
│  ├── dotenv.tmLanguage.json
│  └── main.ts
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```


### Le répertoire des assets

Le répertoire `assets` contient les fichiers d'entrée CSS et JavaScript frontend. Principalement, nous importons des packages supplémentaires et le [thème de base](https://github.com/dimerapp/docs-theme) à l'intérieur de ces fichiers. Cependant, n'hésitez pas à ajuster ces fichiers pour créer un site Web plus personnalisé.

### Le répertoire bin

Le répertoire `bin` contient deux fichiers de script pour démarrer le serveur de développement et exporter la documentation vers des fichiers HTML statiques. Ces scripts amorcent le framework AdonisJS sous-jacent.

### Le répertoire content
Le répertoire `content` contient les fichiers Markdown et JSON de la base de données. Nous organisons les fichiers Markdown en collections, chacune avec son fichier de base de données.

Vous pouvez considérer les collections comme différentes zones de documentation sur le site Web. Par exemple: Vous pouvez créer une **collection pour la documentation**, une **collection pour la référence de l'API**, et une **collection pour la référence de configuration**.

Voir aussi: [Création de nouvelles collections](#creating-new-collections)

### Le répertoire src
Le répertoire `src` contient un fichier `bootstrap` pour tout connecter. Nous ne cachons pas le processus d'amorçage à l'intérieur de certains packages. C'est parce que nous voulons que les projets finaux aient un contrôle complet sur la configuration, l'ajout de packages supplémentaires ou la suppression de fonctionnalités inutilisées.

Le fichier `collections.ts` est utilisé pour définir une ou plusieurs collections.

### Le répertoire templates
Le répertoire `templates` contient les modèles Edge utilisés pour le rendu HTML.

- Le modèle `docs` rend un agencement de documentation conventionnel avec l'en-tête, la barre latérale, le contenu et la table des matières. Vous pouvez utiliser le même modèle pour plusieurs collections.
- Les logos sont conservés sous forme de SVG dans les fichiers `partials/logo.edge` et `partials/logo_mobile.edge`.
- Le fragment HTML de base fait partie du fichier `layouts/main.edge`. N'hésitez pas à ajouter des balises meta ou des scripts/polices personnalisés à l'intérieur de ce fichier.

### Le répertoire vscode_grammars
Le répertoire `vscode_grammars` contient une collection de langages VSCode personnalisés que vous souhaitez utiliser dans votre projet.

Voir aussi: [Utilisation de grammaires VSCode personnalisées](#using-custom-vscode-grammars)

## Utilisation
Clonez le dépôt depuis Github puis installez les dépendences

```sh
cd docs
pnpm i
```

Run the development server.

```sh
npm run dev
```

And visit [http://localhost:3333/docs/introduction](http://localhost:3333/docs/introduction) URL to view the website in the browser.

## Ajout de contenu

Par défaut, nous créons une collection docs avec un fichier introduction.md à l'intérieur.

En premier lieu, vous devriez ouvrir le fichier content/docs/db.json et ajouter toutes les entrées pour votre documentation. Définir les entrées manuellement peut sembler fastidieux au début, mais cela permettra une personnalisation plus facile à l'avenir.

Une entrée de base de données typique a les propriétés suivantes.

```json
{
  "permalink": "introduction",
  "title": "Introduction",
  "contentPath": "./introduction.md",
  "category": "Guides"
}
```

- `permalink`: L'URL unique pour la documentation. Le préfixe de collection sera appliqué automatiquement à l'URL. Voir le fichier src/collection.ts pour le préfixe de collection.
- `title`: Le titre à afficher dans la barre latérale.
- `contentPath`: Un chemin relatif vers le fichier Markdown.
- `category`: La catégorie de regroupement pour la documentation.

Une fois que vous avez défini toutes les entrées, créez des fichiers Markdown et rédigez un contenu réel.

## Modification de la configuration du site Web

Nous utilisons un fichier de configuration très minimal pour mettre à jour certaines sections du site web. La configuration est stockée dans le fichier `content/config.json`.

```json
{
  "links": {
    "home": {
      "title": "Your project name",
      "href": "/"
    },
    "github": {
      "title": "Your project on Github",
      "href": "https://github.com/dimerapp"
    }
  },
  "fileEditBaseUrl": "https://github.com/dimerapp/docs-boilerplate/blob/develop",
  "copyright": "Your project legal name"
}
```

- `links`: L'objet contient deux liens fixes. La page d'accueil et l'URL du projet Github.
- `fileEditBaseUrl`: L'URL de base pour le fichier sur Github. Ceci est utilisé à l'intérieur du pied de page du contenu pour afficher le lien Modifier sur Github.
- `copyright`: Le nom à afficher dans le pied de page du droit d'auteur.
- `menu`: Optionnellement, vous pouvez définir un menu d'en-tête sous forme d'un tableau d'objets.
  ```json
  {
    "menu": [
      {
        "href": "/docs/introduction",
        "title": "Docs",
      },
      {
        "href": "https://blog.project.com",
        "title": "Blog",
      },
      {
        "href": "https://github.com/project/releases",
        "title": "Releases",
      }
    ]
  }
  ```

- `search`: En option, vous pouvez définir la configuration de la recherche Algolia.
  ```json
  {
    "search": {
      "appId": "",
      "indexName": "",
      "apiKey": ""
    }
  }
  ```

## Créer de nouvelles collections
Vous pouvez créer plusieurs collections en les définissant dans le fichier `src/collections.ts`.

Une collection est définie en utilisant la classe `Collection`. Cette classe accepte l'URL du fichier de base de données. Appelez également `collection.boot` une fois que vous avez configuré la collection.

```ts
// Docs
const docs = new Collection()
  .db(new URL('../content/docs/db.json', import.meta.url))
  .useRenderer(renderer)
  .urlPrefix('/docs')

await docs.boot()

// API reference
const apiReference = new Collection()
  .db(new URL('../content/api_reference/db.json', import.meta.url))
  .useRenderer(renderer)
  .urlPrefix('/api')

await apiReference.boot()

export const collections = [docs, apiReference]
```

## Utiliser une grammaire VSCode personnalisée
Vous pouvez ajouter le support de langues VSCode personnalisées en les définissant dans le fichier `vscode_grammars/main.ts`. Chaque entrée doit adhérer à l'interface `ILanguageRegistration` de [Shiki] (https://github.com/shikijs/shiki/blob/main/docs/languages.md).

## Changer le thème des blocs de code markdown

Le thème des blocs de code est défini en utilisant l'instance de rendu Markdown créée dans le fichier `src/bootstrap.ts`. Vous pouvez utiliser l'un des [thèmes prédéfinis ou un thème personnalisé](https://github.com/dimerapp/shiki/tree/next#using-different-themes).

```ts
export const renderer = new Renderer(view, pipeline)
  .codeBlocksTheme('material-theme-palenight')
```

## Personnalisation du CSS

Le thème [base docs](https://github.com/dimerapp/docs-theme) fait un usage intensif des variables CSS, vous pouvez donc modifier la plupart des styles en définissant un nouveau jeu de variables.

Si vous souhaitez modifier les couleurs, nous vous recommandons de consulter [Radix Colors](https://www.radix-ui.com/docs/colors/getting-started/installation), car c'est ce que nous avons utilisé pour le style par défaut.

## Personnaliser le HTML

La sortie HTML n'est pas 100% personnalisable puisque nous ne créons pas un générateur de documentation générique pour le reste du monde. Le boilerplate est destiné à être utilisé sous contraintes.

Cependant, vous pouvez toujours contrôler la mise en page, car toutes les sections de la page sont exportées en tant que composant Edge et vous pouvez les placer n'importe où dans le DOM. Consultez le fichier `templates/docs.edge` pour voir comment tout est utilisé.

### Emplacements de l'en-tête

Vous pouvez passer les composants suivants à l'en-tête du site web.

- `logo (obligatoire)` : Contenu du logo à afficher dans la fenêtre Desktop.

- `logoMobile (obligatoire)` : Contenu du logo à afficher dans la fenêtre Mobile.

- `popupMenu (optionnel)` : Définir un balisage personnalisé pour le déclenchement du menu contextuel. Le déclencheur est affiché dans la vue mobile uniquement.

```edge
@component('docs::header', contentConfig)
  @slots('popMenu')
    <span> Open popup menu </span>
  @end
@end
```

- `themeSwitcher (optionnel) ` : Définir un marquage personnalisé pour le bouton de changement de thème.
```edge
@component('docs::header', contentConfig)
  @slots('themeSwitcher')
    <span x-if="store.darkMode.enabled"> Dark </span>
    <span x-if="!store.darkMode.enabled"> Light </span>
  @end
@end
```

- `github (optionnel)` : Définir un marquage personnalisé pour le lien github dans l'en-tête.
```edge
@component('docs::header', contentConfig)
  @slots('github')
    <span> Github (11K+ Stars) </span>
  @end
@end
```

## Déploiement
La docs boilerplate vous permet de créer une version statique et de la déployer sur n'importe quel CDN, y compris Netlify, Cloudflare pages et ainsi de suite.

Vous pouvez créer une version statique en utilisant la commande `npm run export`. La commande exécute les actions suivantes.

- Créer une version de production pour les actifs utilisant Vite.
- Convertir les collections en pages HTML.
- Copier le tout dans le répertoire `dist`.

Une fois la compilation créée, vous pouvez déployer le répertoire `dist` car il contient tout ce qu'il faut pour servir le site web.

### Variables d'environnement

Lors de la création du build, vous devez définir la variable d'environnement `APP_URL` afin de générer des liens corrects pour les balises méta `og:url` et `twitter:url`. La variable env doit pointer vers l'URL de production de votre site web.

### Composants utilisables
Les composants autre que ceux liés aux spécifications de markdown sont géré [@dimerapp/content](https://github.com/dimerapp/content?tab=readme-ov-file#customize-markdown-rendering).

#### Liens
Lien externe
```
[Texte du lien](https://www.lien.com)
```

Lien à une autre page de la documentation
```
[Texte du lien](/chemin/vers/la/page.md)
```


#### Codeblock
La coloration syntaxique est gérée à [Shiki](https://github.com/dimerapp/shiki).
````
```language

```
````

#### Définir un titre au block
````
```langage
// title: Routes file
```
````

#### Surligner certaines lignes de code.
````
```langage
// highlight-start
This line is highlighted
// highlight-end
```
````

#### Vous pouvez également ajouter une notion de différence comme sur Github
````
```langage
// delete-start
var foo = 'bar'
// delete-end
// insert-start
const foo = 'bar'
// insert-end
```
````

#### Codegroup
````
:::codegroup
```sh
echo "Hello, World!"
```

```sh
echo "Hello, World!"
```
:::
````

#### Callout
````
:::{note, tip, warning}
The official starter kits use ES modules and TypeScript. This combination allows you to use modern JavaScript constructs and leverage static-type safety.
:::
````

#### Vidéo youtube
````
::youtube{url="https://www.youtube.com/watch?v=Hm14pyibQhQ"}
````

#### Vidéo locale
````
::video{url="/chemin/vers/la/video.mp4"}
````
