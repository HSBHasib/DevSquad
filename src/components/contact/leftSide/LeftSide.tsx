import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { MdPerson4 } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="space-y-8 max-w-xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          DevSquad <span className="text-indigo-500">Gateway</span>
        </h1>
        <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
          Have any questions about the DevSquad ecosystem or squads, a collaboration proposal, or need technical support? Connect directly with our engineering team.
        </p>
      </div>

      {/* Futuristic Status Container */}
      <div className="border border-gray-800 bg-[#0B0F19]/40 backdrop-blur-md p-6 rounded-2xl space-y-6">
        {/* System Status */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-600"></span> System
            Status
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Squad Infrastructure: Operational
          </div>
        </div>

        <div className="h-px bg-gray-800/60" />

        {/* Communication Link */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
            Communication Node
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
            <FaEnvelope className="text-indigo-400" size={16} />
            <span>hasibhsb19@gmail.com</span>
          </div>
        </div>

        <div className="h-px bg-gray-800/60" />

        {/* Social Links */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
            DevSquad Developer Socail Links
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://hasib-portfolio-silk.vercel.app"
              target="_blank"
              className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700 bg-[#0B0F19]/60 px-4 py-2.5 rounded-xl transition-all"
            >
              <MdPerson4 size={14} className="text-indigo-400" /> Portfolio
            </Link>
            <Link
              href="https://www.linkedin.com/in/hasibur-rahman19"
              target="_blank"
              className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700 bg-[#0B0F19]/60 px-4 py-2.5 rounded-xl transition-all"
            >
              <CiLinkedin size={20} className="text-blue-400" /> LinkedIn
            </Link>
            <Link
              href="https://github.com/HSBHasib"
              target="_blank"
              className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700 bg-[#0B0F19]/60 px-4 py-2.5 rounded-xl transition-all"
            >
              <FaGithub size={14} className="text-gray-300" /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

