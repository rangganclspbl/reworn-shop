import products from "../../products/data/products";
import { useState } from "react";

function useCart() {
  const [cartProductIds, setCartProductIds] = useState(["prd_001", "prd_003", "prd_012"]);

  function removeFromCart(productId) {
    const updateCart = cartProductIds.filter((id) => {
      return id !== productId;
    })
    setCartProductIds(updateCart);
  }

  const cartProducts = cartProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
  
  const total = cartProducts.reduce((total, product) => {
    return total + product.price; 
  }, 0);

  return {
    cartProducts,
    total,
    removeFromCart,
  };
}

export default useCart;