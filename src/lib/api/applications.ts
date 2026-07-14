import { ApplicationData } from "@/utils/applicationInterface";
import { protectedFetch } from "../core/server";

interface ApplicationResponse {
  success: boolean;
  total: number;
  data: ApplicationData[];
}

// Get Applications Data for Squad Owner from DB
export const getApplications = async (
  ownerId: string,
  page: number,
  limit: number
): Promise<ApplicationResponse> => {
  return protectedFetch<ApplicationResponse>(
    `/api/applications?ownerId=${ownerId}&page=${page}&limit=${limit}`
  );
};
