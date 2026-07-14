"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft, HiOutlineLockClosed } from "react-icons/hi";


const Unauthorized = () => {
  
  return (
    <div className="min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-amber-600/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 z-10">
        {/* Lock Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-950/20 border border-amber-900/40 text-amber-500 mx-auto mb-2">
          <HiOutlineLockClosed size={28} />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Authentication Required
          </h2>
          <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
            Your current transmission session lacks credentials. Please log in
            to synchronize your security token.
          </p>
        </div>

        {/* Auth Button */}
        <div className="pt-2 flex items-center justify-center gap-3">
          
          <Link
            href="/auth/login" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl text-sm font-medium transition-all shadow-lg shadow-amber-950/20 active:scale-[0.98]"
          >
            Access Identity Node
          </Link>
           
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 rounded-xl text-sm font-medium transition-all shadow-xl active:scale-[0.98]"
            >
              <HiOutlineArrowNarrowLeft size={16} />
              Home Page 
            </Link>
          
        </div>
        
      </div>

      <p className="absolute bottom-6 text-center text-[9px] text-amber-800 tracking-widest uppercase pointer-events-none">
        DevSquad Authentication Matrix // Status 401
      </p>
    </div>
  );
};

export default Unauthorized;