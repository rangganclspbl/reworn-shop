import "./NewPassword.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton, ErrorMessage } from "../components/FormComponents";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function inputPassword(event) {
    setPassword(event.target.value);
  }

  function inputConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (confirmPassword === password) {
        setSuccess(true);
      } else {
        setError("Passwords do not match!");
        setPassword("");
        setConfirmPassword("")
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="new-password-page">
      <div className="new-password-container">
        <div className="new-password-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        {success ? (
          <div className="password-success">
            <h2>Password changed!</h2>

            <p>Your password has been successfully updated.</p>

            <button type="button" onClick={() => navigate("/login")}>
              Continue to Login
            </button>
          </div>
        ) : (
          <>
            <div className="new-password-content">
              <h2>Create a new password</h2>

              <p>Create a new password for your REWORN SHOP account.</p>

              <form className="new-password-form" onSubmit={handleSubmit}>
                <div className="new-password-form-group">
                  <label htmlFor="new-password">New password</label>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={inputPassword}
                  />
                </div>

                <div className="new-password-form-group">
                  <label htmlFor="confirm-password">Confirm password</label>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirm-password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={inputConfirmPassword}
                  />

                  <button
                    type="button"
                    className="show-password-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide password" : "Show password"}
                  </button>

                  {error && (
                    <ErrorMessage onHide={() => setError("")}>
                      {error}
                    </ErrorMessage>
                  )}
                </div>

                <LoadingButton
                  type="submit"
                  loading={loading}
                  className="new-password-button"
                >
                  Submit new password
                </LoadingButton>
              </form>

              <div className="back-login">
                <a href="/login">Back to Login</a>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default NewPassword;
