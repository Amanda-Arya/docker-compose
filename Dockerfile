FROM node:18-slim

WORKDIR /usr/src/app

COPY src/package*.json ./

RUN npm install

COPY src/* .

EXPOSE 4000

CMD ["npm", "start"]