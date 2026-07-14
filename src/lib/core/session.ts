"use server"

import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { userSessionInterface } from "@/utils/userSessionInterface";

// Get User Data
export const getUserSession = async (): Promise<userSessionInterface | null> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user || null;
};


// Get User Token
export const getUserToken = async (): Promise<string | null> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.session?.token || null;
};


// Get User Role
export const requireRole = async (role:string): Promise<userSessionInterface> => {
  const user = await getUserSession();

  if (!user) {
    redirect("/auth/login");
  }

  if (user?.role !== role) {
    redirect("/unauthorized");
  }

  return user;
};
