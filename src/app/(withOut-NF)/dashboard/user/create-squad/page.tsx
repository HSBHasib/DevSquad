import React from 'react'
import CreateSquadContent from '@/components/dashboard/user/create-squad/CreateSquadContent'
import { getUserSession } from '@/lib/core/session'

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