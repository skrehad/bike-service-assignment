"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoute = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post("/", customer_controller_1.CustomerController.CreateCustomer);
router.get("/", customer_controller_1.CustomerController.GetAllCustomer);
router.get("/:id", customer_controller_1.CustomerController.GetCustomerById);
router.put("/:id", customer_controller_1.CustomerController.UpdateCustomerById);
router.delete("/:id", customer_controller_1.CustomerController.DeleteCustomerById);
exports.CustomerRoute = router;
