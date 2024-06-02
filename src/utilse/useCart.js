// import { useState, useEffect } from "react";

// const useCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/carts");
//         if (!response.ok) {
//           throw new Error("Failed to fetch cart items");
//         }
//         const data = await response.json();
//         setCartItems(data);
//         setCartCount(data.length);
//       } catch (error) {
//         console.error(error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   return { cartItems, cartCount, loading, error };
// };

// export default useCart;

import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const removeCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  return { cartItems, loading, error, removeCartItem };
};

export default useCart;
