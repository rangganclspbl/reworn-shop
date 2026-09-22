import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductService from "../../../products/services/ProductServices";
import heroFashion from "../../../../assets/images/hero/hero-fashion.png";

import "./HeroCarousel.css";

function HeroCarousel() {
  const [products] = useState(() => {
    const data = ProductService.getProducts();

    return data.slice(0, 5);
  });

  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % products.length;
      });
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [products.length]);

  return (
    <section className="hero-carousel">
      {/* Background hero */}
      <div className="hero-carousel-background">
        <img
          src={heroFashion}
          alt=""
        />
      </div>

      {/* Gradient overlay */}
      <div className="hero-carousel-gradient" />

      <div className="container">
        <div className="hero-carousel-content">
          {/* Hero copy */}
          <div className="hero-carousel-copy">
            <p className="hero-carousel-label">
              REWORN SHOP
            </p>

            <h1>
              Second-hand pieces worth wearing again.
            </h1>

            <p>
              Discover pre-owned clothing from different brands,
              styles, and eras.
            </p>

            <div className="hero-carousel-actions">
              <Link to="/products">
                Shop now
              </Link>

              <Link to="/sell">
                Sell your first item
              </Link>
            </div>
          </div>

          {/* Product carousel */}
          <div className="hero-carousel-visual">
            {products.map((product, index) => {
              const position =
                (index - activeIndex + products.length) %
                products.length;

              return (
                <div
                  className={`hero-carousel-card hero-carousel-card--position-${position}`}
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;