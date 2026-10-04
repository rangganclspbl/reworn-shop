import { useState } from "react";
import CartContext from "./CartContext";
import products from "../../products/data/products";

function CartProvider({ children }) {
  const [cartProductIds, setCartProductIds] = useState([
    "prd_001",
    "prd_003",
    "prd_012",
  ]);

  const cartProducts = cartProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  const total = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  function removeFromCart(productId) {
    const updateCart = cartProductIds.filter((id) => {
      return id !== productId;
    });
    setCartProductIds(updateCart);
  }

  function addToCart(productId) {
    if (cartProductIds.includes(productId)) {
      return;
    }

    const updateCart = [...cartProductIds, productId];

    setCartProductIds(updateCart);
  }

  return (
    <CartContext.Provider value={{ cartProductIds, removeFromCart, addToCart, total, cartProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
