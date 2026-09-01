import "./NewPassword.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function inputPassword(event) {
    setPassword(event.target.value);
  }

  function inputConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await new Promise ((resolve) => setTimeout(resolve, 2000));
      if (confirmPassword === password) {
        navigate("/");
      } else {
        setError('Passwords do not match!')
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="new-password-page">
      <div className="new-password-container">

        <div className="new-password-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        <div className="new-password-content">
          <h2>Create a new password</h2>

          <p>
            Create a new password for your REWORN SHOP account.
          </p>

          <form className="new-password-form">
            <div className="new-password-form-group">
              <label htmlFor="new-password">
                New password
              </label>

              <input
                type="password"
                id="new-password"
                placeholder="Enter your new password"
                value={password}
                onChange={inputPassword}
              />
            </div>

            <div className="new-password-form-group">
              <label htmlFor="confirm-password">
                Confirm password
              </label>

              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={inputConfirmPassword}
              />
            </div>

            <button
              type="submit"
              className="new-password-button"
            >
              Reset password
            </button>
          </form>

          <div className="back-login">
            <a href="/login">Back to Login</a>
          </div>
        </div>

      </div>
    </main>
  );
}

export default NewPassword;