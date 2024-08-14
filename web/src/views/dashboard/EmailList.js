// import React from "react";
// import { CiLocationArrow1, CiSearch } from "react-icons/ci";
// import { IoIosArrowDown } from "react-icons/io";

// const EmailCard = ({ data }) => {
//   const emailStatus = {
//     interested: {
//       name: "interested",
//       color: "green",
//     },
//     closed: {
//       name: "closed",
//       color: "blue",
//     },
//     "meeting booked": {
//       name: "meeting booked",
//       color: "purple",
//     },
//     "meeting completed": {
//       name: "meeting completed",
//       color: "orange",
//     },
//   };

//   // Function to get color with opacity
//   const getColor = (color, opacity = 0.1) => {
//     const baseColor = emailStatus[data.status].color;
//     return `rgba(${getColorCode(baseColor)}, ${opacity})`;
//   };

//   // Function to convert base color to RGB values
//   const getColorCode = (color) => {
//     switch (color) {
//       case "green":
//         return "0, 128, 0";
//       case "blue":
//         return "0, 0, 255";
//       case "purple":
//         return "128, 0, 128";
//       case "orange":
//         return "255, 165, 0";
//       default:
//         return "0, 0, 0";
//     }
//   };

//   return (
//     <div className="flex gap-2 items-start border-t px-2 py-4">
//       <div className="w-2">
//         <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
//       </div>
//       <div className="w-full">
//         <div className="w-full space-y-1">
//           <div className="flex justify-between items-center">
//             <h4 className="text-md">{data.email}</h4>
//             <span className="text-gray-500 text-xs">{data.date}</span>
//           </div>
//           <p className="text-xs text-gray-200">{data.message}</p>
//         </div>
//         <div className="flex items-center gap-1 mt-2">
//           <button
//             className={`flex items-center gap-1 px-2 py-1 bg-gray-100 bg-opacity-10 rounded-full text-[11px]`}
//             style={{ color: getColor(emailStatus[data.status].color, 0.8) }}
//           >
//             <div
//               className="w-4 h-4 rounded-full flex justify-center items-center"
//               style={{
//                 backgroundColor: getColor(emailStatus[data.status].color, 0.2),
//               }}
//             >
//               <div
//                 className={`w-2 h-2 rounded-full bg-gray-200`}
//                 style={{
//                   backgroundColor: getColor(
//                     emailStatus[data.status].color,
//                     0.3
//                   ),
//                 }}
//               ></div>
//             </div>
//             {data.status}
//           </button>
//           <button
//             className={`flex items-center gap-1 px-2 py-1 bg-gray-100 bg-opacity-10 rounded-full text-[11px]`}
//           >
//             <CiLocationArrow1 className="text-sm" />
//             Campaign name
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EmailList = () => {
//   const emails = [
//     {
//       email: "chinu@gmail.com",
//       message: "hello sir",
//       status: "interested",
//       date: "Mar 7",
//     },
//     {
//       email: "deepak@gmail.com",
//       message: "I have Tried !",
//       status: "closed",
//       date: "Aug 12",
//     },
//     {
//       email: "dinabandhu@gmail.com",
//       message: "Spider man Home comming !",
//       status: "meeting completed",
//       date: "Aug 12",
//     },
//     {
//       email: "daitari@gmail.com",
//       message: "I have Tried !",
//       status: "meeting booked",
//       date: "Aug 12",
//     },
//   ];

//   return (
//     <div className="p-5 h-full">
//       {/* heading */}
//       <div className="space-y-1">
//         <h2 className="text-lg text-theme font-semibold">All Inbox(s)</h2>
//         <p className="text-xs flex items-center gap-1">
//           <span className="text-xs font-bold">25/25</span>{" "}
//           <span className="text-gray-400">Inboxes selected</span>
//         </p>
//       </div>

//       {/* search field */}
//       <div className="mt-4">
//         <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 bg-opacity-20">
//           <CiSearch className="text-2xl" />
//           <input
//             type="text"
//             className="w-full text-sm border-none bg-transparent hover:none outline-none"
//             placeholder="Search"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between text-sm mt-3">
//         <div className="flex gap-1 items-center">
//           <span className="py-1 px-1.5 bg-gray-100 rounded-full bg-opacity-10">
//             <span className="font-bold text-theme">26</span>
//           </span>
//           <h4>New replies</h4>
//         </div>
//         <div className="flex items-center gap-2">
//           <span>Newest</span>
//           <IoIosArrowDown className="text-lg" />
//         </div>
//       </div>

//       {/* //emails */}
//       <div className="space-y mt-3">
//         {emails.map((data, index) => (
//           <EmailCard data={data} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmailList;


import React, { useEffect, useState } from "react";
import { CiLocationArrow1, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { useSelector } from "react-redux";

// EmailCard Component
const EmailCard = ({ data }) => {
  const emailStatus = {
    interested: {
      name: "interested",
      color: "green",
    },
    closed: {
      name: "closed",
      color: "blue",
    },
    "meeting booked": {
      name: "meeting booked",
      color: "purple",
    },
    "meeting completed": {
      name: "meeting completed",
      color: "orange",
    },
  };

  // Function to get color with opacity
  const getColor = (color, opacity = 0.1) => {
    const baseColor = emailStatus[data.status]?.color || "black";
    return `rgba(${getColorCode(baseColor)}, ${opacity})`;
  };

  // Function to convert base color to RGB values
  const getColorCode = (color) => {
    switch (color) {
      case "green":
        return "0, 128, 0";
      case "blue":
        return "0, 0, 255";
      case "purple":
        return "128, 0, 128";
      case "orange":
        return "255, 165, 0";
      default:
        return "0, 0, 0";
    }
  };

  return (
    <div className="flex gap-2 items-start border-t px-2 py-4">
      <div className="w-2">
        <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
      </div>
      <div className="w-full">
        <div className="w-full space-y-1">
          <div className="flex justify-between items-center">
            <h4 className="text-md">{data.email}</h4>
            <span className="text-gray-500 text-xs">{data.date}</span>
          </div>
          <p className="text-xs text-gray-200">{data.message}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <button
            className={`flex items-center gap-1 px-2 py-1 bg-gray-100 bg-opacity-10 rounded-full text-[11px]`}
            style={{ color: getColor(emailStatus[data.status]?.color, 0.8) }}
          >
            <div
              className="w-4 h-4 rounded-full flex justify-center items-center"
              style={{
                backgroundColor: getColor(emailStatus[data.status]?.color, 0.2),
              }}
            >
              <div
                className={`w-2 h-2 rounded-full bg-gray-200`}
                style={{
                  backgroundColor: getColor(
                    emailStatus[data.status]?.color,
                    0.3
                  ),
                }}
              ></div>
            </div>
            {data.status}
          </button>
          <button
            className={`flex items-center gap-1 px-2 py-1 bg-gray-100 bg-opacity-10 rounded-full text-[11px]`}
          >
            <CiLocationArrow1 className="text-sm" />
            Campaign name
          </button>
        </div>
      </div>
    </div>
  );
};

// EmailList Component
const EmailList = () => {
  const token = useSelector((state) => state.auth.token);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setEmails(response.data.emails || []);
        
      } catch (error) {
        console.error("Failed to fetch emails:", error);
      }
    };

    fetchEmails();
  }, [token]);

  console.log(emails)

  return (
    <div className="p-5 h-full">
      {/* Heading */}
      <div className="space-y-1">
        <h2 className="text-lg text-theme font-semibold">All Inbox(s)</h2>
        <p className="text-xs flex items-center gap-1">
          <span className="text-xs font-bold">{emails.length}</span>{" "}
          <span className="text-gray-400">Inboxes selected</span>
        </p>
      </div>

      {/* Search Field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 bg-opacity-20">
          <CiSearch className="text-2xl" />
          <input
            type="text"
            className="w-full text-sm border-none bg-transparent hover:none outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Emails */}
      <div className="space-y mt-3">
        {emails.map((data, index) => (
          <EmailCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
