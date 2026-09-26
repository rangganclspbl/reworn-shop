import { useState, useEffect } from "react";
import ProductServices from "../services/ProductServices";

function useProduct(productId) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                const products = await ProductServices.getProducts();
                const foundProduct = products.find(
                    (product) => product.id === productId
                );
                setProduct(foundProduct);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [productId])

    return {
        product,
        loading,
        error
    }
}

export default useProduct;