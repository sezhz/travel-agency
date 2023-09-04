import React from "react";
import mapbackground from "../styles/footer-map.jpg";

const Footer = () => {
  const footerUpperStyle = {
    backgroundImage: `url(${mapbackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="footer">
      <div className="footer-upper" style={footerUpperStyle}>
        <div className="footer-top">
          <div className="container">
            <div className="top-cont">
              <div className="top-textbox">
                <div className="top-title">
                  <p>Exotic Skyline</p>
                </div>
                <div className="top-text">
                  <p>туристична агенцiя</p>
                </div>
              </div>
              <div className="top-links">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61550889993463" target="_blank" rel="noreferrer">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/sezhzq" target="_blank" rel="noreferrer">
                      <i class="fa-brands fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/RyZ7YbA8h3" target="_blank" rel="noreferrer">
                      <i class="fa-brands fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sezhz/" target="_blank" rel="noreferrer">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="middle-content">
              <div className="column">
                <div className="col-content">
                  <div className="col-title">
                    <h2>Контакти</h2>
                  </div>
                  <div className="col-text">
                    <p>вулиця Академіка Павлова, 44-Б</p>
                    <p>(067) 111-11-11</p>
                    <p>(057) 223-32-22</p>
                    <p>sezhzqwe@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="col-content">
                  <div className="col-title">
                    <h2>Пошук туру</h2>
                  </div>
                  <div className="col-text">
                    <p>
                      <a href="#popular">Тури</a>
                    </p>
                    <p>
                      <a href="#support">Пiдтримка</a>
                    </p>
                    <p>
                      <a href="#about">Про нас</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="col-content">
                  <div className="col-title">
                    <h2>FAQ</h2>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="col-content">
                  <div className="col-title">
                    <h2>Зв`язатися</h2>
                  </div>
                  <input type="tel" placeholder="ваш телефон" />
                  <button>
                    Передзвонiть менi
                    <i class="fa-solid fa-phone-flip"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <h2>© 2023 Exotic Skyline</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
