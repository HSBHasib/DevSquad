import React from "react";
import AllUserTable from "@/components/dashboard/admin/allUserTable/AllUserTable";
import { getAllUsers } from "@/lib/api/users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Users - DevSquad",
  description:
    "View and manage all users in the DevSquad platform.",
};

const AllUsers = async () => {
  const response = await getAllUsers();
  const users = response?.data || [];
  return (
    <div className="max-w-9xl mx-auto p-3">
      <AllUserTable users={users} />
    </div>
  );
};

export default AllUsers;
