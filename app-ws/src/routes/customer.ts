import express, { Request, Response } from 'express';
import { Customer } from '../models/Customer';
import CustomerController from '../controllers/customer';

const router = express.Router();
const customerController = new CustomerController();

router.post("/customer", async (req: Request, res: Response): Promise<Response> => {
    const cutomerReqObj: Customer = req.body;
    console.log(req.body)
    const customer = await customerController.createCustomer(cutomerReqObj);
    return res.status(201).json(customer);
});

router.get("/customers", async (req: Request, res: Response): Promise<Response> => {
    const allCustomers = await customerController.getAllCustomers();
    return res.status(200).json(allCustomers);
});

router.put("/customer/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { uuid } = req.params;
    const cutomerReqObj: Customer = req.body;
    const updatedCustomer = await customerController.updateCustomer(cutomerReqObj, uuid);
    return res.status(200).json(updatedCustomer);
});

router.patch("/customer/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { uuid } = req.params;
    console.log(req.body)
    const status: string = req.body.data;
    const updatedCustomer = await customerController.updateCustomerStatus(status, uuid);
    return res.status(200).json(updatedCustomer);
});

router.delete("/customer/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { uuid } = req.params;
    const deletedCustomer = await customerController.deleteCustomer(uuid);
    return res.status(200).json(deletedCustomer);
});

export default router;