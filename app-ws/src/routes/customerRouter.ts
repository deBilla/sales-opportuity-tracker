import express, { Request, Response } from 'express';
import { Customer } from '../models/Customer';
import CustomerController from '../controllers/customerController';

const customerRouter = express.Router();
const customerController = new CustomerController();

customerRouter.post("/customer", async (req: Request, res: Response): Promise<Response> => {
    const cutomerReqObj: Customer = req.body;
    console.log(req.body)
    const customer = await customerController.createCustomer(cutomerReqObj)
        .catch(err => console.error(err));
    return res.status(201).json(customer);
});

customerRouter.get("/customers", async (req: Request, res: Response): Promise<Response> => {
    const allCustomers = await customerController.getAllCustomers()
        .catch(err => console.error(err));
    return res.status(200).json(allCustomers);
});

customerRouter.put("/customer/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { uuid } = req.params;
    const cutomerReqObj: Customer = req.body;
    const updatedCustomer = await customerController.updateCustomer(cutomerReqObj, uuid)
        .catch(err => console.error(err));
    return res.status(200).json(updatedCustomer);
});

customerRouter.patch("/customer/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { uuid } = req.params;
    console.log(req.body)
    const status: string = req.body.data;
    const updatedCustomer = await customerController.updateCustomerStatus(status, uuid)
        .catch(err => console.error(err));
    return res.status(200).json(updatedCustomer);
});

customerRouter.delete("/customer/:uuid", async (req: Request, res: Response): Promise<Response> => {
    const { uuid } = req.params;
    const deletedCustomer = await customerController.deleteCustomer(uuid)
        .catch(err => console.error(err));
    return res.status(200).json(deletedCustomer);
});

export default customerRouter;