import React, { useState } from "react";
import Modal from "./Modal";

const Support = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="support">
      <div className="container">
        <div className="support-content">
          <h2 className="support-text">Отримати консультацiю</h2>
          <button className="support-button" onClick={openModal}>
            Задати Питання
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Support;
