import { useState } from "react";
import useCart from "../../cart/hooks/useCart";

function useCheckout() {
  const [shippingSelections, setShippingSelections] = useState({});
  const { selectedProduct } = useCart();

  function handleShippingChange(productId, shippingMethod) {
    setShippingSelections((prev) => {
      return {
        ...prev,
        [productId]: shippingMethod,
      };
    });
  }

  const values = Object.values(shippingSelections);

  const totalShipping = values
    .map((shippingMethod) => {
      if (shippingMethod === "regular") {
        return 5;
      } else if (shippingMethod === "express") {
        return 10;
      }
    })
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  
  const subtotal = selectedProduct.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  },0)

  const grandTotal = totalShipping + subtotal;

  return {shippingSelections, handleShippingChange, totalShipping, subtotal, grandTotal};
}

export default useCheckout;
