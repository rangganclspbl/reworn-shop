import "./ShippingAddress.css";

function ShippingAddress() {
  return (
    <div className="shipping-address">
      <h2>Shipping Address</h2>
      <div className="shipping-address-info">
        <strong>Name</strong>
        <span>Phone Number</span>
        <p>Address</p>
        <p>City, Province, country</p>
      </div>
      <button className="change-address-button">Change Address</button>
    </div>
  );
}

export default ShippingAddress;
