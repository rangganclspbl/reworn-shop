import "./Signup.css";

function Signup() {
  return (
    <main className="signup-page">
      <section className="signup-container">
        {/* Back to Home */}
        <a href="/" className="signup-back">
          ← Back
        </a>

        {/* Logo */}
        <div className="signup-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        {/* Heading */}
        <div className="signup-heading">
          <h2>Create an account</h2>
          <p>Join REWORN SHOP and start shopping.</p>
        </div>

        {/* Signup Form */}
        <form className="signup-form">
          {/* Full Name */}
          <div className="signup-form-group">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>

          {/* Email */}
          <div className="signup-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          {/* Password */}
          <div className="signup-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="signup-form-group">
            <label htmlFor="confirm-password">Confirm password</label>
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

        {/* Divider */}
        <div className="signup-divider">
          <span>OR</span>
        </div>

        {/* Social Login */}
        <div className="signup-social">
          <button type="button">Continue with Google</button>

          <button type="button">Continue with Facebook</button>
        </div>

        {/* Login */}
        <p className="signup-login">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </section>
    </main>
  );
}

export default Signup;
