import React, { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClose = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    onClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        const supportBlock = document.querySelector(".support");
        const supportRect = supportBlock.getBoundingClientRect();

        if (supportRect.bottom < 0 || supportRect.top > window.innerHeight) {
          onClose();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-close">
            <i className="fas fa-times" onClick={onClose} />
          </div>
          <h2 className="modal-title">Задати питання</h2>
        </div>
        <div className="modal-body">
          <div className="contact-form">
            <div className="form-container">
              <input
                type="text"
                className="support-form"
                placeholder="Iм`я"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-container">
              <input
                type="email"
                className="support-form"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-container">
              <input
                type="tel"
                className="support-form"
                placeholder="Телефон"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-container">
              <textarea
                rows="5"
                className="support-form"
                placeholder="Повiдомлення"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div className="submit-button">
              <button onClick={handleSubmit}>Вiдправити</button>
            </div>
          </div>
          <div className="social-medias">
            <a href="/">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
