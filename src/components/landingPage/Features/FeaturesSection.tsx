"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { GoArrowRight, GoGitCommit, GoEye } from "react-icons/go";

// Project data layout architecture interface
interface ProjectCardItem {
  id: number;
  title: string;
  category: string;
  description: string;
  bannerUrl: string;
  techStack: string[];
  totalSlots: number;
  joinedCount: number;
}

// Static Squad Data
const projectsData: ProjectCardItem[] = [
  {
    id: 1,
    title: "KeenKeeper App",
    category: "Startup MVP",
    description:
      "A comprehensive relational friendship interaction tracking dashboard system built to automate long-term communication management layers seamlessly.",
    bannerUrl:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Tailwind CSS", "Recharts"],
    totalSlots: 4,
    joinedCount: 1,
  },
  {
    id: 2,
    title: "PixGen Engine",
    category: "Hackathon Project",
    description:
      "High-speed automated image processing and generative pipeline utilizing BetterAuth token parameters with underlying native MongoDB Atlas cluster integration.",
    bannerUrl:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["BetterAuth", "MongoDB Atlas", "Node.js"],
    totalSlots: 4,
    joinedCount: 2,
  },
  {
    id: 3,
    title: "Tiles Gallery Node",
    category: "Learning Cohort",
    description:
      "Editorial structural layout showcase tracking artisanal surface materials database configurations, complete with high-end SwiperJS sliding view optimization layer.",
    bannerUrl:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Next.js", "SwiperJS", "TypeScript"],
    totalSlots: 3,
    joinedCount: 1,
  },
  {
    id: 4,
    title: "DocAppoint Portal",
    category: "Startup MVP",
    description:
      "Comprehensive medical booking tracking engine featuring strict appointment validation logic blocks, custom slots control, and MERN core stack data storage pipelines.",
    bannerUrl:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    totalSlots: 4,
    joinedCount: 4,
  },
];

const FeaturesSection = () => {
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
            Join high-performance teams building the next generation of web
            software.
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

      {/* Card Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {projectsData.map((project) => {

          // Available Slots
          const availableSlots = project.totalSlots - project.joinedCount;
          const isFull = availableSlots <= 0;

          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between border border-gray-800 bg-[#0C101A]/90 rounded-2xl overflow-hidden shadow-2xl hover:border-gray-700/60 transition-all duration-300 min-h-120"
            >
              {/* 🖼️ Component background card boundary image context layout vector frame */}
              <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-900 border-b border-gray-800/40">
                <img
                  src={project.bannerUrl || "/"}
                  alt={project.title || "Project Banner"}
                  width={100}
                  height={100}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-102 transition-all duration-500"
                />

                {/* Context Category Tag Badge */}
                <span className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md text-gray-300 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md border border-gray-800 uppercase">
                  {project.category || "General"}
                </span>

                {/* Slots Tracker Counter Layer Token */}
                <span
                  className={`absolute top-3 right-3 z-10 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                    isFull
                      ? "bg-red-500/10 text-red-400 border-red-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isFull ? "bg-red-400" : "bg-emerald-400 animate-pulse"}`}
                  />
                  {isFull ? "FULL" : `${availableSlots} SLOTS OPEN`}
                </span>
              </div>

              {/* 📝 Metadata and structural content layout blocks */}
              <div className="flex flex-col grow p-5 text-left justify-between">
                <div className="flex flex-col gap-2.5">
                  {/* Large bold tracking header text */}
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors duration-200 line-clamp-1">
                    {project.title || "Untitled Squad"}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-normal line-clamp-3">
                    {project.description ||
                      "No engineering parameters provided."}
                  </p>
                </div>

                {/* Tech Stack Chips Mapping Tokens */}
                <div className="mt-5 flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-xs">
                    <GoGitCommit size={15} className="text-indigo-400" />
                    <span className="text-gray-500">Tech Stack :</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(project.techStack) &&
                      project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-900/60 border border-gray-800 text-gray-300 text-[11px] px-2.5 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Primary Action Hook Button */}
                <div className="mt-6 pt-4 border-t border-gray-800/60">
                  <Link
                    href={`/squads/${project.id}`}
                    className="w-full inline-flex items-center justify-center bg-gray-800/40 hover:bg-indigo-600 text-gray-300 hover:text-white border border-gray-800 hover:border-indigo-600 text-xs font-semibold py-3 rounded-xl transition-all duration-200 active:scale-98 shadow-md"
                  >
                    <GoEye size={14} className="mr-1.5" />
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;

