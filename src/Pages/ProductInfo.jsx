import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fashion-server-eight.vercel.app/clothes/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // const addToCart = async () => {
  //   console.log(product);
  //   const { _id, name, price, gender, newCollection, img, description, size } =
  //     product;
  //   const cartBooked = {
  //     clothesId: _id,
  //     name,
  //     price,
  //     gender,
  //     newCollection,
  //     img,
  //     description,
  //     size,
  //   };
  //   console.log(cartBooked);
  //   try {
  //     const response = await fetch("https://fashion-server-eight.vercel.app/carts", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(cartBooked),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to add item to cart");
  //     }
  //     alert("Item added to cart successfully!");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to add item to cart");
  //   }
  // };
  const addToCart = async () => {
    if (!product) return;

    const {
      _id,
      name,
      category,
      price,
      gender,
      newCollection,
      img,
      description,
      size,
    } = product;
    const cartBooked = {
      clothesId: _id,
      name,
      price,
      gender,
      category,
      newCollection,
      img,
      description,
      size,
    };
    console.log(cartBooked);
    try {
      const response = await fetch(
        "https://fashion-server-eight.vercel.app/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartBooked),
        }
      );
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

  if (!product) {
    return <div className="text-center text-gray-500">No product found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <img
        src={product?.img}
        alt={product?.name}
        className="w-[80%] h-auto object-fill mb-10"
      />
      <div>
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      </div>
      <p className="text-xl text-black mb-2"> {product?.description}</p>

      <div className="mt-5 ">
        <div className="my-5 grid grid-cols-2">
          <p className="text-lg font-semibold text-black mb-2">
            Gender:{product?.gender}
          </p>
          <p className="text-lg font-semibold text-black mb-2">
            Category: {product?.category}
          </p>

          <p className="text-lg font-semibold text-black mb-2">
            Price : {product.price}
          </p>
          <p className="text-lg font-semibold text-black mb-2">
            Collection:{" "}
            {product?.newCollection === true
              ? "Latest collection"
              : "Old collection"}
          </p>
        </div>
        {product.size.map((p, index) => (
          <p key={index} className="text-lg font-semibold text-black mb-2">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-5 ">
        <button onClick={addToCart} className="custom-button w-full">
          <p className="flex items-center justify-center gap-2">
            <HiOutlineShoppingCart />
            <span>Cart</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
