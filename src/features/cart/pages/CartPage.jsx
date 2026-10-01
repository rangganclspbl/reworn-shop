import CartItem from "../components/CartItem/CartItem";
import "./CartPage.css";
import useCart from "../hooks/useCart";

function CartPage() {
  const { cartProducts, total, removeFromCart } = useCart();

  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <section className="cart-items">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} product={product} onRemove={removeFromCart} />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </section>

        <div className="cart-checkout">
          <div className="cart-total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>

          <button className="cart-checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
