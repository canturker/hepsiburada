FROM node:16-alpine

COPY . /app

WORKDIR /app/client

RUN npm install && npm run build-prod -n

EXPOSE 5000

RUN npm install -g serve

CMD serve -p 5000 -s build