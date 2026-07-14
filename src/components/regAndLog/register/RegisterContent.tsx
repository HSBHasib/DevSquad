"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion, Variants } from "framer-motion";
import { GoEye, GoEyeClosed } from "react-icons/go";
import GoogleSignIn from "../GoogleSignIn";
import toast from "react-hot-toast";
import { uploadImageToImageBB } from "@/utils/imageUpload";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export interface RegisterFormInputs {
  name: string;
  email: string;
  profileImg: FileList;
  password: string;
}

interface srcProps {
  srcParams: { [key: string]: string | string[] | undefined };
}

const RegisterContent = ({ srcParams }: srcProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCdnUploading, setIsCdnUploading] = useState(false);
  const router = useRouter();

  const redirectTo = srcParams?.redirect || "/auth/login";
  const redirectFromGoogle = srcParams?.redirect || "/";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>();

  const selectedImage = watch("profileImg");

  React.useEffect(() => {
    if (selectedImage && selectedImage.length > 0) {
      const file = selectedImage[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [selectedImage]);

  // Submit Handler
  const onSubmit = async (formData: RegisterFormInputs) => {
    const { name, email, password, profileImg } = formData;

    try {
      let remoteAvatarUrl = "";
      setIsCdnUploading(true);

      if (profileImg && profileImg.length > 0) {
        remoteAvatarUrl = await uploadImageToImageBB(profileImg[0]);
      }

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: remoteAvatarUrl,
      });

      if (error) {
        setIsCdnUploading(false);
        toast.error("Failed to register account.");
        return;
      }

      if (data) {
        reset();
        setIsCdnUploading(false);
        toast.success("Account Registered Successfully!");
        router.push(redirectTo as string);
      }
    } catch (err: any) {
      toast.error(err.message || "Registration deployment failed.");
      setIsCdnUploading(false);
    }
  };

  const registerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full min-h-screen py-5 flex flex-col justify-center items-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={registerVariants}
        className="w-full max-w-md"
      >
        <div className="border border-gray-800/80 bg-[#0C101A]/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full flex flex-col items-center">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2 mb-8 text-center">
            <div className="mt-3">
              <h2 className="text-white font-semibold text-2xl tracking-tight flex items-center justify-center gap-2">
                <Image
                  src="/logo.png"
                  alt="DevSquad_Logo"
                  width={35}
                  height={35}
                  className="object-contain"
                />
                Create Account
              </h2>
              <p className="text-gray-400 text-[10px] tracking-wider uppercase mt-1">
                Join the squad and scale your workspace operations.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            {/* Name */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                Full Name
              </label>
              <input
                type="text"
                placeholder="enter your full name"
                {...register("name", {
                  required: "Name token is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message:
                      "Numbers or unique special characters are not allowed in Name",
                  },
                })}
                className={`w-full bg-[#05070E] border px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? "border-red-500/40 focus:ring-red-500/30"
                    : "border-gray-800 focus:border-indigo-500/40 focus:ring-indigo-500/20"
                }`}
              />
              {errors.name && (
                <span className="text-red-400 text-xs tracking-wide mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                Email Address
              </label>
              <input
                type="text"
                placeholder="enter your email"
                {...register("email", {
                  required: "Email channel registration is mandatory",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
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

            {/* Profile Image  */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                Profile Avatar
              </label>
              <div className="w-full flex items-center gap-4 bg-[#05070E] border border-gray-800 p-3 rounded-xl">
                <div className="relative w-12 h-12 rounded-full border border-gray-700 bg-gray-900 flex-shrink-0 overflow-hidden flex items-center justify-center">
                  {previewUrl ? (
                    <Image
                      src={previewUrl}
                      alt="Avatar Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 text-xs">IMG</span>
                  )}
                </div>
                <label className="flex-1 flex flex-col justify-center items-center px-3 py-2 border border-dashed border-gray-700 hover:border-indigo-500/40 rounded-lg cursor-pointer bg-gray-900/10 hover:bg-indigo-600/5 transition-all">
                  <span className="text-xs text-gray-400">
                    {isCdnUploading
                      ? "Uploading to Cloud..."
                      : "Choose Image File"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("profileImg", {
                      required: "Profile image avatar payload is required",
                    })}
                  />
                </label>
              </div>
              {errors.profileImg && (
                <span className="text-red-400 text-xs tracking-wide mt-1">
                  {errors.profileImg.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 items-start w-full relative">
              <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                Secure Password
              </label>
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="create strong secure password"
                  {...register("password", {
                    required: "Secure access credential required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                      message:
                        "Password must contain uppercase, lowercase, unique number & special character",
                    },
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-98 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Divider */}
          <div className="w-full flex items-center justify-center my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800/80"></div>
            </div>
            <span className="relative bg-[#0C101A] px-4 text-[10px] text-gray-600 tracking-[0.2em] uppercase">
              or
            </span>
          </div>

          {/*  Google Sign-In Gatekeeper */}
          <GoogleSignIn redirectTo={redirectFromGoogle} />

          {/* Footer Navigation Link to Login Page */}
          <div className="w-full mt-6 pt-4 border-t border-gray-800/40 text-center">
            <p className="text-xs text-gray-500">
              Already have an account?{" "}
              <Link
                href={`/auth/login?redirect=${redirectTo}`}
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterContent;
