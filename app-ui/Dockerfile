FROM node:18.4.0-alpine as builder

WORKDIR /app-ui

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app-ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]    