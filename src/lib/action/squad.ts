import { SquadData } from "@/utils/squadInterface";
import { serverMutation } from "../core/server";
import {
  ApplicationStatus,
  DBDeleteResponse,
  DBInsertResponse,
  UpdateStatusPayload,
  UpdateStatusResponse,
} from "@/utils/DBResponce";

// Insert squad data on DB
export const createSquad = async (
  data: SquadData,
): Promise<DBInsertResponse> => {
  return serverMutation<DBInsertResponse, SquadData>("/api/squads", data);
};


// Update Squad / Application Status
// export const updateApplicationStatus = async (
//   id: string,
//   status: ApplicationStatus,
// ): Promise<UpdateStatusResponse> => {
//   return serverMutation<UpdateStatusResponse, UpdateStatusPayload>(
//     `/api/squads/${id}`,
//     { status },
//     "PATCH"
//   );
// };


// Delete squad data from DB
export const deleteSquad = async (id: string): Promise<DBDeleteResponse> => {
  return serverMutation<DBDeleteResponse, undefined>(
    `/api/squads/${id}`,
    undefined,
    "DELETE",
  );
};
