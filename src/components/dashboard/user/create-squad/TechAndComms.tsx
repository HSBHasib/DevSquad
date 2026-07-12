"use client";

import React, { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { RiAddLine } from "react-icons/ri";

interface TechAndCommsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TechAndComms = ({
  register,
  errors,
  tags,
  setTags,
}: TechAndCommsProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-4">
      {/* Tech Stack Box */}
      <div className="bg-[#0B0F19] border border-gray-800/60 p-6 rounded-xl">
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
          Tech Stack Tags
        </label>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs px-3 py-1.5 rounded-full"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(idx)}
                className="hover:text-red-400"
              >
                <RxCross1 size={10} />
              </button>
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTag(e)}
            placeholder="Add more tech..."
            className="flex-1 bg-[#070A13] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-[#181E2C] border border-gray-800 text-gray-300 hover:text-white px-3 rounded-lg transition-colors"
          >
            <RiAddLine size={18} />
          </button>
        </div>
      </div>

      {/* Comms Box */}
      <div className="bg-[#0B0F19] border border-gray-800/60 p-6 rounded-xl">
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
          Communication Link
        </label>
        <input
          type="url"
          placeholder="Paste Discord server invite or Slack URL"
          {...register("communicationLink", {
            required: "Communication group link is required",
          })}
          className="w-full bg-[#070A13] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
        />
        {errors.communicationLink && (
          <p className="text-red-500 text-xs mt-1">
            {String(errors.communicationLink.message)}
          </p>
        )}
      </div>
    </div>
  );
};

export default TechAndComms;
