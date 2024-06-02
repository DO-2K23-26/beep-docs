# Créer une lib, easy

Auteur: HugoP
Tag: front, nx

Nx est parfois ingrat mais très utile. Voyons comment bien s'en servir.

Dans le cas ou vous voulez créer une nouvelle lib faite le dans le dossier `/libs` du projet pour ajouter les composants relatif à votre feature par exemple.

Ouvrez votre terminal préféré et placez vous à la racine du projet. Nous travaillerons dans  /libs donc:

```bash
cd /libs
```

Créons notre nouvelle librairie:

```bash
npx nx generate @nx/react:library pouette
```

Vous aurez besoin de [npx](https://www.npmjs.com/package/npx) s'il n'est pas déjà installé.

Choisissez `vite` dans le menu de proposition.

La libs `pouette` a été créée dans `/libs/pouette/src/lib` avec trois fichiers `pouette.spec.tsx`, `pouette.tsx` et`pouette.scss`. Ils ne sont pas utiles, vous pouvez les supprimer:

```bash
cd /pouette/src/lib
rm *
```

Créons un maintenant un composant react par exemple (toujours dans  `/libs/pouette/src/lib`):

```bash
vi pouette-component.tsx
```

Vous pouvez copier ce code à des fins de test :

```tsx
/* eslint-disable-next-line */
export interface PouetteComponentProps {}

export function PouetteComponent(props: PouetteComponentProps) {
return (
 <div>
  <h1>Welcome to Pouette!</h1>
 </div>
 )
}

export default PouetteComponent

```

Maintenant votre fichier créé il est nécessaire de le rendre disponible sur l'ensemble du projet pour l'import dans d'autre lib.
Rendez-vous dans le dossier parent sinon depuis la racine du projet:

```bash
cd libs/pouette/src/

```

Utilisez votre meilleur éditeur de texte pour que le fichier `index.ts` ressemble à ça:

```bash
export * from './lib/pouette-component'

```

A partir de maintenant votre composant est disponible dans toute l'application. De cette manière:

```tsx
import { PouetteComponent } from '@beep/pouette';

```

A noter que l’import suivant est aussi disponible:

```tsx
'@beep/pouette'
```

C'est un alias qui est indiqué dans le fichier `tsconfig.base.json` à la racine du projet. Par défaut ceci sera ajouter au fichier:

```json
"@front/pouette": ["libs/pouette/src/index.ts"]
```

Changez "front" par "beep" comme ceci:

```json
"@beep/pouette": ["libs/pouette/src/index.ts"]
```
