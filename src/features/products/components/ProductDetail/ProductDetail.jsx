import "./ProductDetail.css";
import formatLabel from "../../../../utils/formatLabel";
import useCart from "../../../cart/hooks/useCart";
import useAddToCart from "../../../cart/hooks/useAddToCart";
import LoadingButton from "../../../../components/ui/LoadingButton";
import { Check } from "lucide-react";

function ProductDetail({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const { cartProducts, removeFromCart } = useCart();

  const isInCart = cartProducts.some((cartProduct) => {
    return product.id === cartProduct.id;
  });

  const { isAdding, isAdded, handleAddToCart } = useAddToCart();

  return (
    <section className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <p className="product-detail-brand">{product.brand}</p>

        <h1 className="product-detail-name">{product.name}</h1>

        <p className="product-detail-condition">
          Condition: {formatLabel(product.condition)}
        </p>

        <p className="product-detail-price">{formattedPrice}</p>

        <div className="product-detail-description">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

        <div className="product-detail-meta">
          <p>Category: {formatLabel(product.category)}</p>

          <p>Subcategory: {formatLabel(product.subcategory)}</p>

          <p>Gender: {product.gender.map(formatLabel).join(", ")}</p>
        </div>

        <div className="product-detail-actions">
          <LoadingButton
            loading={isAdding}
            type="submit"
            className={`product-detail-cart-button ${
              isAdding ? "is-adding" : ""
            } ${isAdded ? "is-added" : ""}`}
            onClick={() => {
              if (isInCart) {
                removeFromCart(product.id);
              } else {
                handleAddToCart(product.id);
              }
            }}
          >
            {isAdded ? (
              <>
                <Check size={16} strokeWidth={2.5} />
                Added to cart
              </>
            ) : isInCart ? (
              "Remove from Cart"
            ) : (
              "Add to Cart"
            )}
          </LoadingButton>

          <button type="button">Buy Now</button>

          <button type="button">Wishlist</button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
