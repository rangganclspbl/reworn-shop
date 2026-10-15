import "./CheckoutPage.css";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import useCart from "../../../cart/hooks/useCart";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";
import Payment from "../../components/Payment/Payment";
import useCheckout from "../../hooks/useCheckout";
import OrderTotal from "../../components/OrderTotal/OrderTotal";

function CheckoutPage() {
  const [ isCancelling, setIsCancelling] = useState(false);
  const { selectedProduct, total, removeFromCart } = useCart();
  const {
    shippingSelections,
    totalShipping,
    grandTotal,
    handleShippingChange,
    isShippingComplete,
    handlePlaceOrder,
  } = useCheckout();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const temporaryProductId = location.state?.temporaryProductId;

  function handleBack() {
    const destination = from || "/cart";
    setIsCancelling(true);
    if (temporaryProductId) {
      removeFromCart(temporaryProductId);
    }
    // if (!from) {
    //   navigate("/cart");
    // } else {
    //   navigate(from);
    // }
    navigate(destination);
  }

  if (selectedProduct.length === 0 && !isCancelling) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <main className="checkout-page">
      <button type="button" className="checkout-back-button" onClick={handleBack}>
        ← Back to Shopping
      </button>
      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-order-date">
          <span>Order Date</span>
          <span>October 7, 2026</span>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-left">
          <CheckoutSummary
            selectedProduct={selectedProduct}
            onShippingChange={handleShippingChange}
            shippingSelections={shippingSelections}
          />
        </div>

        <div className="checkout-right">
          <div className="shipping-address-section">
            <ShippingAddress />
          </div>
          <div className="payment-summary-section">
            <Payment />
          </div>
          <div className="order-total-section">
            <OrderTotal
              total={total}
              totalShipping={totalShipping}
              grandTotal={grandTotal}
              isShippingComplete={isShippingComplete}
              handlePlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
