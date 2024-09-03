FROM node:18-alpine

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY src ./src

EXPOSE $PORT

CMD ["node", "src/index.js"]
