import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = (props) => {
  const { carts, resetButtonHandle } = props;
  const [suggestion, setSuggestion] = useState([]);
  //   choose 1 for me button handler
  const chooseButtonHandle = (items) => {
    const chosen = items[Math.floor(Math.random() * items.length)];
    setSuggestion(chosen);
  };
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      {carts.map((cart) => (
        <CartItem cart={cart} key={cart.id}></CartItem>
      ))}
      <button onClick={() => resetButtonHandle(carts)} className="reset-btn">
        Reset
      </button>
      <button onClick={() => chooseButtonHandle(carts)} className="choose-btn">
        Choose 1 For Me
      </button>
      <h3>Buy Suggestion:</h3>
      <div className="buy-suggestion">
        <p>
          <small>{suggestion.name}</small>
        </p>
      </div>
    </div>
  );
};

export default Cart;
