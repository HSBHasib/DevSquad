"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RxEnvelopeClosed, RxPerson } from 'react-icons/rx';
import { userSessionInterface } from '@/utils/userSessionInterface';
import { FaShieldAlt } from 'react-icons/fa';

interface ProfileContentProps {
  user: userSessionInterface | null | undefined; 
}

const ProfileContent = ({ user }: ProfileContentProps) => {
  if (!user) {
    return (
      <div className="text-gray-400 text-sm py-10 text-center">
        No active user session trace found. Please sign in again.
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-3xl mx-auto bg-[#0B0F19] border border-gray-800/60 rounded-2xl p-6 lg:p-8 shadow-xl"
    >
      {/* Profile Image and Role */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-800/50">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500/50 p-1 bg-[#101524]">
          <Image
            src={user?.image || "/"}
            alt={user?.name || "User_avatar"}
            fill
            className="object-cover rounded-full p-0.5"
            priority
          />
        </div>
        
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">{user?.name}</h2>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FaShieldAlt size={12} />
            {user?.role || "User"}
          </span>
        </div>
      </div>

      {/* ProfileDetails */}
      <div className="mt-6 space-y-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Account Details</h3>
        
        {/* Name */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-[#101524]/50 border border-gray-800/30">
          <span className="text-indigo-400 p-2 bg-indigo-500/5 rounded-lg"><RxPerson size={18} /></span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Full Name</span>
            <span className="text-sm text-gray-200 font-medium">{user?.name || "N/A"}</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-[#101524]/50 border border-gray-800/30">
          <span className="text-indigo-400 p-2 bg-indigo-500/5 rounded-lg"><RxEnvelopeClosed size={18} /></span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Registered Email</span>
            <span className="text-sm text-gray-200">{user?.email || "N/A"}</span>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-center gap-4 p-3 rounded-xl bg-[#101524]/50 border border-gray-800/30">
          <span className="text-indigo-400 p-2 bg-indigo-500/5 rounded-lg"><FaShieldAlt size={18} /></span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Access Control Level</span>
            <span className="text-sm text-gray-200 capitalize">{user?.role || "User Access"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileContent;

