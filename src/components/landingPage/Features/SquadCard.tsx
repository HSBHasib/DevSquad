"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { GoGitCommit, GoEye } from "react-icons/go";
import { SquadData } from "@/utils/squadInterface";

interface SquadCardProps {
  squad: SquadData;
  itemVariants: Variants;
}

export default function SquadCard({ squad, itemVariants }: SquadCardProps) {
  const totalSlots = squad.totalSlots !== undefined ? squad.totalSlots : 4;
  const joinedCount = squad.joinedCount !== undefined ? squad.joinedCount : 1;
  
  const availableSlots = totalSlots - joinedCount;
  const isFull = availableSlots <= 0;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between border border-gray-800 bg-[#0C101A]/90 rounded-2xl overflow-hidden shadow-2xl hover:border-gray-700/60 transition-all duration-300 min-h-120"
    >
      {/* Banner Area */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-900 border-b border-gray-800/40">
        <img
          src={squad.coverImage || "/"}
          alt={squad.projectName || "Project Banner"}
          className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
        />

        <span className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md text-gray-300 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md border border-gray-800 uppercase">
          {squad.category || "General"}
        </span>

        {/* Slot Tracker */}
        <span
          className={`absolute top-3 right-3 z-10 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
            isFull
              ? "bg-red-500/10 text-red-400 border-red-500/20"
              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isFull ? "bg-red-400" : "bg-emerald-400 animate-pulse"}`} />
          {isFull ? "FULL" : `${availableSlots} SLOTS OPEN`}
        </span>
      </div>

      {/* Content Area */}
      <div className="flex flex-col grow p-5 text-left justify-between">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors duration-200 line-clamp-1">
            {squad.projectName || "Untitled Squad"}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed font-normal line-clamp-3">
            {squad.shortDescription || "No engineering parameters provided."}
          </p>
        </div>

        {/* Tech Stack Area */}
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-xs">
            <GoGitCommit size={15} className="text-indigo-400" />
            <span className="text-gray-500">Tech Stack :</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {Array.isArray(squad.techStack) && squad.techStack.length > 0 ? (
              squad.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-900/60 border border-gray-800 text-gray-300 text-[11px] px-2.5 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-gray-600 text-[11px]">No tech stack parameters.</span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-gray-800/60">
          <Link
            href={`/squad-detail/${squad._id}`}
            className="w-full inline-flex items-center justify-center bg-gray-800/40 hover:bg-indigo-600 text-gray-300 hover:text-white border border-gray-800 hover:border-indigo-600 text-xs font-semibold py-3 rounded-xl transition-all duration-200 active:scale-98 shadow-md"
          >
            <GoEye size={14} className="mr-1.5" />
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
