"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const CreateCustomer = async (customerData) => {
    //   console.log(customerData);
    const isExist = await prisma_1.default.customer.findFirst({
        where: {
            email: customerData.email,
        },
    });
    //   console.log(isExist);
    if (isExist) {
        throw new Error("Customer Already Exist..");
    }
    const result = await prisma_1.default.customer.create({
        data: customerData,
    });
    return result;
};
const GetAllCustomer = async () => {
    const result = await prisma_1.default.customer.findMany();
    return result;
};
const GetCustomerById = async (customerId) => {
    const isExist = await prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = await prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
};
const UpdateCustomerById = async (customerId, customerData) => {
    // console.log(customerId);
    // console.log(customerData);
    const isExist = await prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = await prisma_1.default.customer.update({
        where: {
            customerId,
        },
        data: customerData,
    });
    return result;
};
const DeleteCustomerById = async (customerId) => {
    // console.log(customerId);
    // console.log(customerData);
    const isExist = await prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = await prisma_1.default.customer.delete({
        where: {
            customerId,
        },
    });
    return result;
};
exports.CustomerServices = {
    CreateCustomer,
    GetAllCustomer,
    GetCustomerById,
    UpdateCustomerById,
    DeleteCustomerById,
};
