import { useContext } from "react";
import CartContext from "../context/CartContext";

function useCart() {
  const cart = useContext(CartContext);

  return cart;
}

export default useCart;