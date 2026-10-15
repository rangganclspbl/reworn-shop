import useCart from "../../cart/hooks/useCart";
import { useNavigate, useLocation } from "react-router-dom";

function useBuyNow() {
  const { cartProductIds, addToCart, selectProductForCheckout } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  function handleBuyNow(productId) {
    const isProductInCart = cartProductIds.includes(productId);
    if (!isProductInCart) {
      addToCart(productId);
    }
    selectProductForCheckout(productId);

    /* navigate will move the user to the checkout page while passing the address data of the source page (currentPath) via state. */
    const currentPath = location.pathname;
    navigate("/checkout", {
      //location for carrying navigation data
      state: {
        //The name of the property that stores the source address 
        from: currentPath,
        temporaryProductId: isProductInCart ? null : productId
      },
    });
  }

  return { handleBuyNow };
}

export default useBuyNow;
