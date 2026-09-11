import "./LoginPage.css";
import { Link } from "react-router-dom";
import useLoginForm from "../hooks/useLoginForm";
import LoadingButton from "../../../../components/ui/LoadingButton";
import ErrorMessage from "../../../../components/ui/ErrorMessage";
import PasswordField from "../../components/PasswordField";
import { AUTH_ROUTES } from "../../../../constants/auth";
import AuthLayout from "../../components/AuthLayout";
import "../../components/AuthLayout.css";

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loading,
    error,
    setError,
    handleInput,
    handleSubmit,
    showPassword,
    setShowPassword
  } = useLoginForm();

  return (
    <AuthLayout
      back={
        <Link to={AUTH_ROUTES.HOME} className="login-back">
          ← Back
        </Link>
      }
    >
      {/* Heading */}
      <div className="login-heading">
        <h2>Welcome back</h2>
        <p>Sign in to continue to Reworn Shop.</p>
      </div>

      {/* Login Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => handleInput(event, setEmail)}
          />
        </div>

        <PasswordField
          id="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => handleInput(event, setPassword)}
          showPassword={showPassword}
          onToggleVisibility={() => setShowPassword(!showPassword)}
        />

        {error && (
          <ErrorMessage onHide={() => setError("")}>
            {error}
          </ErrorMessage>
        )}

        <div className="remember-me">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />

            <span>Remember me</span>
          </label>

          <div className="forgot-password">
            <Link to={AUTH_ROUTES.FORGOT_PASSWORD}>
              Forgot password?
            </Link>
          </div>
        </div>

        <LoadingButton
          className="login-button"
          loading={loading}
          type="submit"
        >
          Login
        </LoadingButton>
      </form>

      {/* Social Login */}
      <div className="social-login">
        <div className="divider">
          <span>OR</span>
        </div>

        <button type="button">Continue with Google</button>

        <button type="button">Continue with Facebook</button>
      </div>

      {/* Sign Up */}
      <div className="signup-link">
        <p>
          Don't have an account?
          <Link to={AUTH_ROUTES.SIGNUP}> Sign up</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
