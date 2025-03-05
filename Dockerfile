FROM node:18-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm install

FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app /app

EXPOSE 3000

CMD ["npm", "start"]
