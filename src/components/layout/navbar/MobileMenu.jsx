import { Link } from "react-router-dom";

import categories from "../../../constants/categories";

function MobileMenu({ closeMenu }) {
  return (
    <aside className="mobile-menu">
      <div className="container">
        {/* Account Actions */}

        <div className="mobile-menu-actions">
          <Link
            to="/sell"
            className="add-product-button"
            onClick={closeMenu}
          >
            Add Product
          </Link>

          <Link
            to="/login"
            className="mobile-login-button"
            onClick={closeMenu}
          >
            Login & Sign Up
          </Link>
        </div>

        {/* Categories */}

        <div className="mobile-menu-section">
          <p>Categories</p>

          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              onClick={closeMenu}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Help */}

        <div className="mobile-menu-section">
          <p>Help</p>

          <Link to="/help" onClick={closeMenu}>
            Helpdesk FAQ
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default MobileMenu;