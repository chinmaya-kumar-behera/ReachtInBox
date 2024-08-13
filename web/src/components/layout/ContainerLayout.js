import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ContainerLayout = ({ leftContent, rightContent }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex max-w-full">
      {/* left section */}
      <div
        className={`hidden lg:block h-full transition-all duration-300 sticky top-[65px]  ${
          isCollapsed ? "w-12" : "w-[270px]"
        }`}
      >
        {/* toggle button */}
        <button
          className="hidden absolute top-0 -right-3 p-2 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none rounded-full"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
        <div className="h-[calc(100vh-70px)] flex-1 py-4 pl-2 border-r border-gray">
          {leftContent}
        </div>
      </div>

      {/* right section */}
      <div className="flex-1 p-4 space-y-10 max-w-full lg:max-w-[calc(100vw-270px)]">
        {rightContent}
      </div>
    </div>
  );
};

export default ContainerLayout;
