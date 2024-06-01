export const addToCart = async (product) => {
  try {
    const response = await fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
    alert("Item added to cart successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to add item to cart");
  }
};

export const getCartItems = async () => {
  try {
    const response = await fetch("http://localhost:5000/carts");
    if (!response.ok) {
      throw new Error("Failed to fetch cart items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch cart items");
    return [];
  }
};
