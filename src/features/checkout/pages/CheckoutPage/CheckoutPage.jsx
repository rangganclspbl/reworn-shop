import "./CheckoutPage.css";
import useCart from "../../../cart/hooks/useCart";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";
import Payment from "../../components/Payment/Payment";
import useCheckout from "../../hooks/useCheckout";
import OrderTotal from "../../components/OrderTotal/OrderTotal";

function CheckoutPage() {
  const { selectedProduct, total } = useCart();
  const { shippingSelections, totalShipping, grandTotal, handleShippingChange, isShippingComplete } = useCheckout();

  return (
    <main className="checkout-page">

      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-order-date">
          <span>Order Date</span>
          <span>October 7, 2026</span>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-left">
          <CheckoutSummary selectedProduct={selectedProduct} onShippingChange={handleShippingChange} shippingSelections={shippingSelections} />
        </div>

        <div className="checkout-right">
          <div className="shipping-address-section">
            <ShippingAddress />
          </div>
          <div className="payment-summary-section">
            <Payment />
          </div>
          <div className="order-total-section">
            <OrderTotal total={total} totalShipping={totalShipping} grandTotal={grandTotal} isShippingComplete={isShippingComplete} />
          </div>
        </div>
      </div>

    </main>
  )
}

export default CheckoutPage;