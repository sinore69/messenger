FROM node:18.17.1

WORKDIR  /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn","start"]

EXPOSE 3000