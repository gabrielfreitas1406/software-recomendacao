FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
COPY ./prisma ./prisma

RUN npx prisma generate

EXPOSE 4000 

CMD ["npm", "run", "dev"]