import React from "react";

const SquadDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#070A13] text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 animate-pulse">
        
        {/* Back Button */}
        <div className="h-4 w-32 bg-gray-800/50 rounded" />
        
        {/* Header Section */}
        <div className="border border-gray-800/60 bg-[#0B0F19] rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-5 w-32 bg-gray-800/60 rounded" />
            <div className="h-12 w-3/4 bg-gray-800/60 rounded-xl" />
            <div className="h-4 w-full bg-gray-800/40 rounded" />
            <div className="h-4 w-5/6 bg-gray-800/40 rounded" />
          </div>
          <div className="w-full aspect-16/10 lg:aspect-square max-h-65 bg-gray-800/60 rounded-2xl" />
        </div>
        
        {/* Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Content side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <div className="h-5 w-40 bg-gray-800/60 rounded" />
              <div className="h-28 w-full bg-gray-800/30 rounded-2xl" />
            </div>
            <div className="space-y-3">
              <div className="h-5 w-40 bg-gray-800/60 rounded" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-16 bg-gray-800/30 rounded-xl" />
                <div className="h-16 bg-gray-800/30 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="h-95 bg-[#0B0F19] border border-gray-800/60 rounded-3xl p-6" />
        </div>

      </div>
    </div>
  );
};

export default SquadDetailsSkeleton;
