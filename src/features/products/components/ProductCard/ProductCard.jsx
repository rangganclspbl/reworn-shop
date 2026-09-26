import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
    >
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-card-content">
        <p className="product-card-brand">
          {product.brand}
        </p>

        <h3 className="product-card-name">
          {product.name}
        </h3>

        <p className="product-card-condition">
          Condition: {product.condition}
        </p>

        <p className="product-card-price">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;