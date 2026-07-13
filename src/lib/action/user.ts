import { DBDeleteResponse } from "@/utils/DBResponce";
import { serverMutation } from "../core/server";

// Delete user data from DB
export const deleteUser = async (id: string): Promise<DBDeleteResponse> => {
  return serverMutation<DBDeleteResponse, undefined>(`/api/users/${id}`, undefined, "DELETE");
};
