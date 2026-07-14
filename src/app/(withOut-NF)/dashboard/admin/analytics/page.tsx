import React from "react";
import { DistributionChart } from "@/components/dashboard/admin/analyticsContent/DistributionChart";
import { GrowthChart } from "@/components/dashboard/admin/analyticsContent/GrowthChart";
import { getAllUsers } from "@/lib/api/users";
import { getAllSquads } from "@/lib/api/squad";

const Analytics = async () => {
  const usersData = await getAllUsers();
  const squadsData = await getAllSquads();

  // Total users and squads
  const totalUsers = usersData?.totalUsers || 0;
  const totalSquads = squadsData?.total || 0;

  // Users and Squads Data
  const squadsList = squadsData?.data || [];
  const usersList = usersData?.data || [];

  const TotalUandS = [
    { label: "Active Nodes", val: `${totalUsers} Users` },
    { label: "Formations", val: `${totalSquads} Squads` },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 p-1 sm:p-3 space-y-8">
      {/* Top Header Section */}
      <div className="flex flex-col space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400">
            Core Engine Metrics
          </span>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">
          Administrative Analytics
        </h1>
        <p className="text-sm text-gray-400">
          Real-time data visualization of the DevSquad pipeline ecosystem.
        </p>
      </div>

      {/* Show Total users and squads Number  */}
      <div className="grid grid-cols-2 gap-4 pt-2">
        {TotalUandS.map((stat, i) => (
          <div
            key={i}
            className="bg-[#080C15] border border-gray-900 rounded-xl p-4 text-center shadow shadow-[#6068F1]"
          >
            <span className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase">
              {stat.label}
            </span>
            <span className="text-sm font-bold text-white mt-1 block">
              {stat.val}
            </span>
          </div>
        ))}
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart show users and squads data */}
        <div className="lg:col-span-2">
          <GrowthChart squads={squadsList} users={usersList} />
        </div>

        {/* Distribution Chart show categories data  */}
        <div className="lg:col-span-1">
          <DistributionChart squads={squadsList} />
        </div>
      </div>

      
    </div>
  );
};

export default Analytics;
