import { PrimaryIconsList } from "@/constants/icons.constant";
import React from "react";

import logo from "../../assets/logo.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setRoute } from "@/redux/slice/navigationSlice";
const IconBar = () => {
  const currentIcon = useSelector((state) => state.navigation.activeIcon);
  const dispatch = useDispatch();

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-between items-center py-3">
        <div className="h-full space-y-20">
          <div className="h-8 w-8 relative">
            <Image
              src={logo}
              layout="fill"
              className="object-center object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-10">
            {PrimaryIconsList.map((data, index) => (
              <div
                className=""
                key={index}
                onClick={() => {
                  dispatch(setRoute({ activeIcon: data.url }));
                }}
              >
                {React.createElement(data.icon, {
                  color: data.url == currentIcon ? "white" : "gray",
                  active: data.url == currentIcon,
                })}
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="">
          <div className="h-10 w-10 bg-red-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
