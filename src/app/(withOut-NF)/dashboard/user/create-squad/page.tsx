import React from 'react'
import CreateSquadContent from '@/components/dashboard/user/create-squad/CreateSquadContent'
import { getUserSession } from '@/lib/core/session'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create Squad - DevSquad",
  description:
    "Create a new development squad and invite your team members.",
};

const CreateSquad = async () => {
  const user = await getUserSession();
  const userId = user?.id;

  return (
    <div>
      <CreateSquadContent userId={userId} />
    </div>
  )
}

export default CreateSquad