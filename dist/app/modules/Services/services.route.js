"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesRoute = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const router = express_1.default.Router();
router.post("/", services_controller_1.ServicesController.CreateServices);
router.get("/status", services_controller_1.ServicesController.fetchOverdueOrPendingServices);
router.get("/", services_controller_1.ServicesController.GetAllServices);
router.get("/:id", services_controller_1.ServicesController.GetServicesById);
router.put("/:id", services_controller_1.ServicesController.UpdateServiceById);
exports.ServicesRoute = router;
