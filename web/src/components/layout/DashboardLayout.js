"use client";
import IconBar from "@/views/dashboard/IconBar";
import React, { useState } from "react";

const DashboardLayout = ({ iconbar, header, children }) => {
  return (
    <div iv className="h-screen bg-gray-100">
      <div className="flex w-full h-full">
        {/* left */}
        <div className="h-screen w-[70px] bg-[#111013] border-r border-gray-500">
          {iconbar}
        </div>

        {/* right */}
        <div className="w-full">
          <div className="w-full sticky top-0 z-20">{header}</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
