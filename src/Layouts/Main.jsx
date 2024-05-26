import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";
import Sidebar from "../Pages/SharedPage/Sidebar";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("fashion.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  console.log({ items });
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;
  console.log({ filteredItems });
  return (
    <div className="max-w-[1160px] mx-auto">
      <div className="mt-5">
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar onCategoryClick={handleCategoryClick} item={items} />
        <div className="flex-1 ml-5">
          <Outlet context={{ items: filteredItems }} />
        </div>
      </div>
    </div>
  );
};

export default Main;
