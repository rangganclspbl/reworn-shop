import CartItem from "../components/CartItem/CartItem";
import { useState } from "react";
import "./CartPage.css";
import useCart from "../hooks/useCart";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const { cartProducts, total, removeFromCart, selectedProductIds, toggleProductSelection } = useCart();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  function handleCheckout() {
    if (cartProducts.length === 0) {
      setMessage("empty");
    }
    else if (selectedProductIds.length === 0) {
      setMessage("not-selected");
    } else {
      navigate("/checkout");
    }
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        <Link to="/products" className="cart-back-link">
          ← Continue Shopping
        </Link>
        <h1>Shopping Cart</h1>
        {message && (
          <>
            <div className="cart-overlay"></div>

            <div className="cart-empty-message">
              <h2>
                {message === "empty" ? "Your cart is empty" : "No product selected"}
              </h2>
              <p>{message === "empty" ? "Looks like you haven't added anything yet." : "Please select at least one product before proceeding to checkout"}</p>

              <button onClick={() => { setMessage(null) }}>
                OKE
              </button>
            </div>
          </>

        )}

        <section className="cart-items">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} product={product} onRemove={removeFromCart} isSelected={selectedProductIds.includes(product.id)} onToggle={toggleProductSelection} />
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
