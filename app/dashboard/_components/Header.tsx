import React from 'react';
import { Search } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white flex justify-between items-center p-4">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white shadow-sm">
       
      </div>
      <div className="flex gap-5 items-center">
        <button className="bg-primary p-2 rounded-full text-xs text-white px-4 hover:bg-primary-dark transition duration-300">
          Join membership just for 999/month
        </button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
