"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink, NavLinkProps } from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLinkProps[] = [
    { href: "/", label: "Home" },
    { href: "/explore-squads", label: "Explore Squads" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0B0F19]/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side Logo & Website Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="DevSquad Logo"
              width={35}
              height={35}
              priority 
              quality={100} 
              className="object-contain"
            />

            <span className="font-bold text-white text-lg tracking-wide">
              DevSquad
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Right-side Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium px-5 py-2.5 hover:bg-gray-800/40 rounded-xl"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/20"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-400 hover:text-white focus:outline-none p-2"
            aria-label="Open Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
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
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 z-50 h-screen w-75 bg-[#0B0F19]/75 backdrop-blur-xl border-l border-gray-800 p-6 flex flex-col justify-between md:hidden shadow-2xl"
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
                  {navLinks.map((link) => (
                    <div
                      key={link.href}
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      {/* Pass isMobile prop as true for mobile sidebar */}
                      <NavLink
                        href={link.href}
                        label={link.label}
                        isMobile={true}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Login and Register Buttons */}
              <div className="flex flex-col gap-3 mt-auto mb-4">
                <div className="h-px bg-gray-800/80 w-full my-2" />
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-gray-300 hover:text-white transition-colors text-base font-medium py-3 rounded-xl hover:bg-gray-800/40"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-98"
                >
                  Register
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

