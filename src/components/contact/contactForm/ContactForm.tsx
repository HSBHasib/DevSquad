"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// Interface 
interface ContactFormInputs {
  fullName: string;
  email: string;
  inquiryType: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // React Hook Form 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      inquiryType: "Technical",
    }
  });

  // Form Submit Handler
  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Inquiry transmitted successfully!");
        reset();
      } else {
        toast.error("Transmission failed. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full border border-gray-800/80 p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#070A13]/60 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
            placeholder="enter you name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">Full name is required</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Work Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-[#070A13]/60 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
            placeholder="enter your email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">Please enter a valid work email</p>}
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Inquiry Type</label>
          <select
            className="w-full px-4 py-3 bg-[#070A13]/60 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
            {...register("inquiryType")}
          >
            <option value="Technical" className="bg-[#0B0F19]">Technical Queries</option>
            <option value="Squad Squad" className="bg-[#0B0F19]">Squad Management</option>
            <option value="Partnership" className="bg-[#0B0F19]">Strategic Partnership</option>
          </select>
        </div>

        {/* Details Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 bg-[#070A13]/60 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm resize-none"
            placeholder="Describe your architectural or synchronization plan..."
            {...register("message", { required: true })}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">Message content is required</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 cursor-pointer flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/50 text-white font-medium py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 text-sm active:scale-[0.99]"
        >
          {loading ? "Transmitting Node..." : "Transmit Inquiry"}
          {!loading && <HiOutlineArrowNarrowRight size={16} />}
        </button>
      </form>
      
      <p className="text-center text-[10px] text-gray-500 mt-5 tracking-wide uppercase">
        By transmitting, you agree to our Protocol Terms and Data Shield Policy.
      </p>
    </div>
  );
};

export default ContactForm;

