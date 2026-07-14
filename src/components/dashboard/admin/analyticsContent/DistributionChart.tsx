"use client";

import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

interface Squad {
  category?: string;
  [key: string]: any;
}

interface DistributionChartProps {
  squads: Squad[];
}

// Colors for charts
const COLORS = ["#6366F1", "#3B82F6", "#10B981", "#F59E0B", "#EC4899", "#8B5CF6"];

export const DistributionChart = ({ squads }: DistributionChartProps) => {
  
  // 
  const categoryCounts = squads.reduce((acc: Record<string, number>, squad) => {
    const category = squad.category || "Uncategorized";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Formating the data for the chart
  const chartData = Object.keys(categoryCounts).map((category, index) => ({
    name: category,
    value: categoryCounts[category],
    color: COLORS[index % COLORS.length]
  }));

  // If no squad data is available
  if (squads.length === 0) {
    return (
      <div className="w-full h-87.5 bg-[#080C15] border border-gray-900 rounded-2xl p-5 flex flex-col justify-center items-center text-gray-500 text-sm">
        No squad data available for distribution metrics.
      </div>
    );
  }

  return (
    <div className="w-full h-87.5 bg-[#080C15] border border-gray-900 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/5 blur-[50px] rounded-full pointer-events-none" />

      <div className="mb-4">
        <h3 className="text-base font-bold text-white tracking-tight">Squad Formations</h3>
        <p className="text-xs text-gray-400">Distribution mapped by creation category</p>
      </div>

      <div className="w-full h-65 text-xs flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "#0B0F19", borderColor: "#1F2937", borderRadius: "12px", color: "#FFF" }}
            />
            <Pie
              data={chartData}
              cx="50%"
              cy="45%"
              innerRadius={65}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="#030712" strokeWidth={2} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={45} 
              iconType="circle" 
              layout="horizontal" 
              wrapperStyle={{ bottom: 0, fontSize: '10px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
