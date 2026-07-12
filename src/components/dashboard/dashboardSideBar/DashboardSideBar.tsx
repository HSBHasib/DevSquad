"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// React Icons
import {
  RxExit,
  RxQuestionMarkCircled,
  RxHamburgerMenu,
  RxCross1,
} from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Image from "next/image";
import { MdOutlinePerson3 } from "react-icons/md";
import { userSessionInterface } from "@/utils/userSessionInterface";
import { authClient } from "@/lib/auth-client";
import { RiFolderAddLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import toast from "react-hot-toast";

const DashboardSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // User Session
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user as userSessionInterface | undefined;
  const userRole = user?.role || "user";

   const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully!", { duration: 1500 });
      router.refresh();
    } catch (err) {
      toast.error("Logout runtime error.");
    }
  };

  // User Menu
  const userItems = [
    {
      name: "Profile",
      path: "/dashboard/user/profile",
      icon: <MdOutlinePerson3 size={20} />,
    },
    {
      name: "Create Squad",
      path: "/dashboard/user/add-squad",
      icon: <RiFolderAddLine size={20} />,
    },
    {
      name: "Squads",
      path: "/dashboard/user/squads",
      icon: <HiOutlineUserGroup size={20} />,
    },
  ];

  // Admin Menu
  const adminItems = [
    {
      name: "Analytics",
      path: "/dashboard/admin/analytics",
      icon: <TbBrandGoogleAnalytics size={20} />,
    },
    {
      name: "All Users",
      path: "/dashboard/admin/all-users",
      icon: <RiFolderAddLine size={20} />,
    },
    {
      name: "All Squads",
      path: "/dashboard/admin/all-squads",
      icon: <HiOutlineUserGroup size={20} />,
    },
  ];

  // Sidebar Menu
  const menuItems = [];

  if (userRole === "user") {
    menuItems.push(...userItems);
  } else {
    menuItems.push(...adminItems);
  }

  return (
    <>
      {/* For Mobile Nav */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0B0F19] border-b border-gray-800/80 px-6 flex items-center justify-between z-50">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center">
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#0B0F19] border-r border-gray-800/80 flex flex-col justify-between pt-6 pb-6 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Header & Navigation Links */}
        <div>
          {/* Header Website logo and name */}
          <div className="px-6 pb-6 lg:border-b border-gray-800/95">
            <Link href="/" className="flex items-center">
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
          <nav className="lg:mt-6 px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-[#181E2C] text-white border-l-2 border-indigo-500 font-semibold"
                      : "text-gray-400 hover:bg-[#101524] hover:text-gray-200"
                  }`}
                >
                  <span
                    className={`transition-colors ${isActive ? "text-indigo-400" : "text-gray-500 group-hover:text-gray-400"}`}
                  >
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Menu | Footer Section  */}
        <div className="px-3 space-y-1 border-t border-gray-800/40 pt-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:bg-[#101524] hover:text-gray-300 transition-all"
          >
            <RxQuestionMarkCircled size={18} />
            Help Center
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium cursor-pointer text-red-400/80 hover:bg-red-950/20 hover:text-red-400 transition-all text-left"
          >
            <RxExit size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* For responsive mobile views */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default DashboardSideBar;

