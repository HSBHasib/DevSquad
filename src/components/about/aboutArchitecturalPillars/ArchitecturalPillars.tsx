"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GoCpu, GoShield, GoDatabase, GoHubot } from "react-icons/go";

interface PillarItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ArchitecturalPillars = () => {
  const pillarsContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.12, 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const pillars: PillarItem[] = [
    {
      title: "Decoupled Autonomy",
      desc: "Operating on a strict split architecture framework. The frontend tied to App Router sustains dynamic client configurations while a stand-alone / native Express node handles backend control.",
      icon: <GoCpu size={18} className="text-indigo-400" />,
    },
    {
      title: "Vetted Identity Validation",
      desc: "Security controls are mitigated through integrated BetterAuth session keys synchronized with raw GitHub data profiles to ensure complete cross-network workspace identity integrity.",
      icon: <GoShield size={18} className="text-cyan-400" />,
    },
    {
      title: "Native Cluster Persistence",
      desc: "Bypassing heavy ORM layers entirely. The infrastructure interfaces natively with MongoDB Atlas drivers to handle dynamic queries, real-time lookups, and fault-tolerant transaction speeds.",
      icon: <GoDatabase size={18} className="text-purple-400" />,
    },
    {
      title: "Asynchronous Workspace Nodes",
      desc: "System provides explicit custom team communication platforms, Discord allocation tokens, and server 100% capacity sync vectors, automating server hosting routing instantly.",
      icon: <GoHubot size={18} className="text-emerald-400" />,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={pillarsContainerVariants}
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-gray-900"
    >
      {/* Header */}
      <div className="text-left max-w-xl mb-12">
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-2">
          The Four Architectural Pillars
        </motion.h3>
        <motion.p variants={itemVariants} className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          Building the foundation of resilient, scalable micro-teams through rigorous engineering standards.
        </motion.p>
      </div>

      {/* 4 Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.01)"}}
            className="flex flex-col border border-gray-900 bg-[#0A0E17]/40 p-5 rounded-xl transition-all duration-300 min-h-65 text-left"
          >
            <div className="h-9 w-9 rounded-lg bg-gray-900/60 border border-gray-800 flex items-center justify-center shrink-0 mb-5">
              {pillar.icon}
            </div>
            <h4 className="font-bold text-white text-base mb-3 tracking-wide">{pillar.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed font-normal">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ArchitecturalPillars;

