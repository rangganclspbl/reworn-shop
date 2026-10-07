import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import AllProductsPage from "../features/products/pages/AllProductPage";
import Login from "../features/auth/login/pages/LoginPage";
import ForgotPassword from "../features/auth/forgot-password/pages/ForgotPasswordPage";
import Verification from "../features/auth/forgot-password/pages/VerificationPage";
import NewPassword from "../features/auth/forgot-password/pages/NewPasswordPage";
import Signup from "../features/auth/signup/pages/SignupPage";
import CategoryPage from "../features/products/pages/CategoryPage";
import ProductDetailPage from "../features/products/pages/ProductDetail/ProductDetailPage";
import CartPage from "../features/cart/pages/CartPage";
import CartProvider from "../features/cart/context/CartContext.jsx";
import CheckoutPage from "../features/checkout/pages/CheckoutPage/CheckoutPage.jsx";

function AppRouter() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route
            path="/category/:category/:subcategory"
            element={<CategoryPage />}
          />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default AppRouter;
