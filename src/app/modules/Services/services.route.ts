import express from "express";
import { ServicesController } from "./services.controller";

const router = express.Router();

router.post("/", ServicesController.CreateServices);
router.get("/status", ServicesController.fetchOverdueOrPendingServices);
router.get("/", ServicesController.GetAllServices);
router.get("/:id", ServicesController.GetServicesById);
router.put("/:id", ServicesController.UpdateServiceById);

export const ServicesRoute = router;
