import "./SignupPage.css";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import { AUTH_ROUTES } from "../../../../constants/auth";

function Signup() {
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
      <form className="signup-form">
        {/* Full Name */}
        <div className="auth-form-group">
          <label htmlFor="name">Full name</label>

          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="auth-form-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            placeholder="Create a password"
          />
        </div>

        {/* Confirm Password */}
        <div className="auth-form-group">
          <label htmlFor="confirm-password">
            Confirm password
          </label>

          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
          />
        </div>

        {/* Create Account */}
        <button type="submit" className="signup-button">
          Create account
        </button>
      </form>

      {/* Social Login */}
      <div className="signup-social">
        <div className="signup-divider">
          <span>OR</span>
        </div>

        <button type="button">
          Continue with Google
        </button>

        <button type="button">
          Continue with Facebook
        </button>
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