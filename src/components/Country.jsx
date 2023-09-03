import React from "react";
import { useParams } from "react-router-dom";
import countriesData from "./countries";

const Country = () => {
  const { id } = useParams();

  const countryInfo = countriesData.find((country) => country.id === id);

  if (!countryInfo) {
    return <div>Країна не знайдена.</div>;
  }

  const descriptionParagraphs = countryInfo.description
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <div className="country">
      <div className="container">
        <div className="country-content">
          <h2>{countryInfo.name}</h2>
          <div className="country-photos__container">
            {countryInfo.photos.map((photo, index) => (
              <div className="country-item__cont">
                <img
                  key={index}
                  src={photo}
                  alt={`${countryInfo.name}pic`}
                  className="country-photo__item"
                />
              </div>
            ))}
          </div>
          {descriptionParagraphs}
        </div>
      </div>
    </div>
  );
};

export default Country;
