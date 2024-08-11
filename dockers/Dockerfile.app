FROM oven/bun:slim AS build
WORKDIR /dklb
COPY . .
RUN bun install
RUN bun run build:app

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf * && rm -f /etc/nginx/conf.d/default.conf
COPY ./dockers/nginx.conf /etc/nginx/conf.d
COPY --from=build /dklb/app/dist ./

EXPOSE 9000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
