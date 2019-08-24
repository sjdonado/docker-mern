FROM node:dubnium-alpine as builder

WORKDIR /usr/src/app

COPY ../client/package*.json ./

RUN npm install

COPY ../client .

CMD ["npm", "run", "build"]

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html