import { Customer } from '../models/Customer';
import * as uuidClass from "uuid";
import { SalesOpportunity } from '../models/SalesOpportunity';

export default class CustomerController {
    createCustomer = async (reqObj: Customer): Promise<Customer> => {
        reqObj.uuid = uuidClass.v4();
        const customer: Customer = await Customer.create({ ...reqObj });
        return customer;
    }

    getCustomer = async (uuid: string): Promise<Customer | null> => {
        const customer: Customer | null = await Customer.findOne({ include: [SalesOpportunity], where: {uuid} });
        return customer;
    }

    getAllCustomers = async (): Promise<Customer[]> => {
        const allCustomers: Customer[] = await Customer.findAll({include: [SalesOpportunity]});
        return allCustomers;
    }

    updateCustomer = async (reqObj: Customer, uuid: string): Promise<Customer | null> => {
        await Customer.update({ ...reqObj }, { where: { uuid } });
        const updatedCustomer: Customer | null = await Customer.findByPk(uuid);
        return updatedCustomer;
    }

    updateCustomerStatus = async (status: string, uuid: string): Promise<Customer | null> => {
        await Customer.update({ status: status}, { where: { uuid } });
        const updatedCustomer: Customer | null = await Customer.findByPk(uuid);
        return updatedCustomer;
    }

    deleteCustomer = async (uuid: string): Promise<Customer | null> => {
        const deletedCustomer: Customer | null = await Customer.findByPk(uuid);
        await Customer.destroy({ where: { uuid } });
        return deletedCustomer;
    }
}
