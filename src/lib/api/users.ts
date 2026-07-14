import { serverFetch } from "../core/server"
import { userSessionInterface } from "@/utils/userSessionInterface";

export interface UserAPIResponse {
  success: boolean;
  message?: string;
  totalUsers: number;
  data: userSessionInterface[];
}

export const getAllUsers = async (): Promise<UserAPIResponse> => {
    return serverFetch<UserAPIResponse>("/api/users");
}

