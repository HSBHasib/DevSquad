"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { GoMail, GoLink, GoFile, GoPaperAirplane } from "react-icons/go";
import toast from "react-hot-toast";
import { MdOutlinePerson4 } from "react-icons/md";
import { createApplication } from "@/lib/action/application";
import { CloseButton } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ApplySquadFormClientProps {
  squadId: string;
  squadName: string;
  communicationLink: string;
  ownerId: string;
  applicantId: string;
  isFull: boolean;
}

interface IFormInput {
  name: string;
  email: string;
  linkedinUrl: string;
  resume: string;
}

const ApplySquadForm = ({
  squadId,
  squadName,
  communicationLink,
  ownerId,
  applicantId,
  isFull,
}: ApplySquadFormClientProps) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  //   IS Squad Full
  if (isFull) {
    return (
      <div className="min-h-[60vh]  flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-md w-full bg-[#0B0F19] border border-red-500/20 rounded-3xl p-8 text-center shadow-2xl"
        >
          <h2 className="text-xl font-bold text-red-400 mb-2">
            Squad is Already Full!
          </h2>
          <p className="text-sm text-gray-400">
            Sorry, this squad has reached its maximum member capacity. You can
            no longer apply for{" "}
            <span className="text-indigo-400 font-semibold">"{squadName}"</span>
            .
          </p>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="mt-4 px-6 py-2 bg-indigo-600/90 hover:bg-indigo-700 text-white cursor-pointer text-sm font-semibold rounded-lg transition duration-200"
          >
            <Link href="/explore-squads">Explore Other Squads</Link>
          </motion.button>
        </motion.div>
      </div>
    );
  }

  //   Handle Form Submit
  const onSubmit = async (data: IFormInput) => {
    setLoading(true);
    const toastId = toast.loading("Submitting your application...");

    try {
      const finalPayload = {
        ...data,
        squadId,
        squadName,
        communicationLink,
        ownerId,
        status: "pending",
        applicantId,
      };

      console.log("Submitting Payload: ", finalPayload);

      // Call the function to submit the application
      await createApplication(finalPayload);

      toast.success("Application submitted successfully!", { id: toastId });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-100 py-8 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-xl w-full bg-[#0B0F19] border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Title Section */}
        <div className="flex flex-col gap-1 mb-8 border-b border-gray-800/60 pb-5">
          <h2 className="text-xl font-bold tracking-wide text-white">
            Apply for {squadName}
          </h2>
          <p className="text-xs text-gray-400">
            Provide your correct details. The squad owner will review your
            profile.
          </p>

          <CloseButton
            onClick={() => router.back()}
            className="absolute right-4 top-4 opacity-40 hover:opacity-70 transition-opacity"
          />
        </div>

        {/* Form Structure */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-400">
              Full Name
            </label>
            <div className="relative">
              <MdOutlinePerson4
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                size={18}
              />
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className={`w-full h-11 pl-11 pr-4 rounded-xl bg-[#070A13] text-sm text-gray-200 placeholder-gray-700 transition duration-150 outline-none border ${
                  errors.name
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-[11px] text-red-400 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-400">
              Email Address
            </label>
            <div className="relative">
              <GoMail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                size={16}
              />
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full h-11 pl-11 pr-4 rounded-xl bg-[#070A13] text-sm text-gray-200 placeholder-gray-700 transition duration-150 outline-none border ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-400 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* LinkedIn Profile */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-400">
              LinkedIn Account
            </label>
            <div className="relative">
              <GoLink
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                size={16}
              />
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                {...register("linkedinUrl", {
                  required: "LinkedIn URL is required",
                })}
                className={`w-full h-11 pl-11 pr-4 rounded-xl bg-[#070A13] text-sm text-gray-200 placeholder-gray-700 transition duration-150 outline-none border ${
                  errors.linkedinUrl
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
            </div>
            {errors.linkedinUrl && (
              <p className="text-[11px] text-red-400 mt-1">
                {errors.linkedinUrl.message}
              </p>
            )}
          </div>

          {/* Resume Link */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-400">
              Resume / CV Link
            </label>
            <div className="relative">
              <GoFile
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                size={16}
              />
              <input
                type="url"
                placeholder="Google Drive or Live Resume Link"
                {...register("resume", { required: "Resume link is required" })}
                className={`w-full h-11 pl-11 pr-4 rounded-xl bg-[#070A13] text-sm text-gray-200 placeholder-gray-700 transition duration-150 outline-none border ${
                  errors.resume
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
            </div>
            {errors.resume && (
              <p className="text-[11px] text-red-400 mt-1">
                {errors.resume.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-950/50"
          >
            <GoPaperAirplane size={16} />
            {loading ? "Submitting..." : "Submit Application"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ApplySquadForm;
