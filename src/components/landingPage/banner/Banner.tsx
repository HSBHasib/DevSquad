"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { GoPlus } from "react-icons/go";

// Banner Data
const bannerData = {
  badgeText: "DevSquad",
  titlePrefix: "Assemble Your Dream Team for the Next",
  gradientText: "Billion-Dollar",
  titleSuffix: "Hack.",
  description: "The ultimate platform for developers to find squads, showcase skills, and ship projects that matter. Skip the solo grind and start building with experts."
};

const Banner: React.FC = () => {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {/* SVG the main background design */}
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-800/30 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width={40}
              height={40}
              patternUnits="userSpaceOnUse"
              x="50%"
              y={-1}
            >
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg> 

        {/* Background Blur Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-75 w-125 bg-indigo-600/10 blur-[120px] rounded-full" /> 
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center w-full">

        <motion.div
          key="actual-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants} 
          className="w-full flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.div variants={fadeInUpVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-medium tracking-wide mb-3 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {bannerData.badgeText}
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={fadeInUpVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            {bannerData.titlePrefix}{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
              {bannerData.gradientText}
            </span>{" "}
            {bannerData.titleSuffix}
          </motion.h1>

          {/* Sub-title */}
          <motion.p variants={fadeInUpVariants} className="max-w-2xl text-gray-400 text-base font-normal leading-relaxed mb-10">
            {bannerData.description}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div variants={fadeInUpVariants} className="flex items-center gap-4 w-full sm:w-auto max-[475px]:flex-col">
            <Link
              href="/create-squad"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/25 active:scale-98 text-sm"
            >
              <GoPlus size={22} />
              Create a Squad
            </Link>

            <Link
                  href="/explore-squads"
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-800 hover:border-gray-700 hover:bg-gray-800/30 text-gray-300 hover:text-white font-medium px-7 py-3.5 rounded-xl transition-all active:scale-98 text-sm backdrop-blur-md"
            >
              Browse Opportunities
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
