import { useState } from "react";
import useCart from "./useCart";

function useAddToCart() {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAddToCart(productId) {
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);

      addToCart(productId);

      setIsAdded(true);

      setTimeout(() => {
        setIsAdded(false);
      }, 1000);
    }, 1000);
  }

  return {
    isAdding,
    isAdded,
    handleAddToCart,
  };
}

export default useAddToCart;
