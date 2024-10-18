# WebRTC and SFU

**TODO : translate in english. Use the "Glossary, What? Why? How?" model to structure the content. Create a summary. Make a lexicon. Vérifier que les conventions markdown sont respectées (plugin vscode)** Voir si Gleam vaut le coup pour de l'Elixir typé.

## 1. Résumé de la feature

Cette solution sera basée sur la technologie **WebRTC** pour gérer la transmission en temps réel de flux audio et vidéo, avec une implémentation utilisant le framework **Membrane RTC Engine** en **Elixir**.

## 2. Objectifs du Sprint
- Intégrer le moteur *Membrane RTC** pour gérer les communications WebRTC.
- Permettre aux utilisateurs de créer ou rejoindre des salles de visio-conférence.
- Assurer une bonne gestion des flux audio/vidéo entrants et sortants.
- Fournir une interface utilisateur de base pour la visio-conférence (voir section maquettes).
- Tester la solution avec plusieurs utilisateurs simultanés.

## 3. Architecture technique

### 3.1. Technologies utilisées
- **Backend** : Elixir avec le framework **Membrane RTC Engine**
- **Protocoles** : Utilisation des standards WebRTC pour la gestion des flux audio/vidéo, STUN/TURN pour la gestion du NAT, et SRTP pour la sécurité des communications.

### 3.2. Architecture Backend (Membre RTC)

La structure de Membrane RTC est composée de pipelines qui gèrent les flux de données entre les différents participants d'une session. Les étapes clés du backend seront :
- Création d'une session de conférence (Room).
- Gestion des connexions peer-to-peer via WebRTC (SDP offer/answer).

### 3.3. Interaction Backend-Frontend

Les utilisateurs front-end échangeront avec le backend via des WebSockets (pour le signalement WebRTC, en échangeant les offres SDP/ICE candidates). Le flux réel (audio/vidéo) sera géré par le WebRTC nativement dans le navigateur, avec la partie serveur (Membrane) orchestrant les connexions et la synchronisation entre les utilisateurs.

### Fonctionnalité Utilisateur
- **Option d'activation** : L'utilisateur voit un bouton "Partager mon écran" dans l'interface de visio-conférence.
- **Sélection de la source** : Lorsque l'utilisateur clique sur ce bouton, il peut choisir de partager soit un écran complet, soit une fenêtre d'application spécifique.
- **Interruption du partage** : L'utilisateur peut interrompre le partage d'écran à tout moment, ce qui rétablit automatiquement son flux vidéo de caméra.
- **Affichage pour les autres utilisateurs** : Pendant que l'écran est partagé, les autres participants voient le flux vidéo de l'écran partagé à la place du flux vidéo de la caméra du présentateur.

### Scénarios de Séquence
Le partage d’écran suit une séquence d’étapes dans une session de visio-conférence :
1. L'utilisateur clique sur "Partager mon écran".
2. Le navigateur déclenche une fenêtre de sélection (écran complet ou fenêtre).
3. Une fois sélectionné, le flux d’écran est capturé par **getDisplayMedia()**.
4. Le flux est envoyé au serveur via WebRTC.
5. Les autres participants reçoivent et affichent le flux partagé à la place du flux vidéo de la caméra.
6. Lorsque l'utilisateur arrête le partage, son flux vidéo de caméra est rétabli.
