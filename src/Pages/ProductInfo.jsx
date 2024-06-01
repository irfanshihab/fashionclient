// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductInfo = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`https://api.example.com/products/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="w-10 h-10 animate-spin rounded-full border-4 border-dashed border-sky-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-red-500">Error: {error}</div>;
//   }

//   if (!product) {
//     return <div className="text-center text-gray-500">No product found</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       <img
//         src={product?.image}
//         alt={product?.name}
//         className="w-full h-64 object-cover mb-4"
//       />
//       <p className="text-lg text-gray-700 mb-2">{product?.description}</p>
//       <p className="text-xl font-semibold text-green-600 mb-2">
//         ${product.price}
//       </p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductInfo;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { _id } = useParams();

  console.log(typeof _id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("/fashion.json");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        const product = data.find((p) => p._id === parseInt(_id));

        if (!product) {
          throw new Error("Product not found");
        }

        setProduct(product);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [_id]);

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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
      <img
        src="https://i.ibb.co/WNhvgt7/eaters-collective-uh-Jfa-J6c9f-Y-unsplash.jpg"
        alt={product?.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">{product?.category}</p>
      <p className="text-xl font-semibold text-green-600 mb-2">
        ${product?.price}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
