import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="Navbar-logo">
        <h1>ATHLEX</h1>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
      </div>

      <div className="navbar-actions">
        <button className="search-btn">Search</button>
        <button className="cart-btn">Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;