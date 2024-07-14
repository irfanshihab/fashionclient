import React from "react";
import useCart from "../../utilse/useCart";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
const CartBooked = () => {
  const { cartItems, loading, error, removeCartItem } = useCart();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 animate-spin rounded-full border-4 border-dashed border-sky-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const handleDelete = (id) => {
    fetch(`https://fashion-server-eight.vercel.app/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          // Successfully deleted the item
          alert("Item deleted successfully");
          // Update the state to remove the deleted item
          removeCartItem(id);
        } else {
          // Item was not deleted
          alert("Failed to delete the item");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while deleting the item");
      });
  };

  return (
    <div
      className="mt-10
     grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3"
    >
      {cartItems.map((item) => (
        <div
          key={item._id}
          className={`min-h-full  mx-auto space-y-6
               rounded-2xl bgCartColor px-4 py-4
                shadow-xl dark:bg-[#18181B] w-full  `}
        >
          <img
            className="h-[270px] w-full rounded-2xl bg-gray-400 transition-transform duration-300 transform hover:scale-110"
            src={item.img}
            alt={item.name}
          />

          <div className="space-y-2">
            <h2
              className="text-2xl font-medium text-black sm:text-lg md:text-xl
             dark:text-white/90"
            >
              {item.name}
            </h2>
            <div className="flex  justify-between items-center gap-2 pt-5">
              <p className="font-medium text-lg text-[#000]">
                price: {item.price}
              </p>
              <Link to={`/carts/${item._id}`}>
                <p className="flex items-center justify-center gap-2 hover:underline hover:text-pink-600 font-medium text-lg text-black underline ">
                  <span>View Info</span>
                  <HiArrowDown />
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={() => handleDelete(item._id)}
              className="custom-button w-full"
            >
              <p className="flex items-center justify-center gap-3">
                <FaTrash className="text-base" />
                <span>Delete</span>
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartBooked;
