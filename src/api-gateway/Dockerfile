FROM node:18 AS development

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

# COPY --from=development /usr/src/app/dist ./dist

RUN npm run build

CMD ["node", "dist/main"]