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