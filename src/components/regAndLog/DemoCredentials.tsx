import React from "react";

interface DemoCredentialsProps {
  injectCredentials: (role: "user" | "admin") => void;
}

const DemoCredentials: React.FC<DemoCredentialsProps> = ({ injectCredentials }) => {
  return (
    <div className="w-full mt-8 pt-6 border-t border-gray-800/80 relative">
      {/* Header */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0C101A] px-4">
        <span className="text-[9px] text-gray-500 tracking-[0.25em] uppercase whitespace-nowrap">
          Quick Accelerators
        </span>
      </div>
      
      {/* User and Admin Credential Buttons */}
      <div className="grid grid-cols-2 gap-4 w-full mt-2">
        {/* Inject User Button */}
        <button
          type="button"
          onClick={() => injectCredentials("user")}
          className="flex items-center justify-center gap-1.5 border border-dashed border-gray-800 hover:border-indigo-500/40 bg-gray-900/10 hover:bg-indigo-600/5 text-gray-400 hover:text-indigo-400 text-xs py-2.5 rounded-full transition-all active:scale-97"
        >
          <span className="text-yellow-500 text-xs">⚡</span>
          Inject User
        </button>

        {/* Inject Admin Button */}
        <button
          type="button"
          onClick={() => injectCredentials("admin")}
          className="flex items-center justify-center gap-1.5 border border-dashed border-gray-800 hover:border-purple-500/40 bg-gray-900/10 hover:bg-purple-600/5 text-gray-400 hover:text-purple-400 text-xs py-2.5 rounded-full transition-all active:scale-97"
        >
          <span className="text-gray-400 text-xs">🛡️</span>
          Inject Admin
        </button>
      </div>
    </div>
  );
};

export default DemoCredentials;


