import SalesOpportunityController from "../salesOpportunityController";
import { SalesOpportunity } from "../../models/SalesOpportunity";

enum Status {
  NEW = "NEW",
  CLOSEDWON = "CLOSEDWON",
  CLOSEDLOST = "CLOSEDLOST"
}

const mockSalesOpportunity = {
  id: 1,
  name: "mock name",
  status: Status.NEW
};

jest.mock("../../models/SalesOpportunity", () => ({
  SalesOpportunity: {
    findAll: jest.fn(() => [mockSalesOpportunity]),
    create: jest.fn((obj) => Promise.resolve(obj)),
    findOne: jest.fn(() => mockSalesOpportunity),
    findByPk: jest.fn(() => mockSalesOpportunity),
    update: jest.fn(),
    destroy: jest.fn(),
  }
}));

describe("Sales Opportunity Controller Tests", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("Should return the created SalesOpportunity with the uuid for createSalesOpportunity function", async () => {
    const salesOpportunityController = new SalesOpportunityController();
    const response = await salesOpportunityController.createSalesOpportunity(mockSalesOpportunity as SalesOpportunity);
    expect(response).toEqual(mockSalesOpportunity);
  });

  it("Should return the SalesOpportunity array for getAllSalesOpportunitys function", async () => {
    const salesOpportunityController = new SalesOpportunityController();
    const response = await salesOpportunityController.getAllSalesOpportunities();
    expect(response).toEqual([mockSalesOpportunity]);
  });

  it("Should return the updated SalesOpportunity for updateSalesOpportunity function", async () => {
    const salesOpportunityController = new SalesOpportunityController();
    const response = await salesOpportunityController.updateSalesOpportunity(
      mockSalesOpportunity as any,
      1
    );
    expect(response).toEqual(mockSalesOpportunity);
  });

  it("Should return the deleted SalesOpportunity for deleteSalesOpportunity function", async () => {
    const salesOpportunityController = new SalesOpportunityController();
    const response = await salesOpportunityController.deleteSalesOpportunity(1);
    expect(response).toEqual(mockSalesOpportunity);
  });
});
