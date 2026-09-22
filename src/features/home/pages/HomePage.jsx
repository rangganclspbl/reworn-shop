import ProductGrid from "../../products/components/ProductGrid/ProductGrid";
import useProducts from "../../products/hooks/useProducts";
import HeroCarousel from "../components/heroCarousel/HeroCarousel";

import "./HomePage.css";

function HomePage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products.</p>;
  }

  const featuredProducts = products.slice(0, 8);

  return (
    <main className="home-page">
      <HeroCarousel />

      <section className="home-products">
        <div className="container">
          <header className="home-products-header">
            <p className="home-products-label">
              DISCOVER
            </p>

            <h2>Featured Products</h2>
          </header>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </main>
  );
}

export default HomePage;