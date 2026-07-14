"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineRefresh } from "react-icons/hi";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-red-600/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 z-10">
        {/* Error Sign */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-950/30 border border-red-900/40 text-red-500 text-3xl font-mono select-none mx-auto mb-2">
          ⚠️
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Execution Failure
          </h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
            An unexpected crash occurred within the processing layer. The core
            system pipeline has halted.
          </p>
        </div>

        {/* Retry Button */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-950/40 hover:bg-red-900/30 border border-red-900/50 text-red-200 rounded-xl text-sm font-medium transition-all shadow-xl active:scale-[0.98] cursor-pointer"
          >
            <HiOutlineRefresh size={16} />
            Refresh
          </button>
          <button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 rounded-xl text-sm font-medium transition-all shadow-xl active:scale-[0.98]"
            >
              <HiOutlineArrowNarrowLeft size={16} />
              Home Page 
            </Link>
          </button>
        </div>
      </div>

      <p className="absolute bottom-6 text-center text-[9px] text-red-900 tracking-widest uppercase pointer-events-none">
        DevSquad Shield Log // Runtime Exception
      </p>
    </div>
  );
};

export default ErrorPage;
