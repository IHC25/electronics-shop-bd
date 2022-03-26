import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // add to cart button handler
  const handleAddToCart = (selectedProduct) => {
    let carts = [...cart];
    const existed = carts.find((product) => product.id === selectedProduct.id);
    if (!existed) {
      carts.push(selectedProduct);
    }
    setCart(carts);
  };
  // reset button handler
  const resetButtonHandle = () => {
    setCart([]);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart carts={cart} resetButtonHandle={resetButtonHandle}></Cart>
      </div>
    </div>
  );
};

export default Shop;
