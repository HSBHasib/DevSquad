"use client";

import { GoCheck, GoX } from "react-icons/go";
import { ApplicationData } from "@/utils/applicationInterface";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ApplicationStatus } from "@/utils/DBResponce";
import { sendEmail, updateApplicationStatus } from "@/lib/action/squadActions";
import {
  getApprovedEmailTemplate,
  getRejectedEmailTemplate,
} from "@/utils/emailTemplaate/emailTemplates";

interface ApplicationTableProps {
  applications: ApplicationData[];
}

const ApplicationTable = ({ applications }: ApplicationTableProps) => {
  const router = useRouter();
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Update Handler & Send Update Email
  const handleAction = async (
    id: string | undefined,
    targetStatus: ApplicationStatus,
  ) => {
    if (!id) {
      toast.error("Id is required");
      return;
    }

    setProcessingId(id);

    try {
      const result = await updateApplicationStatus(id, targetStatus);
      const isSuccess = result.success || result.data?.success;

      if (isSuccess) {
        toast.success(`Application ${targetStatus} successfully!`);

        const applicant =
          result.applicantData || result.data?.applicantData;

        if (applicant?.email) {
          const emailSubject =
            targetStatus === "approved"
              ? `Congratulations! Your application for ${applicant.squadName} is Approved 🎉`
              : `Update regarding your application for ${applicant.squadName}`;

          const emailTemplate =
            targetStatus === "approved"
              ? getApprovedEmailTemplate(
                  applicant.name,
                  applicant.squadName,
                  applicant.email,
                  applicant.communicationLink,
                )
              : getRejectedEmailTemplate(
                  applicant.name,
                  applicant.squadName,
                  applicant.email,
                );

          try {
            await sendEmail({
              to: applicant.email,
              subject: emailSubject,
              html: emailTemplate,
            });
          } catch (emailErr) {
            console.error("Email sending failed:", emailErr);
          }
        }

        router.refresh();
      } else {
        const errorMessage =
          result.error ||
          result.message ||
          (result as any).data?.message ||
          "Failed to update status.";
        toast.error(errorMessage);
      }
    } catch (error: unknown) {
      console.error("Workflow error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setProcessingId(null);
    }
  };

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
                  <th className="px-6 py-4 text-xs font-bold whitespace-nowrap text-gray-400 uppercase tracking-wider">
                    Target Squad
                  </th>
                  <th className="px-6 py-4 text-xs font-bold whitespace-nowrap text-gray-400 uppercase tracking-wider">
                    Email Address
                  </th>
                  <th className="px-6 py-4 text-xs font-bold whitespace-nowrap text-gray-400 uppercase tracking-wider text-center">
                    Linkedin & Resume
                  </th>
                  <th className="px-6 py-4 text-xs font-bold whitespace-nowrap text-gray-400 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold whitespace-nowrap text-gray-400 uppercase tracking-wider text-center">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold whitespace-nowrap text-gray-400 uppercase tracking-wider text-center">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-800/60">
                {applications.map((app, idx) => {
                  const isCurrentProcessing = processingId === app._id;

                  return (
                    <tr
                      key={app._id || idx}
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
                            href={app.linkedinUrl || "#"}
                            target="_blank"
                            className="p-2 inline-flex items-center justify-center rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-150 text-xs"
                          >
                            Linkedin
                          </Link>

                          <Link
                            href={app.resume || "#"}
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
                          ? new Date(app.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )
                          : "N/A"}
                      </td>

                      {/* Status */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex justify-center items-center">
                          <span
                            className={`p-2 inline-flex items-center justify-center rounded-lg text-xs font-medium capitalize ${
                              app.status === "approved"
                                ? "text-green-400 bg-green-400/5"
                                : app.status === "rejected"
                                  ? "text-red-400 bg-red-400/5"
                                  : "text-yellow-500 bg-yellow-500/5"
                            }`}
                          >
                            {app.status || "pending"}
                          </span>
                        </div>
                      </td>

                      {/* Action Buttons */}
                      <td className="px-6 py-4 whitespace-nowrap text-center flex items-center justify-center gap-2">
                        {/* Approve Button */}
                        <button
                          disabled={
                            isCurrentProcessing || app.status === "approved"
                          }
                          onClick={() => handleAction(app._id, "approved")}
                          className="h-8 w-8 inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-800 text-green-400 bg-green-400/5 hover:border-green-500/30 hover:bg-green-500/10 transition duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <GoCheck size={16} />
                        </button>

                        {/* Reject Button */}
                        <button
                          disabled={
                            isCurrentProcessing || app.status === "rejected"
                          }
                          onClick={() => handleAction(app._id, "rejected")}
                          className="h-8 w-8 inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-800 text-red-400 bg-red-400/5 hover:border-red-500/30 hover:bg-red-500/10 transition duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <GoX size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTable;

