import { UserData } from "@/utils/userInterface";
import { serverFetch } from "../core/server"

export interface UserAPIResponse {
  success: boolean;
  message?: string;
  data: UserData[];
}

export const getAllUsers = async (): Promise<UserAPIResponse> => {
    return serverFetch<UserAPIResponse>("/api/users");
}

