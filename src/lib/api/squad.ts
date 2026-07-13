import { SquadData } from "@/utils/squadInterface";
import { serverFetch } from "../core/server";


export interface SquadsAPIResponse {
  success: boolean;
  total: number;
  data: SquadData[];
}

export interface SquadQueryParams {
  search?: string;
  category?: string;
  tech?: string;
  teamSize?: "2" | "3" | "4" | "all";
  sort?: "latest" | "slots";
  page?: number;
  limit?: number;
  userId?: string;
}

// Get all squads Data 
export const getAllSquads = async (params?: SquadQueryParams): Promise<SquadsAPIResponse> => {
  if (!params) {
    return serverFetch<SquadsAPIResponse>("/api/squads");
  }

  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  const url = queryString ? `/api/squads?${queryString}` : "/api/squads";

  return serverFetch<SquadsAPIResponse>(url);
};

// Get 4 squads Data
export const getFourSquads = async (): Promise<SquadData[]> => {
  return serverFetch<SquadData[]>("/api/four-squads");
};


