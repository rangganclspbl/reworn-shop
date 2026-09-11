import { Link } from "react-router-dom";
import LoadingButton from "../../../../components/ui/LoadingButton";
import ErrorMessage from "../../../../components/ui/ErrorMessage";
import useForgotPassword from "../hooks/useForgotPassword";
import { AUTH_ROUTES } from "../../../../constants/auth";
import AuthLayout from "../../components/AuthLayout";
import "../../components/AuthLayout.css";
import "./ForgotPasswordPage.css";

function ForgotPassword() {

  const {
    email,
    error,
    setError,
    loading,
    handleEmailChange,
    handleSubmit
  } = useForgotPassword();

  return (
  <AuthLayout>
    <div className="forgot-content">
      <h2>Forgot your password?</h2>

      <p>
        Enter your email address and we'll send you a verification code to
        reset your password.
      </p>

      {/* Form */}
      <form className="forgot-form" onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />

          {error && (
            <ErrorMessage onHide={() => setError("")}>
              {error}
            </ErrorMessage>
          )}
        </div>

        <LoadingButton
          type="submit"
          loading={loading}
          className="forgot-button"
        >
          Send verification code
        </LoadingButton>
      </form>

      {/* Back to Login */}
      <div className="back-login">
        <Link to={AUTH_ROUTES.LOGIN}>Back to Login</Link>
      </div>
    </div>
  </AuthLayout>
);
}

export default ForgotPassword;
