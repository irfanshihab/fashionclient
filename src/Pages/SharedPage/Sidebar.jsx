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
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";

const Sidebar = ({ onGenderClick, onClothingItemClick, items }) => {
  const [maleClothingTypes, setMaleClothingTypes] = useState([]);
  const [femaleClothingTypes, setFemaleClothingTypes] = useState([]);

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
    <div className="w-48 p-4 mt-0 bg-gray-900   min-h-max text-white">
      <ul className="mt-10">
        <li className="mb-5">
          <button
            onClick={() => onGenderClick(null)}
            className="flex items-center text-base font-normal  hover:underline"
          >
            <IoMdMale className="mr-2" /> <span className="">All</span>
          </button>
        </li>
        <li className="mb-5">
          <button
            onClick={() => onGenderClick("male")}
            className="flex items-center text-base font-normal hover:underline mb-4"
          >
            <IoMdMale className="mr-2" /> <span>Male</span>
          </button>
          <ul className="pl-12">
            {maleClothingTypes.map((type, index) => (
              <li
                className="text-base font-normal hover:underline mb-2 ms-5"
                key={index}
                onClick={() => onClothingItemClick(type)}
                type="disc"
              >
                {/* <FaTshirt className="mr-2" /> */}
                {type}
              </li>
            ))}
          </ul>
        </li>
        <li className="mb-5">
          <button
            onClick={() => onGenderClick("female")}
            className="flex items-center text-base font-normal hover:underline mb-4"
          >
            <IoMdFemale className="mr-2" /> <span>Female</span>
          </button>
          <ul className="pl-12">
            {femaleClothingTypes.map((type, index) => (
              <li
                className="text-base font-normal hover:underline mb-2 ms-5"
                key={index}
                type="disc"
                onClick={() => onClothingItemClick(type)}
              >
                {type}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
