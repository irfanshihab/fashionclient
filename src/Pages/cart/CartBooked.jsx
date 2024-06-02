import React from "react";
import useCart from "../../utilse/useCart";

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
    fetch(`http://localhost:5000/carts/${id}`, {
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
    <div className="max-w-7xl mx-auto p-4 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="border rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-lg font-semibold text-green-600 mb-2">
              ${item.price}
            </p>
          </div>
          <div>
            <button
              onClick={() => handleDelete(item._id)}
              className="custom-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartBooked;
