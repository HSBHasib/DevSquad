import { SquadData } from "@/utils/squadInterface";
import { serverFetch } from "../core/server";

// Get all squads Data
export const getAllSquads = async (): Promise<SquadData[]> => {
  return serverFetch<SquadData[]>("/api/squads");
};

// Get 4 squads Data
export const getFourSquads = async (): Promise<SquadData[]> => {
  return serverFetch<SquadData[]>("/api/four-squads");
};

