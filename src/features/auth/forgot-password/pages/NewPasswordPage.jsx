import "./NewPasswordPage.css";
import useNewPassword from "../hooks/useNewPassword";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import { AUTH_ROUTES } from "../../../../constants/auth";
import LoadingButton from "../../../../components/ui/LoadingButton";
import ErrorMessage from "../../../../components/ui/ErrorMessage";
import PasswordField from "../../components/PasswordField";

function NewPassword() {
  const {
    password,
    confirmPassword,
    error,
    setError,
    showPassword,
    setShowPassword,
    loading,
    success,
    navigate,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useNewPassword();

  return (
    <AuthLayout>
      {success ? (
        <div className="password-success">
          <h2>Password changed!</h2>

          <p>Your password has been successfully updated.</p>

          <button
            type="button"
            onClick={() => navigate(AUTH_ROUTES.LOGIN)}
          >
            Continue to Login
          </button>
        </div>
      ) : (
        <div className="new-password-content">
          <h2>Create a new password</h2>

          <p>Create a new password for your REWORN SHOP account.</p>

          <form
            className="new-password-form"
            onSubmit={handleSubmit}
          >
            <PasswordField
              id="new-password"
              label="New password"
              placeholder="Enter your new password"
              value={password}
              onChange={handlePasswordChange}
              showPassword={showPassword}
            />

            <PasswordField
              id="confirm-password"
              label="Confirm password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              showPassword={showPassword}
              onToggleVisibility={() =>
                setShowPassword(!showPassword)
              }
              showToggle={true}
            />

            {error && (
              <ErrorMessage onHide={() => setError("")}>
                {error}
              </ErrorMessage>
            )}

            <LoadingButton
              type="submit"
              loading={loading}
              className="new-password-button"
            >
              Submit new password
            </LoadingButton>
          </form>

          <div className="back-login">
            <Link to={AUTH_ROUTES.LOGIN}>
              Back to Login
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}

export default NewPassword;
