import "./CheckoutSummary.css";

function CheckoutSummary({ selectedProduct, total }) {
  return (
    <div className="checkout-summary">
      <h2>Order Summary</h2>

      {selectedProduct.map((product) => (
        <div className="list-product" key={product.id}>
          <div className="image-item">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-content">
            <div className="product-header">
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
              </div>

              <span className="product-price">${product.price}</span>
            </div>

            <div className="seller-note">
              <span>Note for seller</span>
              <textarea></textarea>
            </div>

            <div className="product-shipping">
              <span className="shipping-title">Shipping</span>
              <div className="shipping-options">
                <label className="shipping-option">
                  <input
                    type="radio"
                    name="shipping-[product id]"
                    value="regular"
                  />
                  <div className="shipping-info">
                    <span className="shipping-name">Regular</span>
                    <span className="shipping-estimate">
                      Estimated 3-5 days
                    </span>
                  </div>
                  <span className="shipping-price">$5</span>
                </label>

                <label className="shipping-option">
                  <input
                    type="radio"
                    name="shipping-[product id]"
                    value="express"
                  />
                  <div className="shipping-info">
                    <span className="shipping-name">Express</span>
                    <span className="shipping-estimate">
                      Estimated 1-2 days
                    </span>
                  </div>
                  <span className="shipping-price">$10</span>
                </label>
              </div>
            </div>
            
          </div>
        </div>
      ))}

      <div className="price-total">
        <span>Total</span>
        <strong>${total}</strong>
      </div>
    </div>
  );
}

export default CheckoutSummary;
