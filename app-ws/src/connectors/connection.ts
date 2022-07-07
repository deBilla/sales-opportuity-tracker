import { Sequelize } from "sequelize-typescript";
import { Customer } from "../models/Customer";
import { SalesOpportunity } from "../models/SalesOpportunity";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "billa",
    password: "billa123",
    database: "crm",
    logging: false,
    models: [Customer, SalesOpportunity]
});

export default connection;