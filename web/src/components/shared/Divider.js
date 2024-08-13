import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="relative w-full h-[50px] flex justify-center items-center">
      <div className="h-[2px] w-full bg-dark_theme"></div>
      <div className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-full h-[40px] flex justify-center items-center ">
        <span className="px-4 py-1 bg-dark_theme text-[11px]">{text}</span>
      </div>
    </div>
  );
};

export default Divider;
