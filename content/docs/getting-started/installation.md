# Installation

## Prerequisites

Before starting the installation, make sure you have node.js with at least node 20. We recommend installing [nvm](https://github.com/nvm-sh/nvm) to manage your node version.

```sh
// title: Verify your node version and change it if necessary
node -v
# v21.7.3
nvm install 21
# Now using node v21.7.3
node -v
# v21.7.3
```

Next you will need **pnpnm**.

```bash
npm install -g pnpm
```

And finally, you will have to install **docker**.
Please refer to the official [docker doc](https://docs.docker.com/engine/install/).

## Setting up the API

1. Install the dependencies

```bash
pnpm install
```

2. Run the stack

```bash
docker compose up -d
```

3. Provide the environment variables

```bash
cp .env.example .env
```

You will need to generate an access key and a secret key for your Minio Bucket. To do so, you can run the following command:

```bash
mc alias set minio http://localhost:9000 minio minio123
```

And fill in the environment variables in the `.env` file.

```toml
TZ=UTC+01:00

PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY="<to-generate>"
NODE_ENV=development
SESSION_DRIVER=cookie

DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=backend

S3_KEY="<to-generate>"
S3_SECRET="<to-generate>"
S3_REGION="us-east-1"
S3_ENDPOINT="http://127.0.0.1:9000/"
S3_BUCKET_NAME="app"

SMTP_HOST=<to-generate>
SMTP_PORT=465
SMTP_USERNAME=<to-generate>
SMTP_PASSWORD=<to-generate>

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=password

FRONTEND_URL=http://localhost:4200
```

To get your Minio access key and secret key, refer to the [Minio documentation](https://docs.min.io/docs/minio-quickstart-guide.html).
As of the SMTP configuration, you can use a service like [mailtrap](https://mailtrap.io/) or Gmail.

4. Run the database migrations

```bash
node ace migration:run
```

5. Finally run the API

```bash
pnpm run dev
```
