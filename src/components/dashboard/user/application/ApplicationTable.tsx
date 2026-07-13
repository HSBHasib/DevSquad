"use client";

import { GoTrash } from "react-icons/go";
import { ApplicationData } from "@/utils/applicationInterface";
import Link from "next/link";

interface ApplicationTableProps {
  applications: ApplicationData[];
}

const ApplicationTable = ({ applications }: ApplicationTableProps) => {

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="flex flex-col gap-1 pl-2">
        <h2 className="text-xl font-bold tracking-wide text-white">
          Squad Applications
        </h2>
        <p className="text-xs text-gray-400">
          Review talent requests, portfolios, and manage join applications for
          your squads.
        </p>
      </div>

      {/* Table Box */}
      <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {applications.length === 0 ? (
          <div className="flex h-[40vh] items-center justify-center p-6 text-center">
            <p className="text-sm text-gray-500 font-medium">
              No applications found.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
                {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-800 bg-[#0e1422]">
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Applicant Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Target Squad
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
                    Linkedin & Resume
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-800/60">
                {applications.map((app, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-800/20 transition duration-150"
                  >
                    {/* Applicant Name */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white tracking-wide">
                      {app.name}
                    </td>

                    {/* Target Squad */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-400 font-medium">
                      {app.squadName || "Unknown Squad"}
                    </td>

                    {/* Email Address */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {app.email}
                    </td>

                    {/* Linkedin & Resume */}
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-3">
                        <Link
                          href={app.linkedinUrl}
                          target="_blank"
                          className="p-2 inline-flex items-center justify-center rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-150 text-xs"
                        >
                          Linkedin
                        </Link>

                        <Link
                          href={app.resume}
                          target="_blank"
                          className="p-2 inline-flex items-center justify-center rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition duration-150 text-xs"
                        >
                          Resume
                        </Link>
                      </div>
                    </td>
                    
                    {/* Applied Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-medium">
                      {app.createdAt
                        ? new Date(app.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "N/A"}
                    </td>

                    {/* Status */}
                    <td className={`whitespace-nowrap px-6 py-4`}>
                      <div className="flex justify-center items-center">
                        <span
                          className={`p-2 inline-flex items-center justify-center rounded-lg text-xs ${app.status === "approved" ? "text-green-400 bg-green-400/5" : app.status === "rejected" ? "text-red-400 bg-red-400/5" : "text-yellow-500 bg-yellow-500/5"} font-medium`}
                        >
                          {app.status || "N/A"}
                        </span>
                      </div>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="h-8 w-8 inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-800 text-gray-400 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition duration-150">
                        <GoTrash size={16} />
                      </button>
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

export default ApplicationTable;

