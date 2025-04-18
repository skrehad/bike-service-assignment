import { Bike } from "@prisma/client";
import prisma from "../../../shared/prisma";

const CreateBike = async (bikeData: Bike) => {
  // Step 1: Check if the customer exists
  const isCustomerExist = await prisma.customer.findUnique({
    where: {
      customerId: bikeData.customerId,
    },
  });

  if (!isCustomerExist) {
    throw new Error("Customer not found with the given customerId.");
  }

  // Step 2: Create the bike
  const result = await prisma.bike.create({
    data: bikeData,
  });

  return result;
};

const GetAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const GetBikeById = async (bikeId: string) => {
  const isExist = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Bike Not Found.");
  }

  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  return result;
};

export const BikeServices = {
  CreateBike,
  GetAllBike,
  GetBikeById,
};
