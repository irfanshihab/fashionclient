// import React from "react";
// import { IoMdMale, IoMdFemale } from "react-icons/io";

// const Sidebar = ({ onGenderClick }) => {
//   return (
//     <div className="w-48 p-4 mt-0 bg-[#393E46] min-h-max text-white">
//       {/* <h2 className="text-lg font-semibold mb-4"></h2> */}
//       <ul>
//         <li className="mb-5">
//           <button
//             onClick={() => onGenderClick(null)}
//             className="flex items-center text-xl text-blue-500 hover:underline"
//           >
//             <IoMdMale className="mr-2" /> <span>All </span>
//           </button>
//         </li>
//         <li className="mb-5">
//           <button
//             onClick={() => onGenderClick("male")}
//             className="flex items-center text-xl text-blue-500 hover:underline"
//           >
//             <IoMdMale className="mr-2" /> <span>Male</span>
//           </button>
//           <ul className="px-5">
//             <li>brazer </li>
//             <li>punjabi </li>
//             <li>shirt </li>
//             <li>tshirt </li>
//           </ul>
//         </li>
//         <li className="mb-5">
//           <button
//             onClick={() => onGenderClick("female")}
//             className="flex items-center text-xl text-blue-500 hover:underline"
//           >
//             <IoMdFemale className="mr-2" /> <span>Female</span>
//           </button>
//           <ul className="px-5">
//             <li>kamiz </li>
//             <li>saree </li>
//             <li>gown </li>
//             <li>balzer </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import {
  BsBoxArrowInRight,
  BsChatLeftFill,
  BsChevronDown,
} from "react-icons/bs";
import { IoMdMale, IoMdFemale } from "react-icons/io";

const Sidebar = ({ onGenderClick, onClothingItemClick, items }) => {
  const [maleClothingTypes, setMaleClothingTypes] = useState([]);
  const [femaleClothingTypes, setFemaleClothingTypes] = useState([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isFemaleDropdownOpen, setIsFemaleDropdownOpen] = useState(false);
  const toggleFemaleDropdown = () => {
    setIsFemaleDropdownOpen(!isFemaleDropdownOpen);
  };
  useEffect(() => {
    const maleTypes = [];
    const femaleTypes = [];

    items.forEach((item) => {
      if (item.gender === "male" && !maleTypes.includes(item?.category)) {
        maleTypes.push(item.category);
      } else if (
        item.gender === "female" &&
        !femaleTypes.includes(item.category)
      ) {
        femaleTypes.push(item.category);
      }
    });

    setMaleClothingTypes(maleTypes);
    setFemaleClothingTypes(femaleTypes);
  }, [items]);
  // bg-[#383a3d]
  return (
    <div className="w-48 p-4 mt-0 bg-gray-900  overflow-y-auto  min-h-max text-white">
      <ul className="mt-3">
        <div
          onClick={() => onGenderClick(null)}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <IoMdMale className="w-6 h-6" />
          <span className="text-[15px] ml-4 text-gray-200">ALL</span>
        </div>

        <span onClick={() => onGenderClick("male")}>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 
            transition-transform duration-1000 
          cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleDropdown}
          >
            <IoMdMale className="w-6 h-6" />
            <div className="flex justify-between w-full items-center ">
              <span className="text-[15px] ml-4 text-gray-200 ">Male </span>
              <BsChevronDown
                className={`text-sm transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                } transition-transform duration-700`}
              />
            </div>
          </div>
        </span>
        <ul
          className={`text-left text-sm font-thin mt-1 w-4/5 mx-auto text-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
            isDropdownOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {maleClothingTypes?.map((type, index) => (
            <li
              className="text-base font-normal  cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"
              key={index}
              onClick={() => onClothingItemClick(type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <div onClick={() => onGenderClick("female")}>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 transition-transform duration-1000 
          cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleFemaleDropdown}
          >
            <IoMdFemale className="w-6 h-6" />
            <div className="flex justify-between w-full items-center ">
              <span className="text-[15px] ml-4 text-gray-200 ">Female</span>
              <BsChevronDown
                className={`text-sm transform ${
                  isFemaleDropdownOpen ? "rotate-180" : "rotate-0"
                } transition-transform duration-700`}
              />
            </div>
          </div>
        </div>
        <ul
          className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
            isFemaleDropdownOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {femaleClothingTypes.map((type, index) => (
            <li
              className="overflow-auto text-base font-normal  cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"
              key={index}
              onClick={() => onClothingItemClick(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
