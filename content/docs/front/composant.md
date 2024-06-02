# Utiliser un composant

Auteur: Dorian Grasset
Tag: front

Pour utiliser un composant, c’est très simple. Dans cet exemple, je vais essayer d’utiliser le composant `Button` dans un tout nouveau fichier qu’on nommera `Test.tsx`.

Commencez d’abord par importer le composant que vous souhaitez utiliser :

```tsx
// Test.tsx

import { Button } from '@beep/ui'
```

💡 **D’où sort `@beep/ui` ?** C’est tout simplement un chemin personnalisé définis dans le fichier `tsconfig.base.json`. Il en existe plein d’autres et ils permettent de créer des raccourcis ou des alias pour référencer des répertoires ou des modules spécifiques dans ton projet.

Par la suite, instanciez votre composant et ajoutez votre `Button`:

```tsx
export default function Test() {
  return (
    <div>
      <Button>Test</Button>
    </div>
  )
}
```

Les composants peuvent posséder plusieurs propriétés, faites un `CTRL+Click` sur le composant, vous serez normalement redirigé vers la définition de celui-ci. Le plus important a regarder sont les `enums` et l’`interface` du composant :

```tsx
export enum ButtonSize {
  XLARGE = 'xlarge',
  LARGE = 'large',
  REGULAR = 'regular',
  SMALL = 'small',
  TINY = 'tiny',
}

export enum ButtonStyle {
  NONE = 'none',
  BASIC = 'basic',
  RAISED = 'raised',
  STROKED = 'stroked',
  FLAT = 'flat',
  TAB = 'tab',
  ERROR = 'error',
  CONFIRM = 'confirm',
  DARK = 'dark',
  SQUARE = 'square',
}

export interface ButtonProps {
  children: ReactNode
  size?: ButtonSize
  style?: ButtonStyle
  iconLeft?: string
  iconLeftClassName?: string
  iconRight?: string
  iconRightClassName?: string
  link?: string
  disabled?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  external?: boolean
  loading?: boolean
  dataTestId?: string
}
```

On remarque ici que premièrement, on peut préciser une `size` (optionnelle) à notre `Button`, mais aussi un `style` (optionnel aussi) !

Vous pouvez aller voir toutes ces variantes du composant directement sur le [`Storybook`](Storybook%209e45d8301e4247fba718115c5c0bc8f5.md) et si vous êtes courageux, regarder directement la feuille de style utilisé pour ce composant dans le fichier `button.scss`.

Une fois que vous avez fait votre choix, rien de plus simple ! Passez vos choix en propriétés du composant :

```tsx
import { Button, ButtonSize, ButtonStyle } from '@beep/ui'

export default function Test() {
  return (
    <div>
      <Button style={ButtonStyle.CONFIRM} size={ButtonSize.REGULAR}>Test</Button>
    </div>
  )
}
```

⚠️ N’oubliez pas d’importer les énumérations du composant qui vous seront utiles.

Bien joué ! Vous avez instancié votre composant ! 🎊
