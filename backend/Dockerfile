
FROM node:22-alpine AS dependencies

WORKDIR /app

COPY backend/package.json .

RUN npm install --omit=dev

FROM node:22-alpine AS production

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY backend/server.js .

EXPOSE 3000

CMD ["node", "server.js"]
