import React from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { items } = useOutletContext();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Fashion Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`max-w-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px] ${
              item.newCollection ? "border border-green-500" : ""
            }`}
          >
            {/* Card Image */}
            <img
              width={350}
              height={190}
              className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
              src={`https://source.unsplash.com/350x190/?${item.name.replace(
                /\s+/g,
                "-"
              )}`}
              alt={item.name}
            />
            {/* Card Heading */}
            <div className="space-y-2">
              <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
                {item.name}
              </h2>
              <p className="text-gray-500">{item.category}</p>
              {item.newCollection && (
                <p className="text-green-500">New Collection</p>
              )}
            </div>
            {/* Price and action button */}
            <div className="mt-5 flex items-center justify-between">
              <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">
                {item.price}
              </h2>
              <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
