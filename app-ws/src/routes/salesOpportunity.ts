import express, { Request, Response } from 'express';
import { SalesOpportunity } from '../models/SalesOpportunity';
import SalesOpportunityController from '../controllers/salesOpportunity';

const router = express.Router();
const salesOpportunityController = new SalesOpportunityController();

router.post("/salesOpportunity", async (req: Request, res: Response): Promise<Response> => {
    const salesOpportunityObj: SalesOpportunity = req.body;
    const customer = await salesOpportunityController.createSalesOpportunity(salesOpportunityObj);
    return res.status(201).json(customer);
});

router.get("/salesOpportunities", async (req: Request, res: Response): Promise<Response> => {
    const allSalesOpportunities = await salesOpportunityController.getAllSalesOpportunities();
    return res.status(200).json(allSalesOpportunities);
});

router.put("/salesOpportunity/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const salesOpportunityObj: SalesOpportunity = req.body;
    const updatedSalesOpportunity = await salesOpportunityController.updateSalesOpportunity(salesOpportunityObj, Number(id));
    return res.status(200).json(updatedSalesOpportunity);
});

router.patch("/salesOpportunity/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    console.log(req.body)
    const status: string = req.body.data;
    const updatedCustomer = await salesOpportunityController.updateStatus(status, id);
    return res.status(200).json(updatedCustomer);
});

router.delete("/salesOpportunity/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedSalesOpportunity = await salesOpportunityController.deleteSalesOpportunity(Number(id));
    return res.status(200).json(deletedSalesOpportunity);
});

export default router;