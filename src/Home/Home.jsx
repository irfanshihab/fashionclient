import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const Home = () => {
  const { items } = useOutletContext();

  if (!items) {
    return <div className="text-center text-gray-500">No product found</div>;
  }

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold mb-10">
        Fashion Items total: {items.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4">
        {items.map((item) => (
          <div
            key={item?._id}
            className={`max-h-min mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px] border border-green-500`}
          >
            {/* Card Image  its needed*/}
            {/* <img
              width={350}
              height={190}
              className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
              src={`https://source.unsplash.com/350x190/?${item.name.replace(
                /\s+/g,
                "-"
              )}`}
              alt={item.name}
            /> */}
            <img
              width={350}
              height={190}
              className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
              src={item.img}
              alt={item.name}
            />
            {/* Card Heading */}
            <div className="space-y-2">
              <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
                {item.name}
              </h2>
              <div className="flex justify-between gap-2 mt-5">
                <p className="text-gray-500">Gender: {item.category}</p>
                {item.newCollection && (
                  <p className="text-green-500">New Collection: Latest</p>
                )}
              </div>
            </div>
            {/* Price and action button */}
            <div className="mt-5 flex items-center justify-between">
              <h2 className="font-bold text-gray-700 md:text-xl dark:text-white/60">
                {item.price}
              </h2>
              <Link to={`/products/${item._id}`}>
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                  view
                </button>
              </Link>
              {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                Cart
              </button> */}
              <button className="custom-button">cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
