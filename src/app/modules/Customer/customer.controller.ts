import status from "http-status";

import { CustomerServices } from "./customer.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const CreateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.CreateCustomer(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});
const GetAllCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetAllCustomer();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});
const GetCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

// update customer
const UpdateCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.UpdateCustomerById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});
const DeleteCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.DeleteCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully",
    data: result,
  });
});

export const CustomerController = {
  CreateCustomer,
  GetAllCustomer,
  GetCustomerById,
  UpdateCustomerById,
  DeleteCustomerById,
};
