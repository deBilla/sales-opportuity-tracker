# SPIDERTRACKS TEST - Customer Detail Application

This application is created for a test provided by `Spidertracks`. Our requirement is to provide an application that allows a company to see their customer information. Customers have the following information associated with them:

* Unique identifier.
* Status: "Active", "Non-Active", “Lead”
* Creation date and time.
* General information like name and contact details of the customer.

The company wants to record sales opportunities for each customer. A customer can have any number of sales opportunities associated with them. The following attributes should be saved for the opportunity:
* Status: “New”, “Closed Won”, “Closed Lost”
* Name of the opportunity

The user should be able to:
* Filter and sort the list of customers.
* Click on a customer in the list to view their details and add/edit opportunities for that
customer.
* Change the status of the customer.

# Provided Solution

Here I have created a full-stack application with a user interface and a data store. This is a `3-tier architecture` application and following arethe technologies used for each component.

* User Interface - `ReactJS Application`
* Back-end Service - `Node JS Express JS Application and Sequalize as the ORM`
* Database - `Mysql`

Since the application is to store and manage relational data related to Customers, I have used the `Mysql` database. Basic controller level and component level unit tests are provided for each of the applications.

# Local environment setup

Here there are 2 folders in this repository with UI code and WS code. Before everything please clone the project and install node JS in your local coumputer. Version used here is,

### `v18.4.0`

I recommend using `nvm` to insall the `NodeJS` so you ca have multiple versions in your local environment. Now let's get the project from git using the fllowing command.

```
git clone git@github.com:deBilla/spidertracks-test.git
```

## Front End Application Setup

Navigate to the application folder.

```
cd app-ui
```

In the project directory, you can run:

```
npm install
```

Create a `.env` file in this folder and put

```
PORT=3001
```

Now run the application

```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## Database setup - [MySQL]

You can setup the MySQL database in 2 different ways. One is to install it in the local environment and run. Other way is to run it in a docker container.

## Local Environment MySQL setup

Setup Mysql `version 8` and then create a database named `crm` using the following command inside mysql

```
CREATE DATABASE crm
```

Rest of the database opertaion automatically handled by Sequalize plugin.

## Docker MySQL setup

Here I have a Dockerfile created with necessary enviornment variables needed for the application to run. You have to navigate to the database folder from the root directory,

```
cd database
```

Now build and run the `MySQL docker container`

To build use the following command

```
docker build -t mysql-crm .
```

To run the docker container use

```
docker run mysql-crm
```
Here database creation is handled by the Docker environment varibales.

## Back end application Setup

Navigate to the application folder.

```
cd app-ws
```

Before running the application create a `.env` file and put these values relavant to your local environment

```
PORT=3000

DIALECT=mysql

HOST=localhost

USER_NAME=billa

PASSWORD=billa123

DATABASE=crm 

LOGGIN=false 
```

In the project directory, you can run install to install dependencies

```
npm install
```

Now run the following command to up your backend server

```
npm serve
```

# Docker compose setup

This project can be run on docker containers. For this in the root folder I have defined the docker-composer.yml file. Front end application, Back end application and Databse have seperate Dockerfile configurations and these will be invoked by the docker composer. To run this on a docker containarized setup in your environment you have to have following dependencies.

### `docker`

### `docker-compose`

If these dependencies are installed in your environment. You have to clone this repo.

```
git clone git@github.com:deBilla/spidertracks-test.git
```

Then go to the spidertracks-test folder and run the following line

```
sudo docker-compose up
```