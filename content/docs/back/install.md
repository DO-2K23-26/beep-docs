# Prérequis et premier lancement (back/minio)1

Auteur: Sarah Theoulle
Tag: back

Pour lancer le back vous devez impérativement avoir installé NodeJS avec une version supérieure à la version 20.6

[https://docs.adonisjs.com/guides/getting-started/installation](https://docs.adonisjs.com/guides/getting-started/installation)

Vous devez avoir pnpm installé ainsi que docker

## Lorsque vous lancez pour la première fois le back en mode développement

### Configuration du minio

Après avoir cloné le repository placez vous dans `/api`

Commencer par monter votre conteneur minio

```bash
docker compose up -d minio
```

Rendez vous à l’adresse [http://127.0.0.1:9000/](http://127.0.0.1:9000/) et connectez-vous au minio avec les identifiants suivants :

```bash
login : minio
password : password
```

Dans la barre de navigation sur la gauche allez dans Access Key. Créer une nouvelle clé en mettant bien de côté les informations obtenues ! Vous ne pourrez plus les retrouver par la suite. Ces informations iront dans le .env

Cliquer ensuite dans le menu de navigation sur Buckets.

Créer un nouveau bucket dont le nom sera `app`.

Voilà votre minio est fonctionnel !

### Lancement du back

Créer un .env sous `/api`

Voilà le .env que vous devrez avoir. Remplacez les valeurs de S3_KEY et S3_SECRET par les valeurs que vous avez générées à l’étape précédente

```bash
TZ=UTC+01:00

PORT=3333
HOST=localhost

LOG_LEVEL=info
APP_KEY=G9e1d_eQQQpnbiEAeBa7uqYXwRgtecNL
NODE_ENV=development
SESSION_DRIVER=cookie
FRONTEND_URL=http://localhost:4200

DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=backend

S3_KEY=<access_key>
S3_SECRET=<secret_key>
S3_REGION="us-east-1"
S3_ENDPOINT="http://127.0.0.1:9000/"
S3_BUCKET_NAME="app"

SMTP_HOST=mail.baptistebronsin.be
SMTP_PORT=465
SMTP_USERNAME=contact@beep.baptistebronsin.be
SMTP_PASSWORD=XwBzm3WCExobwF7A4GaCi9YVYcsAEeVe2LpkTiH5

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=password
```

Installer toutes les dépendances

```bash
pnpm install
```

Lancer les containers restants et créer la base de données

```bash
docker compose up -d 
node ace migration:run
```

Lancer les seeders (si existants)

Vous pouvez avoir une erreur à cette étape si vous avez déjà la base de données de créée en raison des clés à contrainte unique. Dans ce cas et si c’est la seule erreur passez l’étape.

```bash
node ace db:seed
```

Lancer le back

```bash
pnpm run dev
```
