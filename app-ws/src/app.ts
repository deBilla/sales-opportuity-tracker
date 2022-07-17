import express, { Express } from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import connection from "./connectors/connection";
import customer from "./routes/customerRouter"
import salesOpportunity from "./routes/salesOpportunityRouter"
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/customer', customer);
app.use('/salesOpportunity', salesOpportunity);

const start = async (): Promise<void> => {
    try {
        await connection.sync();
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();