export interface userSessionInterface {
  _id?: string;
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
}

