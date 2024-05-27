import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/react-shop-front/shop"> Shop </Link>
        <Link to="/react-shop-front/contact"> Contact </Link>
        <Link to="/react-shop-front/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
