// Database implementation response
export interface DBInsertResponse {
  acknowledged: boolean;
  insertedId: string;
}

export interface DBDeleteResponse {
  acknowledged: boolean;
  deletedCount: number;
}

