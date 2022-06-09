FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

ENV DATABASE_URL="mysql://root:password@db:3306/dg_solutions_users"

EXPOSE 3001

ENTRYPOINT [ "npm", "start" ]
