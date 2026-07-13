export interface SquadData {
  _id?: string;
  projectName: string;
  category: string;
  shortDescription: string;
  fullScope: string;
  capacity: string;
  communicationLink: string;
  coverImage: string;
  techStack: string[];
  totalSlots: number;
  joinedCount: number;
  userId?: number;
  createdAt?: Date;   
}

// Database implementation response
export interface DBInsertResponse {
  acknowledged: boolean;
  insertedId: string;
}

export interface DBDeleteResponse {
  acknowledged: boolean;
  deletedCount: number;
}

