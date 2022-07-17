FROM node:18.4.0-alpine

WORKDIR /usr/src/app

ENV PORT 8080
ENV DIALECT mysql
ENV HOST localhost
ENV USER_NAME billa
ENV PASSWORD billa123
ENV DATABASE crm 
ENV LOGGIN false 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]