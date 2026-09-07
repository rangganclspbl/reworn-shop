import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "../../../components/ui/LoadingButton";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setError("");
  }

  async function handleSubmit(event) {
    // The form might be automatically reloading the page upon submission.
    event.preventDefault();

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const registeredEmail = "rangga@gmail.com";

      if (email === registeredEmail) {
        navigate("/verification");
      } else {
        setError("Email is not registered!");
        setEmail("");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="forgot-page">
      <div className="forgot-container">
        <div className="forgot-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        <div className="forgot-content">
          <h2>Forgot your password?</h2>
          <p>
            Enter your email address and we'll send you a verification code to
            reset your password.
          </p>
          {/* Form */}
          <form className="forgot-form" onSubmit={handleSubmit}>
            <div className="forgot-form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />

              {error && (
                <ErrorMessage onHide={() => setError("")}>{error}</ErrorMessage>
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
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
