import "./Navbar.css";
import { useState } from "react";
import { Search, ShoppingBag, X, Menu } from "lucide-react";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClosing, setIsSearchClosing] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchClosing(true);

    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
      setSearchQuery("");
    }, 250);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>ATHLEX</h1>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
      </div>

      <div className="navbar-actions">
        {isSearchOpen ? (
          <>
            <input
              value={searchQuery}
              onChange={handleSearchChange}
              className={isSearchClosing ? "search-input closing" : "search-input"}
            />
            {searchQuery === "" ? (
              <button className="close-search" onClick={closeSearch}>
                <X size={21} strokeWidth={2.5} />
              </button>
            ) : (
              <Search size={21} strokeWidth={2.5} />
            )}
          </>
        ) : (
          <button className="search-btn" onClick={openSearch}>
            <Search size={21} strokeWidth={2.5} />
          </button>
        )}
        <button className="cart-btn">
          <ShoppingBag size={21} strokeWidth={2.5} />
        </button>
        <button className="ham-btn">
          <Menu size={21} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
