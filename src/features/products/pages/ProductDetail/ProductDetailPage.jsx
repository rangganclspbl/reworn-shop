import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import useProduct from "../../hooks/useProduct";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Breadcrumb from "../../../../components/ui/Breadcrumb/Breadcrumb";
import formatLabel from "../../../../utils/formatLabel";

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

  const breadcrumbItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: formatLabel(product.gender[0]),
      path: `/category/${product.gender[0]}`,
    },
    {
      label: formatLabel(product.subcategory),
      path: `/category/${product.gender[0]}/${product.subcategory}`,
    },
    {
      label: product.name,
    },
  ];

  return (
    <main className="product-detail-page">
      <Breadcrumb items={breadcrumbItems} />
      <ProductDetail product={product} />
    </main>
  );
}

export default ProductDetailPage;
