"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const CreateBike = async (bikeData) => {
    // Step 1: Check if the customer exists
    const isCustomerExist = await prisma_1.default.customer.findUnique({
        where: {
            customerId: bikeData.customerId,
        },
    });
    if (!isCustomerExist) {
        throw new Error("Customer not found with the given customerId.");
    }
    // Step 2: Create the bike
    const result = await prisma_1.default.bike.create({
        data: bikeData,
    });
    return result;
};
const GetAllBike = async () => {
    const result = await prisma_1.default.bike.findMany();
    return result;
};
const GetBikeById = async (bikeId) => {
    const isExist = await prisma_1.default.bike.findUnique({
        where: {
            bikeId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Bike Not Found.");
    }
    const result = await prisma_1.default.bike.findUnique({
        where: {
            bikeId,
        },
    });
    return result;
};
exports.BikeServices = {
    CreateBike,
    GetAllBike,
    GetBikeById,
};
