import React, { useEffect, useState } from "react";
import { images, textData } from "./herodata";
import "../dist/styles.css";
import PreloadImages from "./PreloadImages";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { title, subtitle } = textData[currentImageIndex];

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

  const prevImage = () => {
    setFadeOut(true);
    setIsTransparent(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );

      setFadeOut(false);
      setFadeIn(true);

      setTimeout(() => {
        setFadeIn(false);
      }, 500);

      setTimeout(() => {
        setIsTransparent(false);
      }, 500);
    }, 500);
  };

  const skipImage = () => {
    setFadeOut(true);
    setIsTransparent(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      setFadeOut(false);
      setFadeIn(true);

      setTimeout(() => {
        setFadeIn(false);
      }, 500);

      setTimeout(() => {
        setIsTransparent(false);
      }, 500);
    }, 500);
  };

  return (
    <>
      <PreloadImages images={images} />
      <div
        id="hero"
        className="hero"
        style={backgroundImageStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="hero-overlay" style={overlayStyle}>
          {isHovered && (
            <>
              <div className="arrow-left" onClick={prevImage}>
                <i class="fa-solid fa-arrow-left"></i>
              </div>
              <div className="arrow-right" onClick={skipImage}>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </>
          )}
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
                  <a href="#about" className="theme-btn">
                    Детальніше про нас
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
