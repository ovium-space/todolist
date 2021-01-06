FROM node:12-alpine as builder

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
# COPY yarn.lock ./
RUN npm i

COPY . ./

RUN npm run build

# production environment
FROM nginx:1.16-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]