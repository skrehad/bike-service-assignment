"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesRecord = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const CreateBikeService = async (serviceData) => {
    const isBikeExist = await prisma_1.default.bike.findUnique({
        where: {
            bikeId: serviceData.bikeId,
        },
    });
    if (!isBikeExist) {
        throw new Error("Bike not found with the given bikeId.");
    }
    const result = await prisma_1.default.serviceRecord.create({
        data: serviceData,
    });
    return result;
};
const GetAllServiceRecord = async () => {
    const result = await prisma_1.default.serviceRecord.findMany();
    return result;
};
const GetServiceRecordById = async (serviceId) => {
    const isExist = await prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Service Record Not Found.");
    }
    const result = await prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    return result;
};
const UpdateServiceRecordById = async (serviceId, serviceData) => {
    const isExist = await prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Service Not Found.");
    }
    const result = await prisma_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: {
            ...serviceData,
            status: client_1.ServiceStatus.done,
        },
    });
    return result;
};
const fetchOverdueOrPendingServices = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = await prisma_1.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: [client_1.ServiceStatus.pending, client_1.ServiceStatus.in_progress],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
};
exports.ServicesRecord = {
    CreateBikeService,
    GetAllServiceRecord,
    GetServiceRecordById,
    UpdateServiceRecordById,
    fetchOverdueOrPendingServices,
};
