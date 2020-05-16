FROM node:12.16.2-alpine AS builder

WORKDIR /work
COPY . .
RUN yarn install
RUN yarn build

FROM node:12.16.2-alpine

WORKDIR /work
COPY --from=builder /work/build ./build
COPY proto ./proto
COPY package.json yarn.lock ./
RUN yarn install --production

EXPOSE 50051
CMD ["node", "build/app/index.js"]