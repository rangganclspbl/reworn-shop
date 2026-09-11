import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Login from "../features/auth/login/pages/LoginPage";
import ForgotPassword from "../features/auth/forgot-password/pages/ForgotPasswordPage";
import Verification from "../features/auth/forgot-password/pages/VerificationPage";
import NewPassword from "../features/auth/forgot-password/pages/NewPasswordPage";
import Signup from "../features/auth/signup/pages/SignupPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="new-password" element={<NewPassword />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/*"
        element={
          <>
            <Navbar />
          </>
        }
      />
    </Routes>
  );
}

export default AppRouter;
