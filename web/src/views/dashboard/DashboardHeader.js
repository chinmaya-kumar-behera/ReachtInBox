import ThemeSwitcher from '@/components/ThemeSwitcher';
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className="w-full bg-[#202022] h-[70px] border-b border-gray-500">
      <div className="h-full w-full flex justify-between items-center px-10">
        <div className="">
          <span className='text-lg'>Onebox</span>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default DashboardHeader