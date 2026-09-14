import "./SignupPage.css";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout";
import PasswordField from "../../components/PasswordField";

import LoadingButton from "../../../../components/ui/LoadingButton";
import ErrorMessage from "../../../../components/ui/ErrorMessage";

import { AUTH_ROUTES } from "../../../../constants/auth";
import useSignupForm from "../hooks/useSignupForm";

function Signup() {
  const {
    name,
    setName,

    email,
    setEmail,

    password,
    setPassword,

    confirmPassword,
    setConfirmPassword,

    showPassword,
    setShowPassword,

    showConfirmPassword,
    setShowConfirmPassword,

    loading,

    errors,
    setErrors,

    handleInput,
    handleSubmit,
  } = useSignupForm();

  return (
    <AuthLayout
      back={
        <Link to={AUTH_ROUTES.HOME} className="signup-back">
          ← Back
        </Link>
      }
    >
      {/* Heading */}
      <div className="signup-heading">
        <h2>Create an account</h2>
        <p>Join REWORN SHOP and start shopping.</p>
      </div>

      {/* Signup Form */}
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="auth-form-group">
          <label htmlFor="name">Full name</label>

          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => handleInput(event, setName)}
          />

          {errors.name && (
            <ErrorMessage
              onHide={() =>
                setErrors((prev) => ({
                  ...prev,
                  name: "",
                }))
              }
            >
              {errors.name}
            </ErrorMessage>
          )}
        </div>

        {/* Email */}
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => handleInput(event, setEmail)}
          />

          {errors.email && (
            <ErrorMessage
              onHide={() =>
                setErrors((prev) => ({
                  ...prev,
                  email: "",
                }))
              }
            >
              {errors.email}
            </ErrorMessage>
          )}
        </div>

        {/* Password */}
        <PasswordField
          id="password"
          label="Password"
          placeholder="Create a password"
          value={password}
          onChange={(event) => handleInput(event, setPassword)}
          showPassword={showPassword}
          onToggleVisibility={() => setShowPassword(!showPassword)}
          showToggle={true}
        />

        {errors.password && (
          <ErrorMessage
            onHide={() =>
              setErrors((prev) => ({
                ...prev,
                password: "",
              }))
            }
          >
            {errors.password}
          </ErrorMessage>
        )}

        {/* Confirm Password */}
        <PasswordField
          id="confirm-password"
          label="Confirm password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(event) => handleInput(event, setConfirmPassword)}
          showPassword={showConfirmPassword}
          onToggleVisibility={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
          showToggle={true}
        />

        {errors.confirmPassword && (
          <ErrorMessage
            onHide={() =>
              setErrors((prev) => ({
                ...prev,
                confirmPassword: "",
              }))
            }
          >
            {errors.confirmPassword}
          </ErrorMessage>
        )}

        {/* General Error */}
        {errors.general && (
          <ErrorMessage
            onHide={() =>
              setErrors((prev) => ({
                ...prev,
                general: "",
              }))
            }
          >
            {errors.general}
          </ErrorMessage>
        )}

        {/* Create Account */}
        <LoadingButton
          type="submit"
          className="signup-button"
          loading={loading}
        >
          Create account
        </LoadingButton>
      </form>

      {/* Social Login */}
      <div className="signup-social">
        <div className="signup-divider">
          <span>OR</span>
        </div>

        <button type="button">Continue with Google</button>

        <button type="button">Continue with Facebook</button>
      </div>

      {/* Login */}
      <div className="signup-login">
        <p>
          Already have an account?
          <Link to={AUTH_ROUTES.LOGIN}> Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Signup;