"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const bike_service_1 = require("./bike.service");
const CreateBike = (0, catchAsync_1.default)(async (req, res) => {
    const result = await bike_service_1.BikeServices.CreateBike(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Bike created successfully",
        data: result,
    });
});
const GetAllBike = (0, catchAsync_1.default)(async (req, res) => {
    const result = await bike_service_1.BikeServices.GetAllBike();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
});
const GetBikeById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await bike_service_1.BikeServices.GetBikeById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
});
exports.BikeController = {
    CreateBike,
    GetAllBike,
    GetBikeById,
};
