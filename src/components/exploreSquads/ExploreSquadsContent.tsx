"use client";

import { SquadData } from "@/utils/squadInterface";
import { motion, Variants } from "framer-motion";
import SquadCard from "../landingPage/Features/SquadCard";
import { SquadsAPIResponse } from "@/lib/api/squad";
import SquadPagination from "../pagination/SquadPagination";

interface ExploreSquadsContentProps {
  squads: SquadsAPIResponse; 
}

const ExploreSquadsContent = ({ squads }: ExploreSquadsContentProps) => {
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

  const squadList = squads?.data || [];
  const totalFound = squads?.total || 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Squad Count */}
      <motion.p className="text-xs text-gray-500 mb-6 font-medium">
        Showing{" "}
        <span className="text-indigo-400 font-bold">{totalFound}</span>{" "}
        active squads found
      </motion.p>

      {squadList.length === 0 ? (
        <motion.div className="text-center text-gray-500 py-20 bg-[#0B0F19] rounded-2xl border border-gray-800/60">
          No active squads found at the moment.
        </motion.div>
      ) : (
        <>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {squadList.map((squad: SquadData, idx: number) => (
              <SquadCard key={squad._id || idx} squad={squad} itemVariants={itemVariants} />
            ))}
          </div>

          {/* Pagination */}
          <SquadPagination totalItems={totalFound} itemsPerPage={6} />
        </>
      )}
    </motion.div>
  );
};

export default ExploreSquadsContent;
