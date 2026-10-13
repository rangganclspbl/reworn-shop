import "./OrderTotal.css";

function OrderTotal({ total, totalShipping, grandTotal, isShippingComplete }) {
  return (
    <div className="order-total">
      <h2>Order Total</h2>
      <div className="order-total-row">
        <span>Subtotal</span>
        <strong>${total}</strong>
      </div>
      <div className="order-total-row">
        <span>Shipping</span>
        <strong>${totalShipping}</strong>
      </div>
      <div className="order-total-grand">
        <span>Total</span>
        <strong>${grandTotal}</strong>
      </div>
      <button className="place-order-button" disabled={!isShippingComplete} onClick={() => {console.log("Place order clicked!");
      }}>
        Place Order
      </button>
    </div>
  );
}

export default OrderTotal;
