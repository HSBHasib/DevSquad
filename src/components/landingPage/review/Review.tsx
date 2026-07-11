"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// Review data interface
interface ReviewItem {
  id: number;
  name: string;
  role: string;
  roleColor: string;
  avatarInitials: string;
  comment: string;
}

const Review = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Reviews data
  const reviews: ReviewItem[] = [
    {
      id: 1,
      name: "Hasibur Rahman",
      role: "MERN Developer",
      roleColor: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
      avatarInitials: "HR",
      comment: `"DevSquad completely removed the noise of job hunting. Within a week, I was matched with an AI startup that actually valued my TypeScript architecture."`,
    },
    {
      id: 2,
      name: "Asif Elahi",
      role: "Next.js Specialist",
      roleColor: "border-indigo-500/20 bg-indigo-500/5 text-indigo-400",
      avatarInitials: "AE",
      comment: `"Forming micro-teams on DevSquad solved our hackathon workflow block. We designed the entire editorial system for Tiles Gallery with complete type safety without any friction."`,
    },
    {
      id: 3,
      name: "Tanvir Ahmed",
      role: "Backend Architect",
      roleColor: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
      avatarInitials: "TA",
      comment: `"Integrating BetterAuth sessions with MongoDB Atlas layers used to be a headache. Building the PixGen engine with verified builders here made the deployment incredibly seamless."`,
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
      {/* Main Header */}
      <motion.div variants={cardVariants} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Elite Developers, Global Impact
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-normal">
          Hear from those who found their perfect squad.
        </p>
      </motion.div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={cardVariants}
            className="flex flex-col border border-gray-800 bg-[#0E131F]/40 p-6 md:p-8 rounded-2xl hover:border-t-4  hover:border-gray-700 transition-all duration-400 shadow-xl"
          >
            {/* Main Content */}
            <div className="flex items-center gap-4 mb-6">
              {/* Avatar */}
              <div className="h-11 w-11 rounded-full bg-linear-to-br from-gray-800 to-gray-700 flex items-center justify-center text-white font-semibold text-sm tracking-wider shrink-0 border border-gray-600/30">
                {review.avatarInitials}
              </div>

              {/* Name and Role */}
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-semibold text-white text-base tracking-wide leading-tight">
                  {review.name}
                </h3>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded border text-xs font-medium tracking-wide ${review.roleColor}`}
                >
                  {review.role}
                </span>
              </div>
            </div>

            {/* Review Comment */}
            <p className="text-gray-400 text-sm leading-relaxed font-normal italic">
              {review.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Review;

