import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Divider from "@/components/shared/Divider";
import Button from "@/components/ui/Button";
import {BsFillReplyFill} from "react-icons/bs"; 


const CustomButton = ({ text }) => {
  return (
    <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 bg-opacity-10 rounded text-xs ">
      <span className="h-5 w-5 flex justify-center items-center rounded-full bg-orange-200 bg-opacity-5">
        <span className="h-3 w-3 bg-orange-200 rounded-full"></span>
      </span>
      <span>{text}</span>
      <IoIosArrowDown className="text-lg ml-1" />
    </button>
  );
};

const EmailHeading = () => {
  return (
    <div className="w-full flex items-center border-b border-gray-500 h-[60px] px-5">
      <div className="w-full flex justify-between">
        <div className="">
          <h4 className="text-sm">Chinmaya kumar Behera</h4>
          <p className="text-[11px]">chinmaya@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <CustomButton text={"Meeting Completed"} />
          <CustomButton text={"Move"} />
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 bg-opacity-10 rounded text-xs ">
            <HiOutlineDotsHorizontal className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadDetails = () => {
  const details = [
    {
      field: "Name",
      value: "Chinmaya",
    },
    {
      field: "Contact Number",
      value: "+91 7008962911",
    },
    {
      field: "Email Id",
      value: "chinmaya@gmail.com",
    },
    {
      field: "LinkedIn",
      value: "chinmaya.linkin.in",
    },
    {
      field: "Company Name",
      value: "ReachInBox",
    },
  ];
  return (
    <div>
      <div className="px-3 py-2 rounded-md bg-gray-100 bg-opacity-10">
        <h3 className="text-base">Load Details</h3>
      </div>
      <div className="p-4 space-y-4">
        {details.map((data, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-xs"
          >
            <span>{data.field}</span>
            <span>{data.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const EmailContent = ({ data }) => {
    return (
      <div className=" bg-dark_theme p-4 rounded-lg border border-gray-500">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <p>New Product Lunch</p>
            <p className="text-gray-500">New Product Lunch</p>
          </div>
          <div className="text-[11px] space-y-2 text-gray-300">
            <p className="">from : Loremipsum@gmail.com</p>
            <p className="">to : Loremipsum@gmail.com</p>
          </div>
          <div className="text-sm space-y-5 text-gray-300">
            <p className="">Hii First Name</p>
            <p className="">
              lorem inpusm lorem inpusmlorem inpusmlorem inpusm lorem inpusm
              lorem inpusm lorem inpusm lorem inpusm lorem inpusm lorem inpusm
              lorem inpusm lorem inpusm lorem inpusm lorem inpusm lorem inpusm
            </p>
          </div>
        </div>
      </div>
    );
}

const EmailContainer = () => {
  return (
    <div className="relative flex h-[calc(100vh-70px)]">
      <div className="w-[75%]">
        <EmailHeading />
        <div className="flex flex-col items-between px-5">
          <div className="">
            <Divider text="Today" />
            <EmailContent />
            <Divider text="Today" />
            <EmailContent />
          </div>
          <div className="absolute px-5 bottom-5 left-0">
            <Button className="rounded px-5 py-2.5">
              <span className="flex items-center gap-2 ">
                <BsFillReplyFill />
                <span className="text-xs">Reply</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[25%] border-l border-gray-500 py-3 px-2">
        <LoadDetails />
      </div>
    </div>
  );
};

export default EmailContainer;
