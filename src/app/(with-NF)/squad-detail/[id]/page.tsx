import React, { Suspense } from "react";
import { getAllSquads } from "@/lib/api/squad";
import SquadDetailsContent from "@/components/squadDetail/SquadDetailsContent";
import SquadDetailsSkeleton from "@/components/squadDetail/SquadDetailsSkeleton";

interface SquadDetailsProps {
  params: Promise<{ id: string }>;
}

const SquadDetails = ({ params }: SquadDetailsProps) => {
  return (
    <div className="min-h-screen bg-[#070A13] text-gray-100 pb-10 pt-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<SquadDetailsSkeleton />}>
          <SquadDataLoader params={params} />
        </Suspense>
      </div>
    </div>
  );
};

const SquadDataLoader = async ({ params }: SquadDetailsProps) => {
  const { id } = await params;
  
  const response = await getAllSquads();
  const squads = response?.data || [];
  
  const squad = squads.find((s) => s._id === id);

  if (!squad) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-400">No data found</h1>
      </div>
    );
  }

  return <SquadDetailsContent squad={squad} />;
};

export default SquadDetails;

