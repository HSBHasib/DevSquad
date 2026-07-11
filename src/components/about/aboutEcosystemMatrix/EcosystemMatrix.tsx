"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GoTerminal, GoStack, GoServer, GoCpu } from "react-icons/go";

interface MatrixNode {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const EcosystemMatrix = () => {
  const matrixContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const nodes: MatrixNode[] = [
    {
      title: "KeenKeeper Node",
      desc: "Focus: Relational friendship interaction tracking system / Relational Node & dashboard for stack memory validation.",
      icon: <GoStack size={14} className="text-indigo-400" />,
    },
    {
      title: "PixGen Engine",
      desc: "Focus: Automated image processing running on custom validation triggers and neural style-transfer pipelines.",
      icon: <GoCpu size={14} className="text-purple-400" />,
    },
    {
      title: "Tiles Gallery Node",
      desc: "Focus: Material collection node layer targeting artisanal surface databases and spatial metrics visualization.",
      icon: <GoServer size={14} className="text-cyan-400" />,
    },
  ];

  // Status Interface
  interface MetabolismStatus {
    metric: string;
    label: string;
  }

  // Status
  const statusMetrics: MetabolismStatus[] = [
    { metric: "100%", label: "Type-Safe TypeScript" },
    { metric: "Zero", label: "Minimum Layer Overhead" },
    { metric: "Native", label: "MongoDB Atlas Drivers" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={matrixContainerVariants}
      className="w-full max-w-7xl mx-auto px-6 pt-20 border-t border-gray-900 flex flex-col gap-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        {/* Left Column */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex flex-col items-start justify-between min-h-75"
        >
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              Immutable Ecosystem Matrix
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              The DevSquad backbone relies on a series of specialized nodes that
              provide modular functionality across the matchmaking lifecycle.
              Each node is isolated, immutable, and strictly validated.
            </p>
          </div>

          <div className="w-full border border-gray-800 bg-gray-950/40 rounded-xl p-4 text-[11px] text-gray-400 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400">
              <GoTerminal size={14} className="animate-pulse" />
              <span>Active Project References</span>
            </div>
            <p className="text-gray-500">&gt; Validation Matrix 2.4.0-Stable</p>
            <div className="flex gap-6 text-[10px] text-gray-500 pt-1">
              <span>LATENCY: 4MS</span>
              <span>UPTIME: 99.99%</span>
              <span>ENCRYPTION: AES-256</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Node List Window */}
        <div className="lg:col-span-6 flex flex-col gap-3 w-full">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-gray-900/60 bg-[#0E1322]/20 hover:border-gray-800 transition-colors duration-200"
            >
              <div className="h-8 w-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                {node.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-white text-sm tracking-wide">
                  {node.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-normal">
                  {node.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottm Part */}
      <div className="border-t border-gray-900 pt-10 grid grid-cols-3 gap-4 text-center">
        {statusMetrics.map((status, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col gap-1"
          >
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {status.metric}
            </span>
            <span className="text-[10.5px] text-gray-500 tracking-widest uppercase">
              {status.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EcosystemMatrix;

