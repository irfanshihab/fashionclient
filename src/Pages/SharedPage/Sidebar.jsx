import React from "react";

const Sidebar = ({ onCategoryClick }) => {
  return (
    <div className="w-64 p-4 mt-0 bg-[#393E46] h-screen text-white">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        <li className="mb-2">
          <button
            onClick={() => onCategoryClick(null)}
            className="text-blue-500 hover:underline"
          >
            All
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={() => onCategoryClick("male")}
            className="text-blue-500 hover:underline"
          >
            Male
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={() => onCategoryClick("female")}
            className="text-blue-500 hover:underline"
          >
            Female
          </button>
        </li>
        {/* <li className="mb-2">
          <button
            onClick={() => onCategoryClick("kids")}
            className="text-blue-500 hover:underline"
          >
            Kids
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
