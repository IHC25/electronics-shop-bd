import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h3>Electronics Shop BD</h3>
      <div>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
