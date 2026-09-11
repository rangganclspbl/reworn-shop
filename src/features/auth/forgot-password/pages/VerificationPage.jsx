import "./VerificationPage.css";
import { Link } from "react-router-dom";
import useVerification from "../hooks/useVerification";
import LoadingButton from "../../../../components/ui/LoadingButton";
import AuthLayout from "../../components/AuthLayout";
import "../../components/AuthLayout.css";
import ErrorMessage from "../../../../components/ui/ErrorMessage";
import { VERIFICATION_CODE_LENGTH, AUTH_ROUTES } from "../../../../constants/auth";

function Verification() {
  const {
    code,
    timeLeft,
    isResending,
    loading,
    error,
    handleCodeChange,
    handleSubmit,
    handleResend,
    handleErrorHide,
  } = useVerification();

  return (
  <AuthLayout>
    <div className="verification-content">
      <h2>Verification code</h2>

      <p>
        Enter the verification code we sent to your email address.
      </p>

      <form className="verification-form" onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <label htmlFor="verification-code">
            Verification code
          </label>

          <input
            type="text"
            id="verification-code"
            placeholder="Enter verification code"
            maxLength={VERIFICATION_CODE_LENGTH}
            value={code}
            onChange={handleCodeChange}
          />

          {error && (
            <ErrorMessage onHide={handleErrorHide}>
              {error}
            </ErrorMessage>
          )}

          {timeLeft > 0 ? (
            <p className="code-expiry">
              Code expires in {timeLeft}s
            </p>
          ) : (
            <button
              type="button"
              className="resend-button"
              onClick={handleResend}
              disabled={isResending}
            >
              {isResending ? "Sending..." : "Resend Code"}
            </button>
          )}
        </div>

        <LoadingButton
          type="submit"
          loading={loading}
          className="verification-button"
        >
          Verify code!
        </LoadingButton>
      </form>

      <div className="back-login">
        <Link to={AUTH_ROUTES.LOGIN}>Back to Login</Link>
      </div>
    </div>
  </AuthLayout>
);
}

export default Verification;
