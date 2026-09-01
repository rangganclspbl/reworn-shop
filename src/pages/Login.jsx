import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login-page">
      <section className="login-container">

        <Link to="/" className="login-back">
          ← Back
        </Link>

        {/* Logo */}
        <div className="login-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h2>Welcome back</h2>
          <p>Sign in to continue to Reworn Shop.</p>
        </div>

        {/* Login Form */}
        <form className="login-form">

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button className="login-button" type="submit">
            Login
          </button>

        </form>

        {/* Social Login */}
        <div className="social-login">

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button">
            Continue with Google
          </button>

          <button type="button">
            Continue with Facebook
          </button>

        </div>

        {/* Sign Up */}
        <div className="signup-link">
          <p>
            Don't have an account?
            <a href="/signup"> Sign up</a>
          </p>
        </div>

      </section>
    </main>
  );
}

export default Login;