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
                    Туристична агенція "Make Travel" надає повний спектр
                    туристичних послуг.
                  </span>
                  <span>
                    Ми уклали договори з найбільшими туроператорами України та
                    Європи для того, щоб Ваш відпочинок був максимально
                    комфортним!
                  </span>
                  <span>Величезний вибір напрямків та готелів.</span>
                  <span>
                    Тисячі пропозицій від Туреччини до Занзібару разом з
                    турагенцією "Мейк Тревел"!{" "}
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
