"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion, Variants } from "framer-motion";
import { GoEye, GoEyeClosed } from "react-icons/go";
import GoogleSignIn from "../GoogleSignIn";
import DemoCredentials from "../DemoCredentials";
import toast from "react-hot-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";

interface LoginFormInputs {
  email: string;
  password: string;
}
const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false);

  // React Hoot Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  // Demo Credentials
  const injectCredentials = (role: "user" | "admin") => {
    if (role === "user") {
      setValue("email", "userdevsquad@gmail.com");
      setValue("password", "UserDevSquad11@DS");
      toast.success("User Session Token Injected!", {
        style: {
          background: "#111827",
          color: "#F3F4F6",
          border: "1px solid #1F2937",
        },
      });
    } else {
      setValue("email", "admindevsquad@gmail.com");
      setValue("password", "AdminDevSquad11@DS");
      toast.success("Admin Credential Core Injected!", {
        style: {
          background: "#111827",
          color: "#F3F4F6",
          border: "1px solid #1F2937",
        },
      });
    }
  };

  // Submit Handler
  const onSubmit = async (data: LoginFormInputs) => {
    // BetterAuth-এর মেইন গেটওয়ে সেশন ডাটা কালেকশন হুক
    toast.loading("Authorizing sequence...", { id: "auth-status" });

    try {
      // রিয়ালিস্টিক নেটওয়ার্ক সিঙ্ক ডিলে
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Collected Auth Payload ->", data);
      toast.success("Session Validated Successfully!", { id: "auth-status" });
    } catch (error) {
      toast.error("Authorization compilation failed.", { id: "auth-status" });
    }
  };

  const loginVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full min-h-screen py-5 bg-[#070A13] flex flex-col justify-center items-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={loginVariants}
        className="w-full max-w-md"
      >
        <div className="border border-gray-800/80 bg-[#0C101A]/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full flex flex-col items-center">
          {/* Welcome Message */}
          <div className="flex flex-col items-center gap-2 mb-8 text-center">
            <div className="mt-3">
              <h2 className="text-white font-semibold text-2xl tracking-tight flex items-center justify-center gap-1">
                {" "}
                <Image
                  src="/logo.png"
                  alt="DevSquad_Logo"
                  width={35}
                  height={35}
                  className="object-contain animate-pulse"
                />{" "}
                Welcome Back
              </h2>
              <p className="text-gray-400 text-[10px] tracking-wider uppercase mt-1">
                Log in to manage your squads and connect with teams.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            {/* Email */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                Email Address
              </label>
              <input
                type="text"
                placeholder="enter your email"
                {...register("email", { required: "Email is required" })}
                className={`w-full bg-[#05070E] border px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? "border-red-500/40 focus:ring-red-500/30"
                    : "border-gray-800 focus:border-indigo-500/40 focus:ring-indigo-500/20"
                }`}
              />
              {errors.email && (
                <span className="text-red-400 text-xs tracking-wide mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 items-start w-full relative">
              <div className="flex justify-between items-center w-full">
                <label className="font-mono text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                  Password
                </label>

                {/* Forgot Password  */}
                <Popover>
                  <PopoverTrigger>
                    <button
                      type="button"
                      className="cursor-pointer text-[10.5px] text-indigo-400 hover:text-indigo-300 transition-colors tracking-wide focus:outline-none"
                    >
                      Forgot?
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    placement="bottom"
                    className="bg-[#0C101A] border border-gray-800 p-3 rounded-xl max-w-50"
                  >
                    <div className="text-left">
                      <p className="text-xs font-semibold text-white mb-0.5">
                        Feature Offline
                      </p>
                      <p className="text-[11px] text-gray-400 leading-normal">
                        Password recovery configuration pipeline is coming soon!
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`w-full bg-[#05070E] border pl-4 pr-11 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${
                    errors.password
                      ? "border-red-500/40 focus:ring-red-500/30"
                      : "border-gray-800 focus:border-indigo-500/40 focus:ring-indigo-500/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none transition-colors"
                >
                  {showPassword ? (
                    <GoEyeClosed size={16} />
                  ) : (
                    <GoEye size={16} />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-400 text-xs tracking-wide mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-98 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          {/*  --- Divider ---   */}
          <div className="w-full flex items-center justify-center my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800/80"></div>
            </div>
            <span className="relative bg-[#0C101A] px-4 text-[10px] text-gray-600 tracking-[0.2em] uppercase">
              or
            </span>
          </div>

          {/* Google Sign-In Button */}
          <GoogleSignIn />

          {/* User and Admin Login Credentials */}
          <DemoCredentials injectCredentials={injectCredentials} />

          {/* Don't have an account? */}
          <div className="w-full mt-6 pt-4 border-t border-gray-800/40 text-center">
            <p className="text-xs text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 transition-colors"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginContent;
