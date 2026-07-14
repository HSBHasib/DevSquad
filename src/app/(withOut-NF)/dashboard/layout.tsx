import React from "react";
import DashboardSideBar from "@/components/dashboard/dashboardSideBar/DashboardSideBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex bg-[#070A13] overflow-hidden text-slate-100">
      
      {/* Dashbaord SideBar */}
      <DashboardSideBar />

      {/* Dashboard Main Content */}
      <main className="flex-1 min-w-0 max-w-full h-screen p-6 pt-24 lg:pt-6 overflow-y-auto custom-scrollbar">
        <div className="max-w-350 mx-auto w-full h-full animate-fadeIn">
          {children}
        </div>
      </main>

    </div>
  );
};

export default DashboardLayout;