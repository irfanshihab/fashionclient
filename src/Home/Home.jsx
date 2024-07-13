import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { addToCart } from "../utilse/cartUtils";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Home = () => {
  const { items } = useOutletContext();

  if (!items) {
    return <div className="text-center text-gray-500">No products found</div>;
  }

  const handleAddCart = (item) => {
    const {
      _id,
      name,
      category,
      price,
      gender,
      newCollection,
      img,
      description,
      size,
    } = item;
    const cartBooked = {
      clothesId: _id,
      name,
      price,
      gender,
      category,
      newCollection,
      img,
      description,
      size,
    };
    console.log(cartBooked);
    addToCart(cartBooked);
  };

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold mb-10">
        Fashion Items total: {items.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {items.map((item) => (
          <>
            <Link to={`/products/${item._id}`}>
              <div
                key={item._id}
                className={`min-h-full mx-auto space-y-6
               rounded-2xl bgCartColor px-4 py-4
                shadow-xl dark:bg-[#18181B] min-w-full  `}
              >
                <img
                  // width={350}
                  height={190}
                  className="h-[270px] w-full rounded-2xl bg-gray-400 transition-transform duration-300 transform hover:scale-105"
                  src={item.img}
                  alt={item.name}
                />
                <div className="space-y-2 ">
                  <h2 className="font-medium text-black sm:text-lg md:text-xl dark:text-white/90">
                    {item.name}
                  </h2>
                  <div className=" pt-5">
                    <p className="font-medium text-lg text-[#000]">
                      Price: {item.price}
                    </p>
                  </div>
                </div>
                <div className="mt-5 pt-3 flex items-center justify-between">
                  <button
                    onClick={() => handleAddCart(item)}
                    className="rounded-lg bg-[#af36ab]
                 text-black w-full  px-7 py-2 text-lg font-semibold hover:text-white  hover:bg-slate-900 sm:text-sm md:text-base"
                  >
                    <p className="flex items-center justify-center gap-2">
                      <HiOutlineShoppingCart />
                      <span>Cart</span>
                    </p>
                  </button>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
