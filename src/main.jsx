import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main.jsx";
import Home from "./Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ProductInfo from "./Pages/ProductInfo.jsx";
import CartBooked from "./Pages/cart/CartBooked.jsx";
import CartInfo from "./Pages/cart/CartInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductInfo />,
      },
      {
        path: "/carts",
        element: <CartBooked />,
      },
      {
        path: "/carts/:id",
        element: <CartInfo />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bgFull">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
