"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const customer_service_1 = require("./customer.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const CreateCustomer = (0, catchAsync_1.default)(async (req, res) => {
    const result = await customer_service_1.CustomerServices.CreateCustomer(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result,
    });
});
const GetAllCustomer = (0, catchAsync_1.default)(async (req, res) => {
    const result = await customer_service_1.CustomerServices.GetAllCustomer();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
});
const GetCustomerById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await customer_service_1.CustomerServices.GetCustomerById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
});
const UpdateCustomerById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await customer_service_1.CustomerServices.UpdateCustomerById(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer updated successfully",
        data: result,
    });
});
const DeleteCustomerById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await customer_service_1.CustomerServices.DeleteCustomerById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer deleted successfully",
        data: result,
    });
});
exports.CustomerController = {
    CreateCustomer,
    GetAllCustomer,
    GetCustomerById,
    UpdateCustomerById,
    DeleteCustomerById,
};
