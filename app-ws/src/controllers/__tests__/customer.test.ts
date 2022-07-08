import CustomerController from "../customerController";
import { Customer, Status } from "../../models/Customer";

const mockCustomer = {
  uuid: "test",
  firstName: "mock firstName",
  lastName: "mock lastName",
  phoneNumber: "mock phoneNumber",
  addressLine1: "mock addressLine1",
  addressLine2: "mock addressLine2",
  city: "mock city",
  postalCode: 123,
  country: "mock country",
  status: Status.ACTIVE,
  salesOppotunities: [],
};

jest.mock("uuid", () => ({ v4: jest.fn(() => "testuuid") }));
jest.mock("../../models/Customer", () => ({
  Customer: {
    findAll: jest.fn(() => [mockCustomer]),
    create: jest.fn((obj) => Promise.resolve(obj)),
    findOne: jest.fn(() => mockCustomer),
    findByPk: jest.fn(() => mockCustomer),
    update: jest.fn(),
    destroy: jest.fn(),
  },
  Status: {
    ACTIVE: "Active",
  },
}));

describe("Customer Controller Tests", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("Should return the created customer with the uuid for createCustomer function", async () => {
    const customerController = new CustomerController();
    const response = await customerController.createCustomer({} as Customer);
    expect(response).toEqual({ uuid: "testuuid" });
  });

  it("Should return the customer for getCustomer function", async () => {
    const customerController = new CustomerController();
    const response = await customerController.getCustomer("uuid");
    expect(response).toEqual(mockCustomer);
  });

  it("Should return the customer array for getAllCustomers function", async () => {
    const customerController = new CustomerController();
    const response = await customerController.getAllCustomers();
    expect(response).toEqual([mockCustomer]);
  });

  it("Should return the updated customer for updateCustomer function", async () => {
    const customerController = new CustomerController();
    const response = await customerController.updateCustomer(
      mockCustomer as any,
      "testuuid"
    );
    expect(response).toEqual(mockCustomer);
  });

  it("Should return the deleted customer for deleteCustomer function", async () => {
    const customerController = new CustomerController();
    const response = await customerController.deleteCustomer("testuuid");
    expect(response).toEqual(mockCustomer);
  });
});
