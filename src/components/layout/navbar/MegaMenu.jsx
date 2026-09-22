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
            const itemSlug = item
              .toLowerCase()
              .replace(/\s+/g, "-");

            const itemPath =
              category.slug === "branded"
                ? `/category/${category.slug}?brand=${encodeURIComponent(item)}`
                : `/category/${category.slug}/${itemSlug}`;

            return (
              <Link key={item} to={itemPath}>
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
