import { toast } from "react-toastify";

export const addToCart = async (product) => {
  try {
    const response = await fetch(
      "https://fashion-server-eight.vercel.app/carts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (response.status === 400) {
      const result = await response.json();
      toast(result.message); // "Item already in cart"
    } else if (!response.ok) {
      throw new Error("Failed to add item to cart");
    } else {
      toast("Item added to cart successfully!");
    }
  } catch (error) {
    console.error(error);
    toast("Failed to add item to cart");
  }
};

export const getCartItems = async () => {
  try {
    const response = await fetch(
      "https://fashion-server-eight.vercel.app/carts"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch cart items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    toast("Failed to fetch cart items");
    return [];
  }
};
