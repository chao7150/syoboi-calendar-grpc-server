FROM node:12.16.2-alpine

WORKDIR /work
COPY package.json yarn.lock ./
RUN yarn install --production

COPY build ./build
COPY proto ./proto

EXPOSE 50051
CMD ["node", "build/app/index.js"]