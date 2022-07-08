import express, { Request, Response } from 'express';
import { SalesOpportunity } from '../models/SalesOpportunity';
import SalesOpportunityController from '../controllers/salesOpportunityController';

const salesOpportunityRouter = express.Router();
const salesOpportunityController = new SalesOpportunityController();

salesOpportunityRouter.post("/salesOpportunity", async (req: Request, res: Response): Promise<Response> => {
    const salesOpportunityObj: SalesOpportunity = req.body;
    const customer = await salesOpportunityController.createSalesOpportunity(salesOpportunityObj)
        .catch(err => console.error(err));
    return res.status(201).json(customer);
});

salesOpportunityRouter.get("/salesOpportunities", async (req: Request, res: Response): Promise<Response> => {
    const allSalesOpportunities = await salesOpportunityController.getAllSalesOpportunities()
        .catch(err => console.error(err));
    return res.status(200).json(allSalesOpportunities);
});

salesOpportunityRouter.put("/salesOpportunity/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const salesOpportunityObj: SalesOpportunity = req.body;
    const updatedSalesOpportunity = await salesOpportunityController.updateSalesOpportunity(salesOpportunityObj, Number(id))
        .catch(err => console.error(err));
    return res.status(200).json(updatedSalesOpportunity);
});

salesOpportunityRouter.patch("/salesOpportunity/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    console.log(req.body)
    const status: string = req.body.data;
    const updatedCustomer = await salesOpportunityController.updateStatus(status, id)
        .catch(err => console.error(err));
    return res.status(200).json(updatedCustomer);
});

salesOpportunityRouter.delete("/salesOpportunity/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedSalesOpportunity = await salesOpportunityController.deleteSalesOpportunity(Number(id))
        .catch(err => console.error(err));
    return res.status(200).json(deletedSalesOpportunity);
});

export default salesOpportunityRouter;