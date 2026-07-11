"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  GoOrganization,
  GoGitBranch,
  GoTerminal,
  GoCheckCircle,
  GoCpu,
} from "react-icons/go";

// Interface for Team Making Steps
interface StepItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const TeamMake = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const codeLineVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Team making steps
  const steps: StepItem[] = [
    {
      title: "Define Stack & Routing Rules",
      desc: "Deploy your framework configuration via the protected `/squads/create` module. Specify targeted tech domains like the MERN architecture stack or dynamic Next.js App Router parameters to instantly map your core operational requirements.",
      icon: <GoTerminal size={18} className="text-indigo-400" />,
    },
    {
      title: "Vetted Skill Identity Matching",
      desc: "Bypass manual screening. BetterAuth verification routines and native MongoDB data aggregation streams instantly filter active candidates by parsing their actual GitHub metrics and production-grade validation logs to secure project integrity.",
      icon: <GoCpu size={18} className="text-purple-400" />,
    },
    {
      title: "Synchronize Console & Codebase",
      desc: "Once allocation metrics hit structural requirements, private workspace access credentials trigger dynamically. Instantly transition from global explorer listings straight to your centralized `/squads/manage` deployment table.",
      icon: <GoGitBranch size={18} className="text-cyan-400" />,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-6 pt-20"
    >
      <div className="flex flex-col items-center mb-10">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-[10px] font-semibold tracking-wide mb-3 backdrop-blur-md"
        >
          <GoOrganization size={14} />
          AUTOMATED DEPLOYMENT ENGINE
        </motion.div>

        {/* Main Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center leading-tight mb-4"
        >
          Recruit Elite Builders & Ship Scalable Web MVPs.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl text-center"
        >
          Eliminate the friction of team formation. DevSquad automates
          micro-team alignment across type-safe systems, handling secure data
          validation clusters from initial routing down to the index.ts runtime
          hook.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          {/* 3 Steps to Automate Team Formation */}
          <div className="flex flex-col gap-6 w-full">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-800/60 hover:bg-gray-900/10 transition-all duration-300 group"
              >
                {/* Icon Box */}
                <div className="h-10 w-10 rounded-xl bg-gray-900/40 border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-indigo-500/20 group-hover:bg-indigo-600/5 transition-colors">
                  {step.icon}
                </div>
                {/* Text Part */}
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-white text-base group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 💻 Right Side: High-Tech Dashboard Window (lg:col-span-7) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 relative w-full border border-gray-800 bg-[#0E131F]/40 backdrop-blur-xl p-6 rounded-2xl shadow-2xl overflow-hidden min-h-100 flex flex-col justify-between"
        >
          {/* Internal Top Glow Effect */}
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-[50px] pointer-events-none" />

          {/* Window Header (macOS Style 3 Dots) */}
          <div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-xs text-gray-500 tracking-wider">
                squad-pipeline.sh
              </span>
              <div className="w-10" />
            </div>

            {/* Simulated Console Output Lines (with Motion Trigger) */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="font-mono text-xs text-gray-400 space-y-3.5 pl-2"
            >
              <motion.p variants={codeLineVariants} className="text-indigo-400">
                $ devsquad core-pipeline --init --project="PixGen-Engine"
              </motion.p>
              <motion.p variants={codeLineVariants} className="text-gray-500">
                &gt; Fetching stack configurations... Identified [MERN Stack,
                Next.js, BetterAuth]
              </motion.p>
              <motion.p variants={codeLineVariants} className="text-gray-500">
                &gt; Database Verification: Establishing native MongoDB Atlas
                connection cluster... [CONNECTED]
              </motion.p>
              <motion.p
                variants={codeLineVariants}
                className="text-purple-400 flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
                &gt; Routing System: Synchronizing live dashboard matrix for
                KeenKeeper application...
              </motion.p>
              <motion.p
                variants={codeLineVariants}
                className="text-emerald-400 flex items-center gap-2"
              >
                <GoCheckCircle className="shrink-0" />
                &gt; Synchronization Complete: Production-grade architectural
                metrics successfully isolated.
              </motion.p>
            </motion.div>
          </div>

          {/* Window Footer Status Box */}
          <motion.div
            variants={codeLineVariants}
            className="mt-8 border border-gray-800 bg-[#090D16]/60 rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                4/4
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">
                  Squad Allocation Criteria
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  Target: Tiles Gallery Editorial Node
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md">
              READY TO OPERATE
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamMake;

