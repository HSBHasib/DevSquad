"use client";

import { Pagination } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

interface SquadPaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const SquadPagination = ({
  totalItems,
  itemsPerPage,
}: SquadPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // If there's only one page or no items, don't show pagination
  if (totalPages <= 1) return null;
  return (
    <div className="mt-1 border-t border-gray-800/40 w-full flex justify-center">
      <Pagination className="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0B0F19] p-4 rounded-2xl border border-gray-800/60 shadow-xl shadow-indigo-950/5">
        {/* Summary Text */}
        <div className="text-xs text-gray-500 font-medium">
          Showing{" "}
          <span className="text-gray-300 font-semibold">
            {startItem}-{endItem}
          </span>{" "}
          of <span className="text-indigo-400 font-bold">{totalItems}</span>{" "}
          results
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-1.5">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-xl border border-gray-800 bg-[#070A13] text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <span>&larr; Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((p, i) =>
              p === "ellipsis" ? (
                <span
                  key={`ellipsis-${i}`}
                  className="px-2 text-gray-600 text-xs select-none"
                >
                  •••
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  className={`min-w-[32px] h-8 flex items-center justify-center text-xs font-bold rounded-xl border transition ${
                    p === currentPage
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                      : "bg-[#070A13] border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
                  }`}
                >
                  {p}
                </button>
              ),
            )}
          </div>

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-xl border border-gray-800 bg-[#070A13] text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <span>Next &rarr;</span>
          </button>
        </div>
      </Pagination>
    </div>
  );
};

export default SquadPagination;
