"use client";

import React from "react";
import Link from "next/link";
import { Table, Skeleton } from "@heroui/react";
import { GoEye, GoTrash } from "react-icons/go";
import { SquadData } from "@/utils/squadInterface";
import Image from "next/image";
import toast from "react-hot-toast";
import { deleteSquad } from "@/lib/action/squad";
import { useSearchParams } from "next/navigation";
import SquadPagination from "@/components/pagination/SquadPagination";

interface AllSquadsTableProps {
  initialSquads: SquadData[];
  isLoading?: boolean;
}

const AllSquadsTable = ({ initialSquads, isLoading = false }: AllSquadsTableProps) => {
  const searchParams = useSearchParams();
  const rowsPerPage = 10;

  // Calculate the current page from the URL parameters
  const currentPage = Number(searchParams.get("page")) || 1;

  // Handle Delete
  const handleDelete = async (id: string, projectName: string) => {
    if (!id) {
      toast.error("Invalid Squad ID");
      return;
    }
    const toastId = toast.loading(`Deleting "${projectName}"...`);
    try {
      const result = await deleteSquad(id);
      if (result) {
        toast.success(`"${projectName}" deleted successfully!`, { id: toastId });
        window.location.reload();
      } else {
        toast.error("Failed to delete squad.", { id: toastId });
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  const squadsArray = Array.isArray(initialSquads) ? initialSquads : [];

  // Calculate the start and end indices for the current page
  const start = (currentPage - 1) * rowsPerPage;
  const currentSquads = squadsArray.slice(start, start + rowsPerPage);

  return (
    <div className="w-full shadow-xl text-left">
      {/* Title Section */}
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="text-xl font-bold tracking-wide">All Active Squads</h2>
        <p className="text-xs">Monitor, evaluate, and manage ongoing engineering squads parameters.</p>
      </div>

      {/* Main Table Structure */}
      <div className="overflow-hidden border rounded-3xl">
        <Table aria-label="Squads management table" className="w-full">
          <Table.ScrollContainer>
            <Table.Content className="min-w-200">
              <Table.Header>
                <Table.Column isRowHeader className="font-semibold text-xs py-4 px-5 text-left border-b ">Project Info</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Category</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Capacity & Slots</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Created Date</Table.Column>
                <Table.Column className="font-semibold text-xs py-4 px-5 text-left border-b ">Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {isLoading ? (
                  Array.from({ length: rowsPerPage }).map((_, index) => (
                    <Table.Row key={`skeleton-${index}`} className="border-b">
                      <Table.Cell className="py-4 px-5"><Skeleton className="h-10 w-32 rounded-lg" /></Table.Cell>
                      <Table.Cell className="py-4 px-5"><Skeleton className="h-5 w-20 rounded" /></Table.Cell>
                      <Table.Cell className="py-4 px-5"><Skeleton className="h-5 w-24 rounded" /></Table.Cell>
                      <Table.Cell className="py-4 px-5"><Skeleton className="h-5 w-20 rounded" /></Table.Cell>
                      <Table.Cell className="py-4 px-5"><Skeleton className="h-8 w-16 rounded-lg" /></Table.Cell>
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
                    <Table.Row key={squad._id || Math.random().toString()} className="border-b">
                      {/* Project Info */}
                      <Table.Cell className="py-4 px-5">
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-16 rounded-lg overflow-hidden border">
                            <Image src={squad.coverImage || "/"} alt={squad.projectName} width={200} height={200} className="h-full w-full object-cover opacity-80" />
                          </div>
                          <span className="font-bold text-sm tracking-wide">{squad.projectName}</span>
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
                          <span className="font-medium text-xs">{squad.joinedCount ?? 1} / {squad.totalSlots ?? 4} Members</span>
                          <span className="text-[10px] text-gray-500">Capacity: {squad.capacity}</span>
                        </div>
                      </Table.Cell>

                      {/* Created Date */}
                      <Table.Cell className="py-4 px-5">
                        <span className="text-xs font-normal">
                          {squad.createdAt ? new Date(squad.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "Jul 13, 2026"}
                        </span>
                      </Table.Cell>

                      {/* Action Buttons */}
                      <Table.Cell className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <Link href={`/squads/${squad._id}`} className="h-8 w-8 inline-flex items-center justify-center rounded-lg border hover:border-indigo-500 hover:bg-indigo-600/10 transition duration-150 hover:shadow-sm hover:shadow-indigo-950/50">
                            <GoEye size={15} />
                          </Link>
                          <button onClick={() => handleDelete(squad._id!, squad.projectName)} className="h-8 w-8 inline-flex cursor-pointer items-center justify-center rounded-lg border hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition duration-150 hover:shadow-sm hover:shadow-red-950/50">
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

          {/* Pagination */}
          {!isLoading && squadsArray.length > rowsPerPage && (
            <Table.Footer className="p-0">
              <SquadPagination
                totalItems={squadsArray.length} 
                itemsPerPage={rowsPerPage} 
              />
            </Table.Footer>
          )}
        </Table>
      </div>
    </div>
  );
};

export default AllSquadsTable;
