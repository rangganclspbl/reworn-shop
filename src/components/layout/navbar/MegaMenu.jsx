import { Link } from "react-router-dom";

function MegaMenu({ category }) {
  if (!category) {
    return null;
  }

  return (
    <div className="mega-menu">
      {category.columns.map((column) => (
        <div className="mega-menu-column" key={column.title}>
          <h4>{column.title}</h4>

          {column.items.map((item) => {
            const itemSlug = item.toLowerCase().replace(/\s+/g, "-");

            return (
              <Link
                key={item}
                to={`/category/${category.slug}/${itemSlug}`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default MegaMenu;