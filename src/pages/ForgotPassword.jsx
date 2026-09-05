import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton, ErrorMessage } from "../components/FormComponents";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function inputEmail(event) {
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
                onChange={inputEmail}
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
            <a href="/login">Back to Login</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
