FROM node:16-alpine

WORKDIR /app/hepsiburada

RUN npm install && npm run build -n

EXPOSE 3040

RUN npm install -g serve

CMD serve -p 3040 -s build