"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
  "Hackathon Project",
  "Startup MVP",
  "Open Source Contribution",
  "Learning Cohort",
];
const TECH_STACKS = [
  "TypeScript",
  "Next.js",
  "MongoDB",
  "Node.js",
  "Tailwind CSS",
  "Rust",
];
const MEMBER_OPTIONS = [
  { label: "All Squads", value: "all" },
  { label: "2 Members", value: "2" },
  { label: "3 Members", value: "3" },
  { label: "4+ Members", value: "4" },
];

const SquadFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL Query Parameters Update Function
  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const clearAllFilters = () => {
    router.push("?");
  };

  return (
    <div className="w-full md:w-64 space-y-6 bg-[#0B0F19] p-5 rounded-xl border border-gray-800/60">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">
          Filters
        </h3>
        <button
          onClick={clearAllFilters}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition"
        >
          Clear All
        </button>
      </div>

      {/* Category Section */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
          Category
        </label>
        {CATEGORIES.map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2.5 text-xs text-gray-400 cursor-pointer hover:text-white transition"
          >
            <input
              type="checkbox"
              checked={searchParams.get("category") === cat}
              onChange={(e) =>
                updateQueryParams("category", e.target.checked ? cat : "")
              }
              className="rounded border-gray-800 bg-[#070A13] text-indigo-600 focus:ring-0 focus:ring-offset-0"
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Tech Stack & Skills */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
          Stack & Skills
        </label>
        <div className="flex flex-wrap gap-1.5">
          {TECH_STACKS.map((tech) => {
            const isSelected = searchParams.get("tech") === tech;
            return (
              <button
                key={tech}
                onClick={() =>
                  updateQueryParams("tech", isSelected ? "" : tech)
                }
                className={`text-[11px] px-2.5 py-1 rounded-md border transition font-medium ${
                  isSelected
                    ? "bg-indigo-600/20 border-indigo-500 text-indigo-400"
                    : "bg-[#070A13] border-gray-800 text-gray-400 hover:border-gray-700"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      {/* Team Size / Members Filter */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
          Team Size
        </label>
        {MEMBER_OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2.5 text-xs text-gray-400 cursor-pointer hover:text-white transition"
          >
            <input
              type="radio"
              name="teamSize"
              checked={
                searchParams.get("teamSize") === opt.value ||
                (!searchParams.get("teamSize") && opt.value === "all")
              }
              onChange={() => updateQueryParams("teamSize", opt.value)}
              className="rounded-full border-gray-800 bg-[#070A13] text-indigo-600 focus:ring-0 focus:ring-offset-0"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SquadFilters;