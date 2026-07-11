"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const CTASection = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto px-6 py-18"
    >
      {/* Main CTA Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-linear-to-br from-[#5352ED]/80 via-[#4834DF]/90 to-[#30336B] px-8 py-18 text-center shadow-2xl">
        {/* 📝 Text container */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Title */}
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to Build Something <br className="hidden sm:inline" />{" "}
            Awesome?
          </motion.h2>

          {/* Sub-title */}
          <motion.p variants={itemVariants} className="text-white/80 text-sm sm:text-base font-normal max-w-xl leading-relaxed mb-8 md:mb-10">
            Join the thousands of developers already shipping successful
            projects through DevSquad. Your team is waiting.
          </motion.p>

          {/* (CTA Buttons) */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 w-full sm:w-auto max-[400px]:flex-col">
            {/* Get Started button */}
            <Link
              href="/auth/register"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#4834DF] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-98 text-center"
            >
              Get Started
            </Link>

            {/* Learn More button */}
            <Link
              href="/about"
              className="w-full sm:w-auto bg-black/15 hover:bg-black/25 text-white border border-white/10 text-sm font-medium px-7 py-3.5 rounded-xl transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CTASection;

