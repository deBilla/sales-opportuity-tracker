import express, { Express, Request, Response } from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import connection from "./connectors/connection";
import customer from "./routes/customer"
import salesOpportunity from "./routes/salesOpportunity"
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({credentials: true, origin: 'http://localhost:3001'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req: Request, res: Response): Response => {
//     return res.json({ message: "Test" });
// });

app.use('/', customer);
app.use('/', salesOpportunity);

const start = async (): Promise<void> => {
    try {
        await connection.sync();
        app.listen(3000, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();