# Différence entre les dossiers feature et dossiers ui

Auteur: Dorian Grasset
Tag: front

Dans le cadre du projet Beep, les dossiers `ui` et `feature` sont organisés de manière à séparer deux aspects importants de ton application : le ***design*** et la ***logique métier***.

**Dossier** `ui` **:**
Ce dossier est dédié à la conception visuelle l’application. Il contient tous les fichiers et les composants nécessaires pour créer une interface utilisateur conviviale et attrayante. Cela inclut les balises *HTML*, les différentes classes *TailwindCSS.* En bref, tout ce qui a trait à la présentation et à l'interaction de l'application se trouve ici.

**Dossier** `feature` **:**
Ce dossier, quant à lui, est destiné à la logique métier de chaque composant présent dans le dossier `ui`. Cela signifie qu'il contient les fichiers et les modules qui gèrent les fonctionnalités spécifiques de chaque partie de ton application. Par exemple, si tu as un composant *“display-server”* qui permet la mise en page d’une icône de serveur, tu auras un fichier nommé *“display-server-feature.tsx”* qui seraient dans ce dossier. C'est là que tu vas implémenter la logique métier, les traitements de données et toutes les opérations nécessaires pour que ton application fonctionne comme prévu, en se concentrant sur les aspects fonctionnels plutôt que sur l'aspect visuel.