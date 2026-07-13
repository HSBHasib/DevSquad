import React from "react";
import AllSquadsTable from "@/components/dashboard/allSquadsTable/AllSquadsTable";
import { getAllSquads } from "@/lib/api/squad";
  
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

