import "./AuthLayout.css";
import "./AuthForm.css";

function AuthLayout({ back, children }) {
  return (
    <main className="auth-page">
      <section className="auth-container">
        {back}
        <div className="auth-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        {children}
      </section>
    </main>
  );
}

export default AuthLayout;
