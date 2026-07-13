"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GoSearch, GoTrash } from "react-icons/go";
import { UserData } from "@/utils/userInterface";
import { deleteUser } from "@/lib/action/user";
import { handleDelete } from "@/utils/handleDelete/HandleDelete";

interface AllUserTableProps {
  users: UserData[];
}

const AllUserTable = ({ users }: AllUserTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Login based on name and email
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Search Bar Section */}
      <div className="relative">
        <GoSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by Name or Email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#0B0F19] border border-gray-800 text-sm text-gray-200 placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150 outline-none"
        />
      </div>

      {/* Title Section */}
      <div className="flex flex-col gap-1 mb-6 pl-2">
        <h2 className="text-xl font-bold tracking-wide">All users</h2>
        <p className="text-xs">
          Monitor, evaluate, and manage system users and member accounts.
        </p>
      </div>

      {/* Users Table Section */}
      <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {filteredUsers.length === 0 ? (
          <div className="flex h-[40vh] items-center justify-center p-6 text-center">
            <p className="text-sm text-gray-500 font-medium">
              No members found matching your search.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    User Image
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Created Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
                    Delete
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-800/60">
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user._id || index}
                    className="hover:bg-gray-800/30 transition duration-150"
                  >
                    {/* User Image */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-gray-800 bg-[#070A13]">
                        <Image
                          src={user.image || "/"}
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white tracking-wide">
                      {user.name}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {user.email}
                    </td>

                    {/* Created Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-medium">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "N/A"}
                    </td>

                    {/* Actions  */}
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        {/* Delete Button */}
                        <button
                          onClick={() =>
                            handleDelete({
                              id: user._id!,
                              name: user.name,
                              entityType: "User",
                              deleteAction: deleteUser,
                            })
                          }
                          className="h-8 w-8 inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-800 text-gray-400 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition duration-150 hover:shadow-sm hover:shadow-red-950/50"
                        >
                          <GoTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUserTable;
