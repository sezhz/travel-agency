import React, { useEffect, useState } from "react";
import countriesData from "./countries";

const Popular = () => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gridContainer = document.querySelector(".grid-container");

      if (gridContainer) {
        const rect = gridContainer.getBoundingClientRect();
        setIsInViewport(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="popular" className="popular">
      <div className="popular-section">
        <div className="container">
          <div className="popular-title">
            <span>Рекомендуємо</span>
            <h2>Популярні країни</h2>
          </div>
          <div className="gallery">
            <div className="grid-container">
              <div className="popular-countries">
                <div className="countries-img">
                  <ul>
                    {countriesData.map((country, index) => (
                      <li
                        className={`popular-countries-item ${
                          isInViewport ? "in-viewport" : ""
                        }`}
                        key={index}
                      >
                        <a href="/">
                          <img
                            className="country-flag"
                            src={country.flag}
                            alt={`${country.name} flag`}
                          />
                          <img src={country.image} alt={country.name} />
                          <div className="country-name">{country.name}</div>
                          <div className="country-price">{country.price} ₴</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
