# Architecture du code

Auteur: HugoP 
Tag: front

Cette documentation reprend l'architecture du code de ce projet.

Il est fortement conseillé de lire cette documentation tout en naviguant dans les fichiers du projet, par exemple **ouvrez le repository avec VSCode (ou neovim)** et naviguez au gré des références aux différents fichiers dans la doc. Le but est de s'acclimater à ce qui ressemble à première vue à une jungle, mais qui sera dans un second temps une arme redoutable pour travailler tous ensemble.

## Architecture du code

Cette architecture se veut modulaire et permet de regrouper sur un seul repository un ensemble de composant pour les différents groupes.

Les deux fichiers principaux qui constituent ce projet sont `/apps` et `/libs`

### /apps

Il est le point d'entrée dans l'application et contient `/client` . Ce dossier regroupe le router principal (`router.main.tsx`, mais nous en reparlerons plus tard). Il contient aussi les fameux fichiers indispensables pour tout repository React, j'ai nommé: `app.tsx` et `main.tsx`.

<aside>
💡 Pour ceux ne sachant pas ce qu’est un router vous pouvez aller voir cette [documentation](https://reactrouter.com/en/main)

</aside>

### /libs

Ce dossier sera votre espace d'expression pour ajouter les features relatives à votre groupe. C'est aussi l'endroit où est regroupée la majeure partie du code que vous pourrez modifier si nécessaire.
Répartitions dans les différents fichiers :

- `/domains` regroupe les calls API, mais gère les états des données de l'application (sur les ressources users et channels pour l'instant). Cette librairie est implémentée avec [Redux et RTK query](https://redux.js.org/usage/).
- `/pages` regroupe les pages de notre application et aussi tout composant qui serait propre à cette page. Cette base de code propose le nécessaire pour implémenter un channel textuel ;). Cerise sur le marier, vous n'aurez pas à réimplémenter toute la logique d'authentification. Elle est déjà regroupée dans la lib auth.
- `/shared` est une grande corbeille qui a pour but de partager dans l'application toute sorte de composante, qu'elle soit logique ou graphique. Les lib dans ce dossier ne sont propres à aucune feature en particulier et se veulent généralistes.
- `/state` est notre point d'entrer pour utiliser Redux et RTK query.