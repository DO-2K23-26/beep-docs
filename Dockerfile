ARG BASE_IMAGE=node:22-alpine3.19
FROM ${BASE_IMAGE}
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install
EXPOSE 3333
CMD ["node","--loader=ts-node/esm","bin/serve.ts"]