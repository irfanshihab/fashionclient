export const addToCart = async (product) => {
  try {
    const response = await fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.status === 400) {
      const result = await response.json();
      alert(result.message); // "Item already in cart"
    } else if (!response.ok) {
      throw new Error("Failed to add item to cart");
    } else {
      alert("Item added to cart successfully!");
    }
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
