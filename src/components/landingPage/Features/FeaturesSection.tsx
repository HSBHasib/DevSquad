"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { SquadData } from "@/utils/squadInterface";
import SquadCard from "./SquadCard";

interface FeaturesSectionProps {
  squads: SquadData[];
}

const FeaturesSection = ({ squads }: FeaturesSectionProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-6 pt-16"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-800 pb-6 mb-12 text-left">
        <div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
          >
            Explore Featured Open Squads
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm font-normal"
          >
            Join high-performance teams building the next generation of web software.
          </motion.p>
        </div>

        <motion.div variants={itemVariants}>
          <Link
            href="/explore-squads"
            className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors group shrink-0"
          >
            View All Squads
            <GoArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Card Details Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {squads.map((squad, idx) => (
          <SquadCard 
            key={idx} 
            squad={squad} 
            itemVariants={itemVariants}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
