// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/SharedPage/Navbar";
// import Sidebar from "../Pages/SharedPage/Sidebar";

// const Main = () => {
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/clothes")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setItems(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   console.log({ items });

//   const handleGenderClick = (gender) => {
//     setSelectedGender(gender);
//   };

//   const handleCategoryClick = (item) => {
//     setSelectedCategory(item);
//   };

//   // const filteredItems = selectedGender
//   //   ? items.filter((item) => item.gender === selectedGender)
//   //   : items;
//   const filteredItems = items.filter((item) => {
//     if (selectedGender && item.gender !== selectedGender) {
//       return false;
//     }
//     if (selectedCategory && item.category !== selectedCategory) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <div className="max-w-[1160px] mx-auto">
//       <div className="">
//         <Navbar />
//       </div>
//       <div className="flex">
//         <Sidebar
//           onGenderClick={handleGenderClick}
//           onCategoryClick={handleCategoryClick}
//         />
//         <div className="flex-1 ml-5">
//           {loading && (
//             <div className="flex justify-center items-center h-screen">
//               <div className="w-14 h-14 animate-spin rounded-full border-4 border-dashed border-sky-600"></div>
//             </div>
//           )}
//           {error && (
//             <div className="text-center text-red-500">Error: {error}</div>
//           )}
//           {!loading && !error && (
//             <Outlet
//               context={{
//                 items: filteredItems,
//                 loading: loading,
//                 error: error,
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";
import Sidebar from "../Pages/SharedPage/Sidebar";

const Main = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedClothingItem, setSelectedClothingItem] = useState(null);
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

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setSelectedClothingItem(null); // Reset selected clothing item
  };

  const handleClothingItemClick = (item) => {
    setSelectedClothingItem(item);
  };

  const filteredItems = items.filter((item) => {
    if (selectedGender && item.gender !== selectedGender) {
      return false;
    }
    if (selectedClothingItem && item.category !== selectedClothingItem) {
      return false;
    }
    return true;
  });

  return (
    <>
      <div >
        <Navbar />
      </div>
      <div className="max-w-[1160px] mx-auto">
        <div className="flex">
          <Sidebar
            onGenderClick={handleGenderClick}
            onClothingItemClick={handleClothingItemClick}
            items={items}
          />
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

        <footer className="bg-sky-100 py-5 text-center text-black mb-10 mt-20">
          <p>&copy; 2024 FarihasFashions. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Main;
