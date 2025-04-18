import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServicesRecord } from "./services.service";

const CreateServices = catchAsync(async (req, res) => {
  const result = await ServicesRecord.CreateBikeService(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Services created successfully",
    data: result,
  });
});
const GetAllServices = catchAsync(async (req, res) => {
  const result = await ServicesRecord.GetAllServiceRecord();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Services fetched successfully",
    data: result,
  });
});
const GetServicesById = catchAsync(async (req, res) => {
  const result = await ServicesRecord.GetServiceRecordById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Services fetched successfully",
    data: result,
  });
});

const UpdateServiceById = catchAsync(async (req, res) => {
  const result = await ServicesRecord.UpdateServiceRecordById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

const fetchOverdueOrPendingServices = catchAsync(async (req, res) => {
  const result = await ServicesRecord.fetchOverdueOrPendingServices();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServicesController = {
  CreateServices,
  GetAllServices,
  GetServicesById,
  UpdateServiceById,
  fetchOverdueOrPendingServices,
};
