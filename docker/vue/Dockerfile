FROM node:lts-alpine

WORKDIR /app

RUN apk update \
    && npm install \
    && npm install -g npm \
    && npm install -g vue-cli

CMD [ "npm", "run", "dev" ]