import React from "react";
import { getAllSquads } from "@/lib/api/squad";
import ApplySquadForm from "@/components/applySquadForm/ApplySquadForm";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

interface SquadDetailsProps {
  params: Promise<{ id: string }>;
}

const ApplicationForm = async ({ params }: SquadDetailsProps) => {
  const { id } = await params;

  // Applicant Data
  const applicant = await getUserSession();
  const role = applicant?.role;

  if (!applicant) {
    redirect(`/auth/login?redirect=/squad-detail/${id}/apply`);
  }

  const response = await getAllSquads();
  const squads = response?.data || [];
  const squad = squads.find((s) => s._id === id);

  if (!squad) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Squad not found.</p>
      </div>
    );
  }

  const isFull = (squad.joinedCount ?? 1) >= (squad.totalSlots ?? 4);

  return (
    <ApplySquadForm
      squadId={id}
      squadName={squad?.projectName || "Unknown Squad"}
      communicationLink={squad?.communicationLink || "Unknown Squad"}
      ownerId={(squad?.userId as unknown as string) || ""}
      applicantId={applicant?.id || ""}
      isFull={isFull}
      role={role as string}
    />
  );
};

export default ApplicationForm;
