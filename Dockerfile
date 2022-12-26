FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV SERVER_PORT=3009

EXPOSE 3009

CMD ["npm", "start"]