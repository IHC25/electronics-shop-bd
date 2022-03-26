import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { name, img } = props.cart;
  return (
    <div className="cart-item">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default CartItem;
