FROM node:alpine

WORKDIR /usr/app
COPY . /usr/app

RUN yarn install

CMD node index.js


