FROM node:16-alpine

COPY . /app

WORKDIR /app/api

RUN npm install && npm run build-prod

EXPOSE 8080

CMD npm run prod