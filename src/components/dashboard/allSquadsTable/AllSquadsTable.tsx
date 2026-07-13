"use client";

import React from "react";
import Link from "next/link";
import { Skeleton } from "@heroui/react";
import { GoEye, GoTrash } from "react-icons/go";
import { SquadData } from "@/utils/squadInterface";
import Image from "next/image";
import toast from "react-hot-toast";
import { deleteSquad } from "@/lib/action/squad";
import { useSearchParams } from "next/navigation";
import SquadPagination from "@/components/pagination/SquadPagination";
import { handleDelete } from "@/utils/handleDelete/HandleDelete";

interface AllSquadsTableProps {
  initialSquads: SquadData[];
  isLoading?: boolean;
}

const AllSquadsTable = ({
  initialSquads,
  isLoading = false,
}: AllSquadsTableProps) => {
  const searchParams = useSearchParams();
  const rowsPerPage = 10;

  // Calculate the current page from the URL parameters
  const currentPage = Number(searchParams.get("page")) || 1;

  const squadsArray = Array.isArray(initialSquads) ? initialSquads : [];

  // Calculate the start and end indices for the current page
  const start = (currentPage - 1) * rowsPerPage;
  const currentSquads = squadsArray.slice(start, start + rowsPerPage);

  return (
    <div className="w-full shadow-xl text-left">
      {/* Title Section */}
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="text-xl font-bold tracking-wide text-white">
          All Active Squads
        </h2>
        <p className="text-xs text-gray-400">
          Monitor, evaluate, and manage ongoing engineering squads parameters.
        </p>
      </div>

      {/* Main Table Structure */}
      <div className="overflow-hidden border border-gray-800 rounded-3xl bg-[#0B0F19]">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse text-left min-w-200">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-800/80 bg-[#070A13]/50">
                <th className="font-semibold text-xs py-4 px-5 text-gray-400 border-b border-gray-800">
                  Project Info
                </th>
                <th className="font-semibold text-xs py-4 px-5 text-gray-400 border-b border-gray-800">
                  Category
                </th>
                <th className="font-semibold text-xs py-4 px-5 text-gray-400 border-b border-gray-800">
                  Capacity & Slots
                </th>
                <th className="font-semibold text-xs py-4 px-5 text-gray-400 border-b border-gray-800">
                  Created Date
                </th>
                <th className="font-semibold text-xs py-4 px-5 text-gray-400 border-b border-gray-800">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-800/40">
              {isLoading ? (
                Array.from({ length: rowsPerPage }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-b border-gray-800/60"
                  >
                    <td className="py-4 px-5">
                      <Skeleton className="h-10 w-32 rounded-lg" />
                    </td>
                    <td className="py-4 px-5">
                      <Skeleton className="h-5 w-20 rounded" />
                    </td>
                    <td className="py-4 px-5">
                      <Skeleton className="h-5 w-24 rounded" />
                    </td>
                    <td className="py-4 px-5">
                      <Skeleton className="h-5 w-20 rounded" />
                    </td>
                    <td className="py-4 px-5">
                      <Skeleton className="h-8 w-16 rounded-lg" />
                    </td>
                  </tr>
                ))
              ) : currentSquads.length === 0 ? (
                <tr>
                  <td
                    className="py-8 text-center text-sm text-gray-400"
                    colSpan={5}
                  >
                    No squads have been created yet.
                  </td>
                </tr>
              ) : (
                currentSquads.map((squad) => (
                  <tr
                    key={squad._id || Math.random().toString()}
                    className="border-b border-gray-800/40 hover:bg-gray-800/20 transition duration-150"
                  >
                    {/* Project Info */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      <div className="flex items-center gap-3.5">
                        <div className="h-10 w-16 rounded-lg overflow-hidden border border-gray-800 bg-[#070A13]">
                          <Image
                            src={squad.coverImage || "/"}
                            alt={squad.projectName}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover opacity-80"
                          />
                        </div>
                        <span className="font-bold text-sm tracking-wide text-white">
                          {squad.projectName}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                        {squad.category}
                      </span>
                    </td>

                    {/* Capacity & Slots */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-xs text-gray-200">
                          {squad.joinedCount ?? 1} / {squad.totalSlots ?? 4}{" "}
                          Members
                        </span>
                        <span className="text-[10px] text-gray-500">
                          Capacity: {squad.capacity}
                        </span>
                      </div>
                    </td>

                    {/* Created Date */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      <span className="text-xs font-normal text-gray-400">
                        {squad.createdAt
                          ? new Date(squad.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )
                          : "Jul 13, 2026"}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/squad-detail/${squad._id}`}
                          className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-gray-800 text-gray-400 hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-600/10 transition duration-150 hover:shadow-sm hover:shadow-indigo-950/50"
                        >
                          <GoEye size={15} />
                        </Link>
                        <button
                          onClick={() =>
                            handleDelete({
                              id: squad._id!,
                              name: squad.projectName,
                              entityType: "Squad",
                              deleteAction: deleteSquad,
                            })
                          }
                          className="h-8 w-8 inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-800 text-gray-400 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition duration-150 hover:shadow-sm hover:shadow-red-950/50"
                        >
                          <GoTrash size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section Footer */}
        {!isLoading && squadsArray.length > rowsPerPage && (
          <div className="p-4 border-t border-gray-800 bg-[#070A13]/30 flex justify-end">
            <SquadPagination
              totalItems={squadsArray.length}
              itemsPerPage={rowsPerPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSquadsTable;