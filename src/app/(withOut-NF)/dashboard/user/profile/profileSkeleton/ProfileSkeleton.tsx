import React from 'react';

const ProfileSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto bg-[#0B0F19] border border-gray-800/60 rounded-2xl p-6 lg:p-8 shadow-xl animate-pulse">
      {/* Profile Image and Role */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-800/50">
        <div className="w-24 h-24 rounded-full bg-gray-800/60" />
        <div className="space-y-3 w-full max-w-50 flex flex-col items-center sm:items-start">
          <div className="h-5 w-full bg-gray-800/60 rounded-md" />
          <div className="h-4 w-20 bg-gray-800/40 rounded-full" />
        </div>
      </div>

      {/* Account Details Panel */}
      <div className="mt-6 space-y-4">
        <div className="h-3 w-32 bg-gray-800/40 rounded mb-4" />
        
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[#101524]/30 border border-gray-800/20">
            <div className="w-8 h-8 rounded-lg bg-gray-800/60" />
            <div className="space-y-2 flex-1">
              <div className="h-3 w-24 bg-gray-800/40 rounded" />
              <div className="h-4 w-48 bg-gray-800/60 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSkeleton;
