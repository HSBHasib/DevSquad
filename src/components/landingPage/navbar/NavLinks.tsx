"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export interface NavLinkProps {
  href: string;
  label: string;
  isMobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isMobile = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Small Dev
  if (isMobile) {
    return (
      <Link
        href={href}
        className={`w-full block px-5 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
          isActive
            ? "bg-indigo-600/15 text-indigo-400 border-l-3 border-l-indigo-500 font-medium"
            : "text-gray-300 hover:text-white hover:bg-gray-800/40"
        }`}
      >
        {label}
      </Link>
    );
  }

  // Large Dev
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
        isActive
          ? "text-indigo-400 font-semibold"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="active-nav-bg"
          className="absolute inset-0 bg-indigo-600/10 border border-indigo-500/20 rounded-xl -z-10"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      {label}
    </Link>
  );
};

