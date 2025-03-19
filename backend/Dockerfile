FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache openssl

COPY package.json .

RUN npm install

COPY . .
COPY ./prisma ./prisma

RUN npx prisma generate

RUN npx prisma db seed

#RUN npm run seed

EXPOSE 4000 

CMD ["npm", "run", "dev"]