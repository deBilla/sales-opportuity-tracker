import { Sequelize } from "sequelize-typescript";
import { Customer } from "../models/Customer";
import { SalesOpportunity } from "../models/SalesOpportunity";
import dotenv from 'dotenv';

dotenv.config();

const DatabaseObject:any = {
    dialect: process.env.DIALECT || "mysql",
    host: process.env.HOST || "localhost",
    username: process.env.USER_NAME || "billa",
    password: process.env.PASSWORD || "billa123",
    database: process.env.DATABASE || "crm",
    port: process.env.DB_PORT || 3306,
    logging: process.env.LOGGING || false
}

const connection = new Sequelize({
    dialect: DatabaseObject.dialect,
    host: DatabaseObject.host,
    username: DatabaseObject.username,
    password: DatabaseObject.password,
    database: DatabaseObject.database,
    logging: DatabaseObject.logging,
    port: DatabaseObject.port,
    models: [Customer, SalesOpportunity]
});

export default connection;