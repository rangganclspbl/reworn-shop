import CartItem from "../components/CartItem/CartItem";
import { useState } from "react";
import "./CartPage.css";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartProducts, total, removeFromCart } = useCart();
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  function handleCheckout() {
    if (cartProducts.length === 0) {
      setShowEmptyCartMessage(true);
    } else {
      console.log("Proceed to checkout")
    }
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {showEmptyCartMessage && (
          <>
            <div className="cart-overlay"></div>
            
            <div className="cart-empty-message">
              <h2>Your cart is empty</h2>
              <p>Add an item before proceeding to checkout.</p>

              <button onClick={() => { setShowEmptyCartMessage(false) }}>
                OKE
              </button>
            </div>
          </>

        )}

        <section className="cart-items">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} product={product} onRemove={removeFromCart} />
            ))
          ) : (
            <div className="cart-empty">
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything yet.</p>

              <Link to="/products">
                Continue Shopping
              </Link>
            </div>
          )}
        </section>

        <div className="cart-checkout">
          <div className="cart-total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>

          <button className="cart-checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
