FROM node:18.4.0-alpine

WORKDIR /app-ws
ENV PORT 8080
ENV DB_PORT 3306
ENV DIALECT mysql
ENV HOST db
ENV USER_NAME billa
ENV PASSWORD billa123
ENV DATABASE crm
ENV LOGGIN false

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]