# Différence entre un composant et un layout

Auteur: Dorian Grasset
Tag: front

Dans Beep, la différence entre un composant et un layout réside principalement dans leur fonction et leur utilisation :

1. **Composant :**
    - Un composant est une unité de construction modulaire qui représente une fonctionnalité ou un élément d'interface utilisateur spécifique.
    - Les composants sont conçus pour être minimalistes et hautement personnalisables. Ils se concentrent sur des fonctionnalités spécifiques et sont généralement réutilisables dans différentes parties de l'application.
    - Les composants sont souvent des éléments atomiques de l'interface utilisateur. Ils sont conçus pour être flexibles et réactifs, permettant aux développeurs de les adapter selon les besoins de chaque contexte d'utilisation.

    *Exemple : Les composants buttons, avatar, icons…*

2. **Layout :**
    - Un layout est un agencement ou une structure de base qui organise les composants et les contenus de manière cohérente à l'échelle de l'application ou d'une partie importante de celle-ci.
    - Contrairement aux composants, les layouts ne représentent généralement pas des éléments d'interface utilisateur individuels, mais plutôt des conteneurs ou des structures qui définissent la disposition globale de la page ou de la section.
    - Les layouts sont souvent utilisés pour créer une mise en page cohérente et une expérience utilisateur uniforme à travers différentes pages ou vues de l'application.

    *Exemple : Les composants current-user, servers-navigation, members-navigation, channels-navigation…*
