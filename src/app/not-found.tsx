import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const NotFound = () => {
   return (
    <div className="min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 z-10">
        {/* Error Code */}
        <h1 className="text-8xl font-black tracking-tighter bg-linear-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent opacity-80 select-none">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
            The page you are trying to access does not exist in our network routing.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 rounded-xl text-sm font-medium transition-all shadow-xl active:scale-[0.98]"
          >
            <HiOutlineArrowNarrowLeft size={16} />
            Return to Home Page
          </Link>
        </div>
      </div>

      {/* Mini Security Stamp Footer */}
      <p className="absolute bottom-6 text-center text-[9px] text-gray-500 tracking-widest uppercase pointer-events-none">
        DevSquad Routing System // Status 404
      </p>
    </div>
  );
}

export default NotFound;

