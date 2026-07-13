import React from 'react';
import AllSquadsTable from '@/components/dashboard/allSquadsTable/AllSquadsTable';
import { getAllSquads } from '@/lib/api/squad';
import { getUserSession } from '@/lib/core/session';

const UserSquads = async () => {
  const user = await getUserSession();
  const userId = user?.id;

  const response = userId ? await getAllSquads({ userId: userId }) : null;
  const initialSquadsData = response?.data || [];

  return (
    <div className="max-w-7xl mx-auto p-3">
      <AllSquadsTable initialSquads={initialSquadsData} />
    </div>
  );
};

export default UserSquads;