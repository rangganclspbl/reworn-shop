import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <h2>Payment</h2>
      <div className="payment-methods">
        <label className="payment-option">
          <input type="radio" name="payment-method" value="card" />
          <span>Credit / Debit Card</span>
        </label>

        <label className="payment-option">
          <input type="radio" name="payment-method" value="bank-transfer" />
          <span>Bank Transfer</span>
        </label>

        <label className="payment-option">
          <input type="radio" name="payment-method" value="e-wallet" />
          <span>E-Wallet</span>
        </label>
      </div>
    </div>
  )
}

export default Payment;