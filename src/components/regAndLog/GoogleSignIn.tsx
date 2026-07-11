"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
  
  const signIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: '/',
      });
    } catch (error) {
      toast.error("Google Sign-In failed.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="button"
        onClick={signIn}
        className="w-full flex items-center justify-center gap-2.5 bg-[#05070E] hover:bg-[#090D16] text-gray-300 hover:text-white border border-gray-800 rounded-xl py-3 text-xs font-medium transition-all active:scale-98"
      >
        <FcGoogle size={18} />
        Continue with Google Account
      </button>
    </div>
  );
};

export default GoogleSignIn;
