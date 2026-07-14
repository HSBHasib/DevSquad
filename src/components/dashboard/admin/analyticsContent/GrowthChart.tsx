"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface GrowthChartProps {
  squads: any[];
  users: any[];
}

export const GrowthChart = ({ squads, users }: GrowthChartProps) => {
  
  const processMonthlyData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const currentMonthIndex = new Date().getMonth();
    const dataMap: Record<string, { users: number; squads: number }> = {};
    
    for (let i = 5; i >= 0; i--) {
      const targetIndex = (currentMonthIndex - i + 12) % 12;
      dataMap[months[targetIndex]] = { users: 0, squads: 0 };
    }

    // User registration data
    users.forEach(user => {
      if (user.createdAt) {
        const m = months[new Date(user.createdAt).getMonth()];
        if (dataMap[m]) dataMap[m].users += 1;
      }
    });

    // Squad creation data
    squads.forEach(squad => {
      if (squad.createdAt) {
        const m = months[new Date(squad.createdAt).getMonth()];
        if (dataMap[m]) dataMap[m].squads += 1;
      }
    });

    return Object.keys(dataMap).map(month => ({
      month,
      users: dataMap[month].users,
      squads: dataMap[month].squads
    }));
  };

  const dynamicGrowthData = processMonthlyData();

  return (
    <div className="w-full h-87.5 bg-[#080C15] border border-gray-900 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/5 blur-[50px] rounded-full pointer-events-none" />
      
      <div className="mb-4">
        <h3 className="text-base font-bold text-white tracking-tight">Platform Growth</h3>
        <p className="text-xs text-gray-400">Monthly breakdown of registrations and creations</p>
      </div>

      <div className="w-full h-65 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dynamicGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSquads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
            <XAxis dataKey="month" stroke="#4B5563" tickLine={false} />
            <YAxis stroke="#4B5563" tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#0B0F19", borderColor: "#1F2937", borderRadius: "12px", color: "#FFF" }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Area type="monotone" dataKey="users" name="New Users" stroke="#6366F1" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
            <Area type="monotone" dataKey="squads" name="New Squads" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorSquads)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
