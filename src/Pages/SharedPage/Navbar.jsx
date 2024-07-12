import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCart from "../../utilse/useCart";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const { cartItems, loading, error } = useCart();

  return (
    <div className="bg-gray-900 ">
      <nav
        className="flex items-center
     justify-between  px-4 py-2 text-white max-w-[1160px] mx-auto"
      >
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link to={"/"}>
            <h2>ClothesLook</h2>
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <Link to={"/"} className="group flex  cursor-pointer flex-col">
            Home
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* <li className="group flex  cursor-pointer flex-col">
          Services
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li> */}
          <li className="group flex  cursor-pointer flex-col">
            <Link to="/carts" className="relative inline-block">
              <FaShoppingCart className="w-8 h-8 text-white" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItems.length}
              </span>
            </Link>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            <Link to={"https://www.google.co.uk/"}> Term & conditons</Link>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <Link
                to={"/"}
                className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 "
              >
                Home
              </Link>
              {/* <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              Services
            </li> */}
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                <Link to={"https://www.google.co.uk/"}>Term & conditons</Link>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                <Link to="/carts" className="relative inline-block">
                  <FaShoppingCart className="w-8 h-8 text-white" />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cartItems.length}
                  </span>
                </Link>
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
