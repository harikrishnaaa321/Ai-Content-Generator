// pages/dashboard/settings/[[...rest]].tsx
import React from 'react';
import { UserProfile } from '@clerk/nextjs';

const Settings = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      
      <UserProfile/>
    </div>
  );
};

export default Settings;
