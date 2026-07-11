import React from "react";
import RegisterContent from "@/components/regAndLog/register/RegisterContent";
import type { Metadata } from "next";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Register - DevSquad",
  description: "Create a new DevSquad account",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const RegisterPage = async ({ searchParams }: PageProps) => {
  const user = await getUserSession();
  const srcParams = await searchParams;

  // Redirect to home page if user already login
  if (user) {
    redirect("/");
  }

  return (
    <div>
      <RegisterContent srcParams={srcParams} />
    </div>
  );
};

export default RegisterPage;
