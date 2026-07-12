"use client";

import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormInputsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const CreateSquadForm = ({ register, errors }: FormInputsProps) => {
  return (
    <div className="bg-[#0B0F19] border border-gray-800/60 p-6 rounded-xl space-y-4">
      <div>
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
          Project Name
        </label>
        <input
          type="text"
          placeholder="e.g., PixGen - AI Image Platform"
          {...register("projectName", { required: "Project Name is required" })}
          className="w-full bg-[#070A13] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
        />
        {errors.projectName && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors.projectName.message)}
          </p>
        )}
      </div>

      <div>
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
          Short Description
        </label>
        <input
          type="text"
          placeholder="A brief, punchy overview..."
          maxLength={120}
          {...register("shortDescription", {
            required: "Short Description is required",
            maxLength: {
              value: 120,
              message: "Maximum length is 120 characters",
            },
          })}
          className="w-full bg-[#070A13] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
        />
        {errors.shortDescription && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors.shortDescription.message)}
          </p>
        )}
      </div>

      <div>
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
          Full Project Scope & Goals
        </label>
        <textarea
          rows={5}
          placeholder="Detail the technical architecture, project roadmap..."
          {...register("fullScope", {
            required: "Full Scope parameters are required",
          })}
          className="w-full bg-[#070A13] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
        />
        {errors.fullScope && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors.fullScope.message)}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
            Category
          </label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="w-full bg-[#070A13] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
          >
            <option value="Startup MVP">Startup MVP</option>
            <option value="Hackathon Project">Hackathon Project</option>
            <option value="Learning Cohort">Learning Cohort</option>
          </select>
        </div>

        <div>
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
            Team Capacity
          </label>
          <select
            {...register("capacity", {
              required: "Please select team size capacity",
            })}
            className="w-full bg-[#070A13] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i+1 + 1} Members
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateSquadForm;
