import React from "react";
import { Outlet } from "react-router";

const Products = () => {
  return (
    <section className="main">
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Products;
