import express from "express";
import { CustomerRoute } from "../app/modules/Customer/customer.route";
import { BikeRoute } from "../app/modules/Bike/bike.route";
import { ServicesRoute } from "../app/modules/Services/services.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: CustomerRoute,
  },
  {
    path: "/bikes",
    route: BikeRoute,
  },
  {
    path: "/services",
    route: ServicesRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
