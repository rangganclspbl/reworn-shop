import { useState } from "react";
import CartContext from "./CartContext";
import products from "../../products/data/products";

function CartProvider({ children }) {
  const [cartProductIds, setCartProductIds] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const cartProducts = cartProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
  
  const selectedProduct = cartProducts.filter((product) => {
    return selectedProductIds.includes(product.id)
  })

  const total = selectedProduct.reduce((total, product) => {
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

  function toggleProductSelection(productId) {
    if (selectedProductIds.includes(productId)) {
      const updateCart = selectedProductIds.filter((id) => {
        return id !== productId;
      })
      setSelectedProductIds(updateCart);
    } else {
      const updateCart = [...selectedProductIds, productId];

      setSelectedProductIds(updateCart);
    }
  }

  return (
    <CartContext.Provider value={{ cartProductIds, removeFromCart, addToCart, toggleProductSelection, selectedProductIds, total, cartProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
