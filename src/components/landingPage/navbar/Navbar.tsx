"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink, NavLinkProps } from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { TbMenu2Filled } from "react-icons/tb";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { userSessionInterface } from "@/utils/userSessionInterface";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Navigation Links in form of an array
  const navLinks: NavLinkProps[] = [
    { href: "/", label: "Home" },
    { href: "/explore-squads", label: "Explore Squads" },
    { href: "/about", label: "About" },
  ];

  // User Session
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user as userSessionInterface | undefined;
  const role = user?.role || "user";

  const skeletonCount = isPending ? 5 : 3;
  const skeletons = Array.from({ length: skeletonCount });

  // Role Path
  const roleBasePath = role === "user" ? "/dashboard/user/profile" : "/dashboard/admin/analytics";

  const loginUserRoute = [
    { href: "/contact", label: "Contact" },
    { href: roleBasePath, label: "Dashboard" },
  ];

  if (user) {
    navLinks.push(...loginUserRoute);
  }

  // SignOut Func
  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully!", { duration: 1500 });
      router.refresh();
    } catch (err) {
      toast.error("Logout runtime error.");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side Logo & Website Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="DevSquad Logo"
              width={35}
              height={35}
              className="object-contain"
            />

            <span className="font-bold text-white text-lg tracking-wide">
              DevSquad
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {isPending ? (
            <div className="flex gap-4 px-2 animate-pulse">
              {skeletons.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-8 rounded-lg bg-gray-800/80 ${
                    idx === 1 || idx === 4 ? "w-26" : "w-14"
                  }`}
                />
              ))}
            </div>
          ) : (
            navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))
          )}
        </div>

        {/* Right-side Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {isPending ? (
            // 💀 Desktop right action skeleton placeholder blocks layout
            <div className="flex items-center gap-3 animate-pulse">
              <div className="bg-gray-800/80 h-8 w-20 rounded-md"></div>
              <div className="bg-gray-800/80 h-8 w-24 rounded-md"></div>
            </div>
          ) : user ? (
            // 🔥 Authenticated State UI view
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm font-medium">
                Hello,{" "}
                <strong className="text-white font-semibold">
                  {user.name}
                </strong>
              </span>
              <button
                onClick={handleSignOut}
                className="text-red-400 cursor-pointer hover:text-red-300 hover:bg-red-950/20 text-sm font-medium px-5 py-2.5 rounded-xl border border-red-500/30 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            // ❄️ Guest State UI View (Existing buttons perfectly preserved)
            <>
              <Link
                href="/auth/login"
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium px-5 py-2.5 hover:bg-gray-800/40 rounded-xl"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/20"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-400 hover:text-white focus:outline-none p-2"
            aria-label="Open Menu"
          >
            <TbMenu2Filled size={24} />
          </button>
        </div>
      </div>

      {/* 📱 Right-side Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Right-side Main Full-Height Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="fixed top-0 right-0 z-50 h-screen w-75 bg-[#0B0F19] backdrop-blur-xl border-l border-gray-800 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div>
                {/* Close Bar */}
                <div className="flex items-center justify-between mb-6 border-b border-indigo-500/20 pb-3">
                  <span className="font-semibold text-white text-lg tracking-wide">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white p-2"
                    aria-label="Close Menu"
                  >
                    <RxCross2 size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-2">
                  {isPending ? (
                    <div className="flex flex-col gap-3 py-2 animate-pulse">
                      {skeletons.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-10 w-full rounded-lg bg-gray-800/80`}
                        />
                      ))}
                    </div>
                  ) : (
                    navLinks.map((link) => (
                      <div
                        key={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full"
                      >
                        <NavLink
                          href={link.href}
                          label={link.label}
                          isMobile={true}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Bottom Dynamic Authentication Panel (Login/Register or User/Logout) */}
              <div className="flex flex-col gap-3 mt-auto mb-4">
                <div className="h-px bg-gray-800/80 w-full my-2" />

                {isPending ? (
                  <div className="flex flex-col gap-3 py-1 animate-pulse">
                    <div className="bg-gray-800/80 h-12 w-full rounded-xl"></div>
                  </div>
                ) : user ? (
                  <div className="flex flex-col gap-4 text-center">
                    <span className="text-gray-300 text-base font-medium py-1">
                      Hello,{" "}
                      <strong className="text-white font-semibold">
                        {user.name}
                      </strong>
                    </span>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-center cursor-pointer bg-red-600/10 border border-red-500/20 text-red-400 text-base font-medium py-3.5 rounded-xl transition-all active:scale-98"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      onClick={() => setIsOpen(false)}
                      className="text-center text-gray-300 hover:text-white transition-colors text-base font-medium py-3 rounded-xl hover:bg-gray-800/40"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setIsOpen(false)}
                      className="text-center bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-98"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
