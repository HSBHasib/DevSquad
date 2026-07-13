import { DBInsertResponse } from "@/utils/DBResponce";
import { serverMutation } from "../core/server";
import { ApplicationData } from "@/utils/applicationInterface";

// Insert Application data on DB
export const createApplication = async (data: ApplicationData): Promise<DBInsertResponse> => {
  return serverMutation<DBInsertResponse, ApplicationData>("/api/applications", data);
};