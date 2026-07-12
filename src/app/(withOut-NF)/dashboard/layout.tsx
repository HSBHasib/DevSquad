import React from "react";
import DashboardSideBar from "@/components/dashboard/dashboardSideBar/DashboardSideBar";

interface DashbaordLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashbaordLayoutProps) => {
  return (
    <div className="min-h-screen flex overflow-hidden">
      
      <DashboardSideBar />

      <main className="flex-1 min-w-0 max-w-full h-full p-6 pt-24 lg:pt-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;