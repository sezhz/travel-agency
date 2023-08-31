import React from "react";
import worldmap from "../img/wordmap.png";
import LazyVideo from "./LazyVideo";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="img-container">
            <img src={worldmap} alt="world-map" />
          </div>
          <div className="info-container">
            <div className="about-text-side">
              <div className="about-title">
                <h2>Exotic Skyline</h2>
              </div>
              <div className="about-text">
                <div>
                  <span>
                    Туристична агенцiя "Exotic Skyline" пропонує різноманітні
                    тури по всьому світу, включаючи індивідуальні та групові
                    подорожі.
                  </span>
                  <span>
                    Однією з їх основних переваг є створення індивідуальних
                    маршрутів, які враховують інтереси кожного клієнта.
                  </span>
                  <span>
                    Наше агенство надає найвищий пріоритет комфорту та безпеці
                    своїх клієнтів під час подорожей, співпрацюючи лише з
                    перевіреними партнерами та готелями.
                  </span>
                  <span>
                    Не важливо, чи шукаєте ви романтичну подорож, культурний
                    досвід чи бізнес-тури - "Exotic Skyline" зробить вашу
                    подорож незабутньою та безтурботною.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LazyVideo src="https://www.youtube.com/embed/HtLuNQfAY2s?autoplay=1&mute=1" />
      </div>
    </div>
  );
};

export default About;
