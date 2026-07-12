import { getFourSquads } from "@/lib/api/squad";
import React, { Suspense } from "react";
import FeaturesSection from "./FeaturesSection";
import FeaturesSkeleton from "./FeaturesSkeleton";
import { SquadData } from "@/utils/squadInterface";

async function SquadsListLoader() {
  const squads: SquadData[] = await getFourSquads();

  if (!squads || squads.length === 0) {
    return (
      <div className="w-full text-center py-20 text-gray-500 border border-dashed border-gray-800 rounded-2xl max-w-7xl mx-auto px-6">
        No recent active squads available right now.
      </div>
    );
  }

  return <FeaturesSection squads={squads} />;
}

const Features = async () => {
  return (
    <div>
      <Suspense fallback={<div className="w-full max-w-7xl mx-auto px-6 pt-36"><FeaturesSkeleton /></div>}>
        <SquadsListLoader />
      </Suspense>
    </div>
  );
};

export default Features;
