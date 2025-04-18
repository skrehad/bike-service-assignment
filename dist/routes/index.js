"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../app/modules/Customer/customer.route");
const bike_route_1 = require("../app/modules/Bike/bike.route");
const services_route_1 = require("../app/modules/Services/services.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_route_1.CustomerRoute,
    },
    {
        path: "/bikes",
        route: bike_route_1.BikeRoute,
    },
    {
        path: "/services",
        route: services_route_1.ServicesRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
