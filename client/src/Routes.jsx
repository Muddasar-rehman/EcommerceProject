import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductItems from "./components/ProductItems";
import ProductHome from "./components/ProductHome";
import Cart from "./components/Cart";

import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
const ShoesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="/" element={<ProductHome />} />
          <Route path=":productId" element={<ProductItems />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default ShoesRoutes;
