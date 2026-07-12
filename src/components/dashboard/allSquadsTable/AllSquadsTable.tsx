"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Pagination, Table, Skeleton } from "@heroui/react";
import { GoEye, GoTrash } from "react-icons/go";
import { SquadData } from "@/utils/squadInterface";
import Image from "next/image";
import toast from "react-hot-toast";

interface AllSquadsTableProps {
  initialSquads: SquadData[];
  isLoading?: boolean;
}

const AllSquadsTable = ({ initialSquads, isLoading = false }: AllSquadsTableProps) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleDeleteToast = (projectName: string) => {
    
    toast.error(`Delete request triggered for "${projectName}"`);
  };

  const totalPages = Math.ceil(initialSquads.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const currentSquads = initialSquads.slice(start, start + rowsPerPage);

  const startRecord = initialSquads.length === 0 ? 0 : start + 1;
  const endRecord = Math.min(page * rowsPerPage, initialSquads.length);

  return (
    <div className="w-full shadow-xl text-left">

      {/* Title Section */}
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="text-xl font-bold tracking-wide">All Active Squads</h2>
        <p className="text-xs">Monitor, evaluate, and manage ongoing engineering squads parameters.</p>
      </div>

      {/* Main Table Structure */}
      <div className="overflow-hidden border rounded-3xl">
        <Table 
          aria-label="Squads management table"
          className="w-full"
        >
          <Table.ScrollContainer>
            <Table.Content className="min-w-200">
              
              {/* Table Header */}
              <Table.Header>
                {/* Table Column Headers */}
                <Table.Column isRowHeader className="font-semibold text-xs py-4 px-5 text-left border-b ">Project Info</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Category</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Capacity & Slots</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Created Date</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Actions</Table.Column>
              </Table.Header>

              {/* Table Body */}
              <Table.Body>
                {isLoading ? (
                  Array.from({ length: rowsPerPage }).map((_, index) => (
                    <Table.Row key={`skeleton-${index}`} className="border-b">
                      <Table.Cell className="py-4 px-5">
                        <div className="flex items-center gap-3.5">
                          <Skeleton className="h-10 w-16 rounded-lg" />
                          <Skeleton className="h-4 w-32 rounded-md" />
                        </div>
                      </Table.Cell>
                      <Table.Cell className="py-4 px-5">
                        <Skeleton className="h-5 w-20 rounded" />
                      </Table.Cell>
                      <Table.Cell className="py-4 px-5">
                        <div className="flex flex-col gap-1.5">
                          <Skeleton className="h-3.5 w-24 rounded" />
                          <Skeleton className="h-3 w-16 rounded" />
                        </div>
                      </Table.Cell>
                      <Table.Cell className="py-4 px-5">
                        <Skeleton className="h-3.5 w-20 rounded" />
                      </Table.Cell>
                      <Table.Cell className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <Skeleton className="h-8 w-8 rounded-lg" />
                          <Skeleton className="h-8 w-8 rounded-lg" />
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : currentSquads.length === 0 ? (
                  <Table.Row>
                    <Table.Cell className="py-8 text-center text-sm text-gray-400" colSpan={5}>
                      No squads have been created yet.
                    </Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                    <Table.Cell className="hidden"></Table.Cell>
                  </Table.Row>
                ) : (
                  currentSquads.map((squad) => (
                    <Table.Row 
                      key={squad._id || Math.random().toString()} 
                      className="border-b transition-colors duration-150"
                    >
                      {/* Project Info */}
                      <Table.Cell className="py-4 px-5">
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-16 rounded-lg overflow-hidden border">
                            <Image 
                              src={squad.coverImage || "/"} 
                              alt={squad.projectName}
                              width={200}
                              height={200} 
                              className="h-full w-full object-cover opacity-80"
                            />
                          </div>
                          <span className="font-bold text-sm tracking-wide">
                            {squad.projectName}
                          </span>
                        </div>
                      </Table.Cell>

                      {/* Category */}
                      <Table.Cell className="py-4 px-5">
                        <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                          {squad.category}
                        </span>
                      </Table.Cell>

                      {/* Capacity & Slots */}
                      <Table.Cell className="py-4 px-5">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-xs">
                            {squad.joinedCount ?? 1} / {squad.totalSlots ?? 4} Members
                          </span>
                          <span className="text-[10px] text-gray-500">
                            Capacity: {squad.capacity}
                          </span>
                        </div>
                      </Table.Cell>

                      {/* Created Date */}
                      <Table.Cell className="py-4 px-5">
                        <span className="text-xs font-normal">
                          {squad.createdAt ? new Date(squad.createdAt).toLocaleDateString("en-US", {
                            year: "numeric", month: "short", day: "numeric"
                          }) : "Jul 13, 2026"}
                        </span>
                      </Table.Cell>

                      {/* Action Buttons */}
                      <Table.Cell className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          {/* View Details Button */}
                          <Link
                            href={`/squads/${squad._id}`}
                            className="h-8 w-8 inline-flex items-center justify-center rounded-lg border hover:border-indigo-500 hover:bg-indigo-600/10 transition duration-150 shadow"
                            title="View Details"
                          >
                            <GoEye size={15} />
                          </Link>

                          {/* Delete Button */}
                          <button
                            onClick={() => handleDeleteToast(squad.projectName)}
                            className="h-8 w-8 inline-flex items-center justify-center rounded-lg border hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition duration-150 shadow"
                            title="Delete Squad"
                          >
                            <GoTrash size={14} /> 
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
              </Table.Body>

            </Table.Content>
          </Table.ScrollContainer>

          {/* Table Footer: Custom Dark Pagination Layout */}
          {!isLoading && totalPages > 1 && (
            <Table.Footer className="border-t px-5 py-4 flex items-center justify-between">
              <Pagination size="sm">
                <Pagination.Summary className="text-xs font-medium">
                  Showing <span className="font-bold">{startRecord}</span> to <span className="font-bold">{endRecord}</span> of <span className="text-indigo-400 font-bold">{initialSquads.length}</span> results
                </Pagination.Summary>

                <Pagination.Content className="flex items-center gap-1.5">
                  <Pagination.Item>
                    <button
                      disabled={page === 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className="px-3 py-1.5 rounded-lg text-black border text-xs disabled:opacity-30 disabled:cursor-not-allowed transition"
                    >
                      Prev
                    </button>
                  </Pagination.Item>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Pagination.Item key={p}>
                      <button
                        onClick={() => setPage(p)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                          p === page
                            ? "bg-indigo-600 border border-indigo-600 shadow text-white"
                            : "border"
                        }`}
                      >
                        {p}
                      </button>
                    </Pagination.Item>
                  ))}

                  <Pagination.Item>
                    <button
                      disabled={page === totalPages}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      className="px-3 py-1.5 text-black rounded-lg border text-xs disabled:opacity-30 disabled:cursor-not-allowed transition"
                    >
                      Next
                    </button>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </Table.Footer>
          )}
        </Table>
      </div>
    </div>
  );
};

export default AllSquadsTable;