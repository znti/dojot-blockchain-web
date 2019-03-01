FROM node:9.11.2-alpine AS basis

RUN mkdir /data
WORKDIR /data

COPY . .
RUN yarn install && npm rebuild node-sass && yarn run build

FROM nginx:1.15.7-alpine

COPY --from=basis /data/build /usr/share/nginx/html

EXPOSE 80
