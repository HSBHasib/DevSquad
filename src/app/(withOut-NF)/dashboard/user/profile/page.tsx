import React, { Suspense } from 'react';
import { getUserSession } from '@/lib/core/session';
import ProfileContent from '@/components/dashboard/user/profile/ProfileContent';
import ProfileSkeleton from './profileSkeleton/ProfileSkeleton';


const Profile = async () => {
  const user = await getUserSession();

  return (
    <div className="w-full">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent user={user} />
      </Suspense>
    </div>
  );
};

export default Profile;
