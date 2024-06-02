ARG BASE_IMAGE=node:22-alpine3.19
ARG NGINX_IMAGE=nginx:1.21-alpine 
FROM ${BASE_IMAGE} AS build
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install && pnpm run export && pnpm run postexport
FROM ${NGINX_IMAGE}
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]