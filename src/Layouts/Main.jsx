import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";
import Sidebar from "../Pages/SharedPage/Sidebar";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/clothes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  console.log({ items });

  const handleCategoryClick = (gender) => {
    setSelectedCategory(gender);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.gender === selectedCategory)
    : items;

  return (
    <div className="max-w-[1160px] mx-auto">
      <div className="mt-5">
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar onCategoryClick={handleCategoryClick} item={items} />
        <div className="flex-1 ml-5">
          {loading && (
            <div className="flex justify-center items-center h-screen">
              <div className="w-14 h-14 animate-spin rounded-full border-4 border-dashed border-sky-600"></div>
            </div>
          )}
          {error && (
            <div className="text-center text-red-500">Error: {error}</div>
          )}
          {!loading && !error && (
            <Outlet
              context={{
                items: filteredItems,
                loading: loading,
                error: error,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
