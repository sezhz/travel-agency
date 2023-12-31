import React, { useState } from "react";
import logo from "../img/logo.png";
import Modal from "./Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const togglePhones = () => {
    setIsPhoneVisible(!isPhoneVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <div className="container">
        <div className="map-container">
          <a href="/">
            <img src={logo} alt="map" />
          </a>
          <div className="navigation">
            <a href="#popular">Тури</a>
            <a href="#support">Пiдтримка</a>
            <a href="#about">Про нас</a>
          </div>
          <div className="icons">
            <i class="fa-solid fa-envelope" onClick={openModal}></i>
            <i class="fa-solid fa-phone" onClick={togglePhones}></i>
          </div>
        </div>
        <div className={`phones-container ${isPhoneVisible ? "visible" : ""}`}>
          <div className="phones-title">
            <h2>Телефони</h2>
          </div>
          <div className="phones-content">
            <h2>+38(097)666-22-45</h2>
            <h2>+38(050)031-95-89</h2>
          </div>
        </div>
        <div className="scroll-to-top-button" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Header;
