import { useParams } from "react-router-dom";

import useProduct from "../../hooks/useProduct";

function ProductDetailPage() {
  const { productId } = useParams();

  const { product, loading, error } = useProduct(productId);

  if (loading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main>Something went wrong.</main>;
  }

  if (!product) {
    return <main>Product not found.</main>;
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </main>
  );
}

export default ProductDetailPage;