FROM node:16-alpine

WORKDIR /app/hepsiburada

RUN cd /api

EXPOSE 8080

CMD npm run prod