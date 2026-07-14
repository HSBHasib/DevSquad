"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineShieldExclamation } from "react-icons/hi2";


const Forbidden = () => {
  return (
    <div className="min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-orange-600/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 z-10">
        {/* Shield Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-950/30 border border-orange-900/40 text-orange-500 mx-auto mb-2">
          <HiOutlineShieldExclamation size={30} />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Access Forbidden
          </h2>
          <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
            Clearance level mismatch. Your current identity credentials do not
            hold permissions for this operational zone.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 rounded-xl text-sm font-medium transition-all shadow-xl active:scale-[0.98]"
          >
            Return to Home
          </Link>
        </div>
      </div>

      <p className="absolute bottom-6 text-center text-[9px] text-orange-800 tracking-widest uppercase pointer-events-none">
        DevSquad Firewall Module // Status 403
      </p>
    </div>
  );
};

export default Forbidden;