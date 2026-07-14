import React, { Suspense } from 'react';
import { getUserSession } from '@/lib/core/session';
import ProfileContent from '@/components/dashboard/user/profile/ProfileContent';
import ProfileSkeleton from './profileSkeleton/ProfileSkeleton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Profile - DevSquad",
  description:
    "View your profile information in the DevSquad platform.",
};

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
