import React from "react";
import AllSquadsTable from "@/components/dashboard/allSquadsTable/AllSquadsTable";
import { getAllSquads } from "@/lib/api/squad";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Squads - DevSquad",
  description:
    "View and manage all development squads in the DevSquad platform.",
};
  
const AllSquads = async () => {
  const response = await getAllSquads() ;
  const initialSquadsData = response?.data || [];

  return (
    <div className="max-w-9xl mx-auto p-3">
      <AllSquadsTable initialSquads={initialSquadsData} />
    </div>
  );
};

export default AllSquads;

