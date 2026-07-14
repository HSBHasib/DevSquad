import React from "react";
import LoginContent from "@/components/regAndLog/login/LoginContent";
import type { Metadata } from "next";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login - DevSquad",
  description: "Login to your DevSquad account",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const LoginPage = async ({ searchParams }: PageProps) => {
  const user = await getUserSession();
  const srcParams = await searchParams;
  const redirectTo = srcParams?.redirect || "/";


  // Redirect to home page if user already login
  if (user) {
    redirect("/");
  }

  return (
    <div>
      <LoginContent redirectTo={redirectTo} />
    </div>
  );
};

export default LoginPage;
