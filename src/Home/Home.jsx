// Home.jsx
import React from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { items } = useOutletContext();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Fashion Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Category: {item.category}</p>
            {item.newCollection && (
              <p className="text-green-500">New Collection</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
