import React from "react";
import ApplicationTable from "@/components/dashboard/user/application/ApplicationTable";
import SquadPagination from "@/components/pagination/SquadPagination";
import { getApplications } from "@/lib/api/applications";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications - DevSquad",
  description:
    "View and manage your applications to development squads.",
};

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const Applications = async ({ searchParams }: PageProps) => {
  const user = await getUserSession();
  
  if (!user) {
   redirect("/auth/login")
  }

  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);
  const limit = 10;
  
  const res = await getApplications(user.id, currentPage, limit);
  
  const applications = res?.data || [];
  const totalItems = res?.total || 0;


  return (
    <div className="p-2 max-w-9xl mx-auto space-y-4">
      <ApplicationTable applications={applications} />

      <SquadPagination totalItems={totalItems} itemsPerPage={limit} />
    </div>
  );
};

export default Applications;
