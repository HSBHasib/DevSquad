import React, { Suspense } from "react";
import ExploreSquadsContent from "@/components/exploreSquads/ExploreSquadsContent";
import SquadFilters from "@/components/exploreSquads/SquadFilters";
import SquadSearchBar from "@/components/exploreSquads/SquadSearchBar";
import FeaturesSkeleton from "@/components/landingPage/Features/FeaturesSkeleton";
import { getAllSquads, SquadQueryParams } from "@/lib/api/squad";

// searchParams Interface 
interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; 
}

const ExploreSquads = async ({ searchParams }: PageProps) => {
  const resolvedSearchParams = await searchParams;

  // Convert incoming string parameters to the appropriate types
  const queryParams: SquadQueryParams = {
    search: typeof resolvedSearchParams.search === "string" ? resolvedSearchParams.search : undefined,
    category: typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category : undefined,
    tech: typeof resolvedSearchParams.tech === "string" ? resolvedSearchParams.tech : undefined,
    teamSize: typeof resolvedSearchParams.teamSize === "string" ? resolvedSearchParams.teamSize as any : undefined,
    sort: typeof resolvedSearchParams.sort === "string" ? resolvedSearchParams.sort as any : undefined,
    page: typeof resolvedSearchParams.page === "string" ? Number(resolvedSearchParams.page) : undefined,
    limit: typeof resolvedSearchParams.limit === "string" ? Number(resolvedSearchParams.limit) : undefined,
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Filters Sidebar | Filter Section */}
          <SquadFilters />

          {/* Right Content Section */}
          <div className="flex-1 w-full">
            <SquadSearchBar />

            {/* Skeleton Loader */}
            <Suspense 
              key={JSON.stringify(queryParams)} 
              fallback={<FeaturesSkeleton gridCount={3} count={12} />}
            >
              <ExploreSquadsWrapper searchParams={queryParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};


const ExploreSquadsWrapper = async ({ searchParams }: { searchParams: SquadQueryParams }) => {
  const pageParam = searchParams?.page;
  const limitParam = searchParams?.limit;

  const params: SquadQueryParams = {
    search: searchParams?.search || undefined,
    category: searchParams?.category || undefined,
    tech: searchParams?.tech || undefined,
    teamSize: searchParams?.teamSize || undefined,
    sort: searchParams?.sort || "latest",
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 6,
  };

  const squads = await getAllSquads(params);

  return <ExploreSquadsContent squads={squads} />;
};

export default ExploreSquads;

