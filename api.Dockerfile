FROM node:16-alpine

COPY . /app

WORKDIR /app/api

EXPOSE 8080

CMD npm run prod