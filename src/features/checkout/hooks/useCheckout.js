import { useState } from "react";

function useCheckout() {
  const [shippingSelections, setShippingSelections] = useState({});

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

  return (shippingSelections, handleShippingChange);
}

export default useCheckout;
