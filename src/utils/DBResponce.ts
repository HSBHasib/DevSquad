// Database implementation response

// Insert Interface
export interface DBInsertResponse {
  acknowledged: boolean;
  insertedId: string;
}


// Update Interface
export type ApplicationStatus = "approved" | "rejected";

export interface UpdateStatusPayload {
  status: ApplicationStatus;
}

export interface UpdateStatusResponse {
  success: boolean;
  message?: string;
  updatedStatus?: ApplicationStatus;
  squadUpdated?: boolean;
  error?: string;
  applicantData?: {
    email: string;
    name: string;
    squadName: string;
    communicationLink: string;
  };
  data?: {
    success: boolean;
    message?: string;
    applicantData?: {
      email: string;
      name: string;
      squadName: string;
      communicationLink: string;
    };
  };
}

// Delete Interface
export interface DBDeleteResponse {
  acknowledged: boolean;
  deletedCount: number;
}
