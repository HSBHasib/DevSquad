"use client";

import React from "react";
import { Accordion } from "@heroui/react";
import { motion, Variants } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import {
  GoShieldLock,
  GoFileCode,
  GoTerminal,
  GoCloud,
} from "react-icons/go";

const MotionAccordion = motion(Accordion);

interface FAQItem {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const FAQSection = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.12,
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


  // FAQ Content
  const items: FAQItem[] = [
    {
      id: 1,
      title: "How does BetterAuth ensure squad security and verification?",
      content:
        "BetterAuth tracks encrypted session management keys mapped directly to a developer's National Identity verification structures and active GitHub log states. This completely eliminates malicious bot provisioning, identity conflicts, and ghost accounts across the dynamic squad ecosystem.",
      icon: <GoShieldLock size={18} />,
    },
    {
      id: 2,
      title:
        "Can I manage incoming applicant data inside my dashboard console?",
      content:
        "Yes. The protected Operations Hub located strictly at /squads/manage provides team hosts with a high-density, real-time data table to evaluate incoming applicant profile tags, approve onboarding requests, or safely execute system authorization cleanup workflows.",
      icon: <GoFileCode size={18} />,
    },
    {
      id: 3,
      title:
        "What technical architectural project domains are supported on DevSquad?",
      content:
        "The platform is engineered to accommodate micro-teams deploying structured full-stack frameworks. This primarily focuses on modern MERN engine architectures (MongoDB Atlas, Express, React, Node.js) and type-safe Next.js App Router applications optimized using strict static TypeScript analysis.",
      icon: <GoTerminal size={18} />,
    },
    {
      id: 4,
      title:
        "Where are the project display banners stored upon squad creation?",
      content:
        "Project banners processed through the protected /squads/create form utilize a secure drag-and-drop file interface layer. This gateway instantly automates high-speed content delivery network (CDN) allocation hooks directly via standard ImgBB API pipelines.",
      icon: <GoCloud size={18} />,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="w-full  max-w-6xl mx-auto px-6 pt-18"
    >
      {/* FAQ Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Got questions about DevSquad? We have compiled responses to the
          architectural and platform mechanics.
        </p>
      </motion.div>

      <MotionAccordion hideSeparator className="w-full flex flex-col gap-4">
        {items.map((item) => (
          <motion.div key={item.id} variants={itemVariants} className="w-full">
            <Accordion.Item className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-all duration-300 data-[expanded=true]:border-indigo-500/30 data-[expanded=true]:bg-indigo-600/5 group">
              <Accordion.Heading>
                <Accordion.Trigger className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 focus:outline-none">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 group-data-[expanded=true]:text-indigo-400 transition-colors shrink-0">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-base text-gray-200 group-hover:text-white group-data-[expanded=true]:text-indigo-400 transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <Accordion.Indicator className="h-5 w-5 p-1 rounded-lg border border-gray-800 bg-gray-800/40 text-gray-400 group-hover:text-gray-200 group-data-[expanded=true]:border-indigo-500/20 group-data-[expanded=true]:bg-indigo-600/10 group-data-[expanded=true]:text-indigo-400 transition-all duration-300">
                    <HiChevronDown size={30} />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>

              <Accordion.Panel>
                <Accordion.Body className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed text-sm sm:text-[14.5px] border-t border-gray-800 group-data-[expanded=true]:border-indigo-500/10">
                  {item.content}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </motion.div>
        ))}
      </MotionAccordion>
    </motion.div>
  );
};

export default FAQSection;
