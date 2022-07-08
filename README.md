# Getting Started with the project

This project is created by Dimuthu Wickramanayake. Here there are 2 folders in this repository with UI code and WS code. Before everything please install node JS in your local coumputer. Version used here is,

### `v18.4.0`

## UI

### `cd app-ui`

In the project directory, you can run:

### `npm install`

Create a `.env` file in this folder and put

`PORT=3001`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## Database setup - [MySQL]

Setup Mysql and then create a tabe name

### `crm`

Rest of the database opertaion automatically handled by Sequalize plugin.

## WS

### `cd app-ws`

Before running the application create a `.env` file and put these values relavant to your local environment

`PORT=3000`

`DIALECT=mysql`

`HOST=localhost`

`USER_NAME=billa`

`PASSWORD=billa123`

`DATABASE=crm `

`LOGGIN=false `

In the project directory, you can run:

### `npm install`

### `npm serve`
