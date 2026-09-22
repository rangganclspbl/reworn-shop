import { useParams, useSearchParams } from "react-router-dom";

import ProductGrid from "../components/ProductGrid/ProductGrid";
import useProducts from "../hooks/useProducts";

import "./CategoryPage.css";

function CategoryPage() {
  const { category, subcategory } = useParams();
  const [searchParams] = useSearchParams();

  const brand = searchParams.get("brand");

  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products.</p>;
  }

  const categoryProducts =
    category === "all"
      ? products
      : category === "branded"
        ? products
        : products.filter((product) =>
            product.gender.includes(category)
          );

  const subcategoryProducts = subcategory
    ? categoryProducts.filter(
        (product) => product.subcategory === subcategory
      )
    : categoryProducts;

  const filteredProducts = brand
    ? subcategoryProducts.filter(
        (product) =>
          product.brand.toLowerCase() === brand.toLowerCase()
      )
    : subcategoryProducts;

  const pageTitle = brand || subcategory || category;

  return (
    <main className="category-page">
      <div className="container">
        <header className="category-page-header">
          <p className="category-page-label">CATEGORY</p>

          <h1>{pageTitle}</h1>

          <p>
            Discover pre-owned pieces from this category.
          </p>
        </header>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <p className="category-empty">
            No products found in this category.
          </p>
        )}
      </div>
    </main>
  );
}

export default CategoryPage;