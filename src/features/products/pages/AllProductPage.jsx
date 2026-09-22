import ProductGrid from "../components/ProductGrid/ProductGrid";
import useProducts from "../hooks/useProducts";
import "../pages/AllProductPage.css";

function AllProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products.</p>;
  }

  return (
    <main className="all-products-page">
      <div className="container">
        <header className="all-products-header">
          <p className="all-products-label">REWORN SHOP</p>

          <h1>All Products</h1>

          <p>
            Discover pre-owned pieces from different brands and styles.
          </p>
        </header>

        <ProductGrid products={products} />
      </div>
    </main>
  );
}

export default AllProductsPage;