import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 gap-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-12 w-12 rounded-full bg-blue-500/10 blur-xl animate-pulse" />

        <div className="h-10 w-10 rounded-full border-[3px] border-gray-800" />

        <div className="absolute h-10 w-10 animate-spin rounded-full border-[4px] border-transparent border-t-blue-500 border-r-blue-500/30" />
      </div>

      <span className="text-xs font-medium text-gray-500 tracking-wider animate-pulse">
        LOADING
      </span>
    </div>
  );
};

export default loading;
