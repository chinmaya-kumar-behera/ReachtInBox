import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ContainerLayout = ({ leftContent, rightContent }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex max-w-full h-[calc(100vh-70px)] overflow-auto no-scrollbar">
      {/* left section */}
      <div
        className={`hidden lg:block h-full transition-all duration-300 sticky top-[65px] border-r border-gray-500 bg-[#010001] ${
          isCollapsed ? "w-12" : "w-[340px]"
        }`}
      >
        {/* toggle button */}
        <button
          className="hidden absolute top-0 -right-3 p-2 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none rounded-full"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
        {leftContent}
      </div>

      {/* right section */}
      <div className="flex-1 max-w-full lg:max-w-[calc(100vw-340px)] bg-[#010001]">
        {rightContent}
      </div>
    </div>
  );
};

export default ContainerLayout;
