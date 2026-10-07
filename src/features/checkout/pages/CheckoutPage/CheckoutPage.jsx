import "./CheckoutPage.css";
import useCart from "../../../cart/hooks/useCart";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";

function CheckoutPage() {
  const { selectedProduct, total } = useCart();

  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-order-date">
          <span>Order Date</span>
          <span>October 7, 2026</span>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-left">
          <CheckoutSummary selectedProduct={selectedProduct} total={total} />
        </div>

        <div className="checkout-right">
          <div className="shipping-section">
            <h2>Shipping</h2>
          </div>
          <div className="price-summary">
            <h2>Summary</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage;