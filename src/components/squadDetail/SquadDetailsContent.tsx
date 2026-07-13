"use client";

import React from "react";
import { motion, Variants,  } from "framer-motion"; 
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoArrowLeft, GoLink, GoPeople, GoDatabase, GoTerminal, GoVersions } from "react-icons/go";
import { SquadData } from "@/utils/squadInterface"; 

interface SquadDetailsContentProps {
  squad: SquadData;
}

const SquadDetailsContent = ({ squad }: SquadDetailsContentProps) => {
  const router = useRouter();

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const totalSlots = squad.totalSlots ?? 0;
  const joinedCount = squad.joinedCount ?? 0;
  const openSlots = totalSlots - joinedCount;

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={fadeIn} 
      className="space-y-10 text-gray-200"
    >
      {/* Back Button Using Router */}
      <button 
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-indigo-400 transition-colors duration-200 group cursor-pointer"
      >
        <GoArrowLeft className="transition-transform duration-150 transform group-hover:-translate-x-1" size={16} />
        Return to Previous List
      </button>

      {/* Top Header Section */}
      <div className="relative border -mt-4 border-gray-800/80 bg-linear-to-br from-[#0B0F19] to-[#070A13] rounded-3xl p-7 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-2 space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-md uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
            {squad.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {squad.projectName}
          </h1>
          <p className="text-gray-400 text-sm font-medium max-w-2xl leading-relaxed -mt-1">
            {squad.shortDescription}
          </p>
        </div>

        {/* Right Side Project Image */}
        <div className="relative w-full aspect-16/10 lg:aspect-square max-h-65 rounded-2xl overflow-hidden border border-gray-800 shadow-xl group/card">
          <Image 
            src={squad.coverImage || "/"} 
            alt={squad.projectName}
            fill
            priority
            className="object-cover opacity-90 group-hover/card:scale-105 transition duration-400"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Main Bottom Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Columns */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wider flex items-center gap-2 uppercase">
              <GoTerminal className="text-indigo-500" /> Full Scope Blueprint
            </h3>
            <div className="bg-[#0B0F19]/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/60 text-sm text-gray-400 leading-relaxed shadow-lg">
              {squad.fullScope}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wider flex items-center gap-2 uppercase">
              <GoVersions className="text-indigo-500" /> Architecture Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {squad.techStack?.map((tech: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-[#0B0F19]/40 border border-gray-800/40 p-4 rounded-xl hover:border-gray-700 transition duration-200">
                  <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <GoDatabase size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-300">{tech} Protocol</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="space-y-6">
          <div className="bg-[#0B0F19] border border-gray-800/60 rounded-3xl p-6 shadow-xl space-y-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-800 pb-3">Squad Specifications</h4>
            
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-500 font-medium">Project State</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Recruiting
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-t border-gray-800/40">
                <span className="text-gray-500 font-medium">Team Size Capacity</span>
                <span className="text-gray-300 font-medium">{squad.capacity} Members Max</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-t border-gray-800/40">
                <span className="text-gray-500 font-medium">Open Positions</span>
                <span className={`px-2 py-0.5 rounded font-bold ${openSlots > 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                  {openSlots > 0 ? `${openSlots} Slots Open` : "Squad Full"}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-t border-gray-800/40">
                <span className="text-gray-500 font-medium">Created On</span>
                <span className="text-gray-400">
                  {squad.createdAt ? new Date(squad.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "N/A"}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-800/40">
                <span className="text-gray-500 font-medium block">Core Tech Engine</span>
                <div className="flex flex-wrap gap-1.5">
                  {squad.techStack?.map((tech: string, idx: number) => (
                    <span key={idx} className="bg-[#070A13] text-gray-300 border border-gray-800 px-2 py-1 rounded text-[10px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a 
                href={squad.communicationLink} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition duration-150"
              >
                <GoLink size={14} />
                Apply to Join Squad
              </a>
            </div>

            <div className="text-[10px] text-gray-600 text-center flex items-center justify-center gap-1">
              <GoPeople size={12} /> Secure recruitment protected by BetterAuth
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default SquadDetailsContent;
