import "./ForgotPassword.css";


function ForgotPassword() {
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
          <form className="forgot-form">
            <div className="forgot-form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="forgot-button">
              Send verification code
            </button>
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
