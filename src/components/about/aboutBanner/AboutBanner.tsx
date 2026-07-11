"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const AboutBanner = () => {
  const bannerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} 
      variants={bannerContainerVariants}
      className="w-full max-w-4xl mx-auto text-center flex flex-col items-center py-14 px-6"
    >
      {/* Small Badge */}
      <motion.span
        variants={itemVariants}
        className="text-[11px] font-bold text-indigo-400 tracking-widest uppercase border border-indigo-500/20 bg-indigo-600/5 px-3 py-1 rounded-full mb-3 backdrop-blur-md"
      >
        ✦ THE SQUAD BLUEPRINT
      </motion.span>

      {/* Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.14] mb-6"
      >
        Engineering the Future of <br />
        <span className="bg-linear-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Dynamic Matchmaking.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-gray-400 text-sm sm:text-base font-normal leading-relaxed mb-12"
      >
        DevSquad is an open ecosystem designed to eliminate the operational
        friction of micro-team formation. We abstract user validation, stack
        isolation, and team allocation parameters into a single automated
        pipeline.
      </motion.p>

      {/* Banner Image */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        className="relative w-full aspect-video rounded-3xl border border-gray-800/80 bg-linear-to-b from-[#0E1322]/60 to-transparent p-1 shadow-2xl flex items-center justify-center overflow-hidden group"
      >
        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent opacity-100 transition-opacity" />

        <div className="w-full h-full relative bg-gray-950/40 backdrop-blur-xl flex items-center justify-center">
          <Image
            src="/aboutBanner.png"
            alt="DevSquad Architecture Banner"
            fill
            sizes="(max-w-7xl) 100vw, 80vw"
            priority
            className="object-cover rounded-3xl opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutBanner;
