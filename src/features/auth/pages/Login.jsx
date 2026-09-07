import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingButton from "../../../components/ui/LoadingButton";
import ErrorMessage from "../../../components/ui/ErrorMessage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleInput(event, setState) {
    setState(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const registeredEmail = "rangga@gmail.com";
      const registeredPassword = "123456";

      if (email !== registeredEmail || password !== registeredPassword) {
        setError("Incorrect email or password.");
        setEmail("");
        setPassword("");
        return;
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

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
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => handleInput(event, setEmail)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => handleInput(event, setPassword)}
            />
          </div>

          {error && (
            <ErrorMessage className="error-message" onHide={() => setError("")}>{error}</ErrorMessage>
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
              <a href="/forgot-password">Forgot password?</a>
            </div>
          </div>

          <LoadingButton className="login-button" loading={loading} type="submit">
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
            <a href="/signup"> Sign up</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
