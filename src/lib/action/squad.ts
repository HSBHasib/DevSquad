import { DBDeleteResponse, DBInsertResponse, SquadData } from "@/utils/squadInterface";
import { serverMutation } from "../core/server";

// Insert squad data on DB
export const createSquad = async (data: SquadData): Promise<DBInsertResponse> => {
  return serverMutation<DBInsertResponse, SquadData>("/api/squads", data);
};

// Delete squad data from DB
export const deleteSquad = async (id: string): Promise<DBDeleteResponse> => {
  return serverMutation<DBDeleteResponse, undefined>(`/api/squads/${id}`, undefined, "DELETE");
};

