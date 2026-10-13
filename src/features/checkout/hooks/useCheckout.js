import { useState } from "react";
import useCart from "../../cart/hooks/useCart";

function useCheckout() {
  const [shippingSelections, setShippingSelections] = useState({});
  const { selectedProduct, total } = useCart();

  function handleShippingChange(productId, shippingMethod) {
    setShippingSelections((prev) => {
      return {
        ...prev,
        [productId]: shippingMethod,
      };
    });
  }
  
  const isShippingComplete = selectedProduct.every((product) => {
    return shippingSelections[product.id] !== undefined;
  })

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

  const grandTotal = totalShipping + total;

  return {shippingSelections, handleShippingChange, isShippingComplete, totalShipping, grandTotal};
}

export default useCheckout;
