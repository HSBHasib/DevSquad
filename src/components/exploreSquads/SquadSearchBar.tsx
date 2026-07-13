"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { GoSearch } from 'react-icons/go';

const SquadSearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  // Debounce search input to avoid heavy URL pushes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        params.set('search', searchTerm);
      } else {
        params.delete('search');
      }
      router.push(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center w-full mb-4">
      <div className="relative w-full sm:flex-1">
        <GoSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by squad name, tech stack, or keywords..." 
          className="w-full bg-[#0B0F19] border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all"
        />
      </div>

      {/* Sort based on recent created squads and slots available */}
      <select 
        onChange={(e) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set('sort', e.target.value);
          router.push(`?${params.toString()}`);
        }}
        defaultValue={searchParams.get('sort') || 'latest'}
        className="bg-[#0B0F19] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none cursor-pointer w-full sm:w-auto"
      >
        <option value="latest">Latest Created</option>
        <option value="slots">Most Slots Available</option>
      </select>
    </div>
  );
};

export default SquadSearchBar;