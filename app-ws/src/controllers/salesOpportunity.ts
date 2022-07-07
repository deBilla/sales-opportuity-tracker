import { SalesOpportunity } from '../models/SalesOpportunity';

export default class SalesOpportunityController {
    createSalesOpportunity = async (reqObj: SalesOpportunity): Promise<SalesOpportunity> => {
        const salesOpportunity: SalesOpportunity = await SalesOpportunity.create({ ...reqObj });
        return salesOpportunity;
    }

    getAllSalesOpportunities = async (): Promise<SalesOpportunity[]> => {
        const allSalesOpportunities: SalesOpportunity[] = await SalesOpportunity.findAll();
        return allSalesOpportunities;
    }

    updateSalesOpportunity = async (reqObj: SalesOpportunity, id: number): Promise<SalesOpportunity | null> => {
        await SalesOpportunity.update({ ...reqObj }, { where: { id } });
        const updatedSalesOpportunity: SalesOpportunity | null = await SalesOpportunity.findByPk(id);
        return updatedSalesOpportunity;
    }

    deleteSalesOpportunity = async (id: number): Promise<SalesOpportunity | null> => {
        const deletedSalesOpportunity: SalesOpportunity | null = await SalesOpportunity.findByPk(id);
        await SalesOpportunity.destroy({ where: { id } });
        return deletedSalesOpportunity;
    }
}