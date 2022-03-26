import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = (props) => {
  const { carts } = props;
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      {carts.map((cart) => (
        <CartItem cart={cart}></CartItem>
      ))}
    </div>
  );
};

export default Cart;
