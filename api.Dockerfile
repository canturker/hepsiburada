FROM node:16-alpine

COPY . /app

WORKDIR /app/api

RUN npm install -g @babel/core @babel/cli

EXPOSE 8080

CMD npm run prod