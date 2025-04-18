"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const services_service_1 = require("./services.service");
const CreateServices = (0, catchAsync_1.default)(async (req, res) => {
    const result = await services_service_1.ServicesRecord.CreateBikeService(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Services created successfully",
        data: result,
    });
});
const GetAllServices = (0, catchAsync_1.default)(async (req, res) => {
    const result = await services_service_1.ServicesRecord.GetAllServiceRecord();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Services fetched successfully",
        data: result,
    });
});
const GetServicesById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await services_service_1.ServicesRecord.GetServiceRecordById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Services fetched successfully",
        data: result,
    });
});
const UpdateServiceById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await services_service_1.ServicesRecord.UpdateServiceRecordById(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
});
const fetchOverdueOrPendingServices = (0, catchAsync_1.default)(async (req, res) => {
    const result = await services_service_1.ServicesRecord.fetchOverdueOrPendingServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
});
exports.ServicesController = {
    CreateServices,
    GetAllServices,
    GetServicesById,
    UpdateServiceById,
    fetchOverdueOrPendingServices,
};
