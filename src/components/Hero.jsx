import React, { useEffect, useState } from "react";
import picture1 from "../img/karpaty.jpg";
import picture2 from "../img/maldives.jpg";
import picture3 from "../img/egypt.jpg";
import picture4 from "../img/ibiza.jpg";
import "../dist/styles.css";
import PreloadImages from "./PreloadImages";

const images = [picture1, picture2, picture3, picture4];
const textData = [
  {
    title: "Карпати",
    subtitle: "гори",
  },
  {
    title: "Мальдiви",
    subtitle: "райськi острова",
  },
  {
    title: "Egypt",
    subtitle: "Iсторичнi пiрамiди",
  },
  {
    title: "Iбiца",
    subtitle: "Острiв вечiрок",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
  const { title, subtitle } = textData[currentImageIndex];
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const nextImage = () => {
    setFadeOut(true);
    setIsTransparent(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      setFadeOut(false);
      setFadeIn(true);

      setTimeout(() => {
        setFadeIn(false);
      }, 5000);

      setTimeout(() => {
        setIsTransparent(false);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: isTransparent
      ? "rgba(40, 58, 94, 0.1)"
      : "rgba(40, 58, 94, 0.5)",
    zIndex: 1,
    transition: "background-color 0.5s ease-in-out",
    animationName: fadeOut ? "fadeOutLeft" : fadeIn ? "fadeInLeft" : "none",
  };

  return (
    <>
      <PreloadImages images={images} />
      <div className="hero" style={backgroundImageStyle}>
        <div className="hero-overlay" style={overlayStyle}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className={`title ${fadeOut ? "fade-out" : ""} ${
                    fadeIn ? "fade-in" : ""
                  }`}
                >
                  <h2>{title}</h2>
                </div>
                <div
                  className={`subtitle ${fadeOut ? "fade-out" : ""} ${
                    fadeIn ? "fade-in" : ""
                  }`}
                >
                  <p>{subtitle}</p>
                </div>
                <div
                  className={`btns ${fadeOut ? "fade-out" : ""} ${
                    fadeIn ? "fade-in" : ""
                  }`}
                >
                  <a href="/home" className="theme-btn">
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
