import React from "react";
import { Link } from "react-router-dom";
import "boxicons";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrapper">
        <Link className="logo" to="/">
          <h1>Paris Shoes</h1>
        </Link>

        <nav className="navBar">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="products">
            Product
          </Link>
          {"   "}
        </nav>
        <Link className="" to="cart">
          <i className="cart-icon bx bxs-cart bx-lg"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
