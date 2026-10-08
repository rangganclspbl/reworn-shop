import "./CheckoutPage.css";
import useCart from "../../../cart/hooks/useCart";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";
import Payment from "../../components/Payment/Payment";

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
          <div className="shipping-address-section">
            <ShippingAddress />
          </div>
          <div className="payment-summary-section">
            <Payment />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage;