"use client";
import IconBar from "@/views/dashboard/IconBar";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const DashboardLayout = ({ header, leftContent, rightContent }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [component, setComponent] = useState(null);

  return (
    <div iv className="h-full bg-gray-100">
      <div className="flex w-full h-full">
        {/* root left */}
        <div className="h-screen w-16 bg-[#111013] border-r border-gray-500">
          <IconBar />
        </div>

        {/* root right */}
        <div className="w-full">
          <div className="w-full sticky top-0 z-20">{header}</div>
          <div className="flex max-w-full">
            {/* left section */}
            <div
              className={`hidden lg:block h-full transition-all duration-300 sticky top-[65px]  ${
                isCollapsed ? "w-12" : "w-[270px]"
              }`}
            >
              <button
                className="hidden absolute top-0 -right-3 p-2 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none rounded-full"
                onClick={toggleSidebar}
              >
                {isCollapsed ? <IoIosArrowBack /> : <IoIosArrowForward />}
              </button>
              <div className="h-[calc(100vh-65px)] flex-1 py-4 pl-2 border-r border-gray">
                {leftContent}
              </div>
            </div>

            {/* right section */}
            <div className="flex-1 p-4 space-y-10 max-w-full lg:max-w-[calc(100vw-270px)]">
              {component}
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
