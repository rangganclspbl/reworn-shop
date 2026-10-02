import { Link } from "react-router-dom";

import "./Breadcrumb.css";

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;

        return (
          <span key={item.label} className="breadcrumb-item">
            {isLastItem ? (
              <span className="breadcrumb-current">
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  to={item.path}
                  className="breadcrumb-link"
                >
                  {item.label}
                </Link>

                <span className="breadcrumb-separator">
                  /
                </span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;