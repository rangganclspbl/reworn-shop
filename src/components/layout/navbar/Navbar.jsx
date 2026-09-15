import "./Navbar.css";
import { ShoppingBag, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import useNavbar from "./hooks/useNavbar";
import SearchBar from "./SearchBar";
import CategoryNav from "./CategoryNav";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const {
    searchQuery,
    activeCategory,
    isMenuOpen,
    handleSearchChange,
    handleCategoryEnter,
    handleCategoryLeave,
    toggleMenu,
    closeMenu,
  } = useNavbar();

  return (
    <header className="navbar">
      <div className="container">
        {/* Top Navbar */}

        <div className="navbar-top">
          <Link to="/" className="navbar-logo">
            REWORN SHOP
          </Link>

          {/* Desktop Search */}

          <SearchBar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />

          {/* Desktop Actions */}

          <div className="navbar-actions">
            <Link to="/cart" className="cart-link">
              <ShoppingBag size={21} strokeWidth={2} />
              <span>Cart</span>
            </Link>

            <Link to="/login" className="login-link">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className="menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Search */}

        {!isMenuOpen && (
          <SearchBar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            mobile
          />
        )}

        {/* Desktop Category Navigation */}

        <CategoryNav
          activeCategory={activeCategory}
          handleCategoryEnter={handleCategoryEnter}
          handleCategoryLeave={handleCategoryLeave}
        />

        {/* Mobile Category Navigation */}

        {!isMenuOpen && (
          <nav className="mobile-category-nav">
            <Link to="/category/all" className="active">
              All
            </Link>

            <Link to="/category/women">
              Women
            </Link>

            <Link to="/category/men">
              Men
            </Link>

            <Link to="/category/kids">
              Kids
            </Link>

            <Link to="/category/entertainment">
              Entertainment
            </Link>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
}

export default Navbar;