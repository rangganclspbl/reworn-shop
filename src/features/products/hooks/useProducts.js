import { useEffect, useState } from "react";
import ProductServices from "../services/ProductServices";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await ProductServices.getProducts();

        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;