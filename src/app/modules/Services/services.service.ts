import { ServiceRecord, ServiceStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";

const CreateBikeService = async (serviceData: ServiceRecord) => {
  const isBikeExist = await prisma.bike.findUnique({
    where: {
      bikeId: serviceData.bikeId,
    },
  });

  if (!isBikeExist) {
    throw new Error("Bike not found with the given bikeId.");
  }

  const result = await prisma.serviceRecord.create({
    data: serviceData,
  });

  return result;
};

const GetAllServiceRecord = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};
const GetServiceRecordById = async (serviceId: string) => {
  const isExist = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Service Record Not Found.");
  }

  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  return result;
};

const UpdateServiceRecordById = async (
  serviceId: string,
  serviceData: Partial<ServiceRecord>
): Promise<ServiceRecord> => {
  const isExist = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Service Not Found.");
  }

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      ...serviceData,
      status: ServiceStatus.done,
    },
  });

  return result;
};

const fetchOverdueOrPendingServices = async () => {
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: [ServiceStatus.pending, ServiceStatus.in_progress],
          },
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  return result;
};

export const ServicesRecord = {
  CreateBikeService,
  GetAllServiceRecord,
  GetServiceRecordById,
  UpdateServiceRecordById,
  fetchOverdueOrPendingServices,
};
