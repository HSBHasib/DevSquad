"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GoVerified, GoShield, GoHubot } from "react-icons/go";

// Interface for fetures content
interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const ChooseUs = () => {
  const containerVariants: Variants = {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Features content
  const features: FeatureItem[] = [
    {
      id: "01",
      title: "Zero Ghosting, Pure Commitments",
      description: "Every developer profile is vetted through verified GitHub repositories and core skill evaluation layers, ensuring high-speed collaboration without sudden execution drops.",
      icon: <GoVerified size={20} className="text-indigo-400" />,
      tag: "<> VERIFICATION LAYER V2.0",
    },
    {
      id: "02",
      title: "Secure Infrastructure Integration",
      description: "Our pipelines natively abstract secure data allocation with MongoDB Atlas clustering and session management protected entirely by BetterAuth verification routines.",
      icon: <GoShield size={20} className="text-purple-400" />,
      tag: "O AUTH PROTOCOL AES-256",
    },
    {
      id: "03",
      title: "Asynchronous Coordination Nodes",
      description: "Instantly fetch secure Discord communication nodes or custom team workspace links automated right when your dynamic squad allocation criteria are fully met.",
      icon: <GoHubot size={20} className="text-cyan-400" />,
      tag: "⇄ ASYNC NODE LATENCY: 4MS",
    },
  ];

  return (

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-6 pt-20"
    >
      
      {/* Section Header Text */}
      <motion.div variants={cardVariants} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Why Elite Teams Build On DevSquad
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          We eliminate the traditional friction of developer recruitment and team synchronization using fully automated verification guardrails.
        </p>
      </motion.div>

      {/* Feature Cards Grid show card in 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800/60 rounded-3xl overflow-hidden bg-[#090D16]/20 divide-y md:divide-y-0 md:divide-x divide-gray-800/60 shadow-2xl">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            whileHover={{ y: -4, backgroundColor: "rgba(99, 102, 241, 0.02)" }}
            className="group relative flex flex-col justify-between p-8 transition-colors duration-300 min-h-80"
          >
            <div>
              {/* Top Content - Serial Number and Custom Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-gray-700 tracking-wider group-hover:text-indigo-500/40 transition-colors">
                  {feature.id}
                </span>
                <span className="p-2 rounded-xl bg-gray-900/40 border border-gray-800 group-hover:border-indigo-500/20 group-hover:bg-indigo-600/5 transition-all duration-300">
                  {feature.icon}
                </span>
              </div>

              {/* Main Title */}
              <h3 className="text-lg font-bold text-white tracking-wide mb-4 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>

            {/*  */}
            <div className="mt-8">
              <span className="text-[11px] font-semibold text-gray-500 tracking-widest uppercase group-hover:text-gray-400 transition-colors">
                {feature.tag}
              </span>
            </div>

          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default ChooseUs;

