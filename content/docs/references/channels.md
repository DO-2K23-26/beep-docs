# Channels

Les channels constituent une partie centrale de l'application `Beep`. Un channel est un espace de communication où les utilisateurs peuvent interagir via des messages texte, des appels vocaux et des partages de contenu en temps réel.

Ce document détaille la structure, les fonctionnalités et les interactions du modoule channels, couvrant les aspects suivants:

- __Model (SQL)__: Le schéma de données SQL utilisé pour stocker les informations des channels.
- __API Routes__: Les points d'accès API permettant la gestion et l'interaction avec les channels.
- __Services__: Les services gérant la logique métier des channels.
- __Events and Real-time Communication__: L'intégration avec WebRTC / SFU et du SSE pour la communcation en temps réel.
- __Security__: Les mécanismes de sécurité protégeant l'accès aux channels ainsi que de leurs créations.
- __Exemples and Use Cases__: Des exemples pratiques et des cas d'utilisation illustrant les fonctionalités des channels.
- __Troubleshooting__: Les solutions aux problèmes courants et une FAQ pour aider à résoudre les questions fréquentes

Grâce à cette documentation, les développeurs pourront comprendre en profondeur le fonctionnement des channels, et les intégrer efficacement.

## Modèle SQL
Le modèle de données SQL pour les channels de `Beep` est conçu pour capturer toutes les informations nécessaires sur chaque channel, y compris ses attributs principaux, ses relations avec d'autres entités et ses contraintes de données. Voici un aperçu du schéma du modèle `Channel`

```json
{
    "id": "f881a08f-f952-46e5-8a49-aae62445ad7b",
    "name": "DO3 CI/CD",
    "serverId": "91e37429-b0d3-4297-90b1-c1886903587c",
    "type": "voice" | "text",
    "users": User[],
    "messages": Message[],
    "server": Server,
    "createdAt": "2024-06-03T19:05:18+0000",
    "updatedAt": "2024-06-03T19:05:18+0000"
}
```

### Relations

Le modèle de données pour les channels inclut des relations importantes avec d'autres entités du système:

- __users__: Chaque channel est associé à un vecteur d'utilisateurs. Cette relation est représentée par la clef `users` pointant vers une liste de `User`.
- __server__: Chaque channel est lié à un server, c'est une contrainte qui stipule qu'aucun server ne peut être rattaché à aucun server.
- __messages__: Un channel peut contenir un vecteur de messages. Cett relation est représentée par la clef `messages` pointant vers une liste de `Message`.

Ces relatiojns permettent de structurer les données de manière cohérente et de garantir l'intégrité entre les différents enttiés du système.

Cette section offre une vue d’ensemble complète sur le modèle SQL des channels, permettant aux développeurs de comprendre comment les données des channels sont stockées, structurées et reliées aux autres entités du projet `Beep`.

## Services & Validations
Les services sont essentiels pour encapsuler la logique métier liée aux channels. Ils permettent de centraliser et de réutiliser le code, facilitant ainsi la maintenance
et l'évolution de l'application. Voici un aperçu des principaux services utilisés pour gérer les channels.

```ts
interface ChannelServiceContract {
    async findAll(data: IndexChannelSchema): Promise<Channel[]>
    async findAllForUser(userId: string): Promise<Channel[]>
    async findById(data: ShowChannelSchema): Promise<Channel>
    async findAllByServer(serverId: string): Promise<Channel[]>
    async create(newChannel: CreateChannelSchema, serverId: string): Promise<Channel>
    async join(userId: string, channelId: string): Promise<void>
    async leave(userId: string, channelData: SubscribeChannelSchema): Promise<void>
    async update(payload: UpdateChannelSchema): Promise<Channel>
    async deleteById(channelId): Promise<void>
}
```

### Validators
Les validateurs jouent un rôle crucial dans la validation des données entrantes avant leur traitement par les services. Ils s'assurent que les
données reçues respectent les contraintes et les formats attendus, réduisant ainsi les erreurs et améliorant la robustesse de l'application.

```ts
type CreateChannelSchema = {
    name: string,
    type: 'voice' | 'text'
}

type UpdateChannelSchema = {
    id: string,
    name?: string
}

type ShowChannelSchema = {
    messages?: boolean
    users?: boolean
    params: {
        id: string
    }
}

type SubscribeChannelSchema = {
    params: {
        id: string
    }
}

type IndexChannelSchema = {
    
}
```
