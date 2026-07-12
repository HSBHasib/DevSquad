import AllSquadsTable from '@/components/dashboard/allSquadsTable/AllSquadsTable';
import { getAllSquads } from '@/lib/api/squad';
import React from 'react'

const UserSquads = async () => {
  const initialSquadsData = await getAllSquads();
  return (
    <div className="max-w-7xl mx-auto p-3">
    <AllSquadsTable initialSquads={initialSquadsData} />
  </div>
  )
}

export default UserSquads

