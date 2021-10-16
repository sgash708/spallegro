FROM node:lts-alpine

WORKDIR /app

COPY ../../frontend ./

RUN apk update \
    && npm install \
    && npm install -g npm \
    && npm install -g @vue/cli \
    && apk add git

CMD [ "npm", "run", "serve" ]