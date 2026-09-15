import { Link } from "react-router-dom";

import MegaMenu from "./MegaMenu";
import categories from "../../../constants/categories";

function CategoryNav({
  activeCategory,
  handleCategoryEnter,
  handleCategoryLeave,
}) {
  return (
    <nav className="category-nav">
      <Link to="/category/all">All</Link>

      {categories.map((category) => (
        <div
          className="category-item"
          key={category.slug}
          onMouseEnter={() => handleCategoryEnter(category.slug)}
          onMouseLeave={handleCategoryLeave}
        >
          <Link to={`/category/${category.slug}`}>
            {category.name}
          </Link>

          {activeCategory === category.slug && (
            <MegaMenu category={category} />
          )}
        </div>
      ))}

      <Link to="/sale" className="sale-link">
        Sale
      </Link>
    </nav>
  );
}

export default CategoryNav;