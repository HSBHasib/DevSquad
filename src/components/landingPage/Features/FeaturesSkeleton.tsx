import React from "react";

interface FeaturesSkeletonProps {
  count?: number; 
  gridCount?: number;
}
const FeaturesSkeleton = ({ gridCount = 4 , count = 4 }: FeaturesSkeletonProps) => {
    return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCount} gap-3 w-full animate-pulse`}>
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="flex flex-col justify-between border border-gray-800 bg-[#0C101A]/90 rounded-2xl overflow-hidden min-h-120 p-5"
        >
          {/* Thumbnail  */}
          <div className="w-full aspect-16/10 bg-gray-900 rounded-xl mb-4" />
          
          <div className="flex flex-col grow justify-between space-y-4">
            <div className="space-y-2">
              {/* Title line */}
              <div className="h-5 bg-gray-800 rounded w-3/4" />
              {/* Description lines */}
              <div className="h-3 bg-gray-800 rounded w-full" />
              <div className="h-3 bg-gray-800 rounded w-5/6" />
            </div>
            
            <div className="space-y-2 mt-4">
              <div className="h-3 bg-gray-800 rounded w-1/3" />
              <div className="flex gap-1.5">
                <div className="h-5 bg-gray-800 rounded w-16" />
                <div className="h-5 bg-gray-800 rounded w-20" />
              </div>
            </div>
            
            {/* Button */}
            <div className="h-10 bg-gray-800/60 border border-gray-800 rounded-xl w-full mt-6" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturesSkeleton
