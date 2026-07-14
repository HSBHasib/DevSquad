import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

// methods
type MutationMethod = "POST" | "PUT" | "PATCH" | "DELETE";

// Auth Header
export const authHeader = async () => {
  const token = await getUserToken();
  const header: Record<string, string> = token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};

  return header;
};

// Error & Response Status Code Handler
const handleStatusCode = async <T>(res: Response): Promise<T> => {
  if (res.status === 401) {
    redirect("/unauthorized");
  } else if (res.status === 403) {
    redirect("/forbidden");
  }

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json() as Promise<T>;
};

// Server Fetch
export const serverFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, {
    cache: "no-store",
  });
  return handleStatusCode<T>(res);
};

// Protected Fetch Data From DB
export const protectedFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: await authHeader(),
  });

  return handleStatusCode<T>(res);
};

// Server Mutation
export const serverMutation = async <TResponse, TData = unknown>(
  path: string,
  data?: TData,
  method: MutationMethod = "POST",
): Promise<TResponse> => {
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...(await authHeader()),
    },
  };

  // Validating data
  if (data !== null && data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${baseUrl}${path}`, options);
  return handleStatusCode<TResponse>(res);
};

