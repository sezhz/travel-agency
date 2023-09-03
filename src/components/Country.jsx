import React, { useState } from "react";
import { useParams } from "react-router-dom";
import countriesData from "./countries";

const Country = () => {
  const [selectedValue, setSelectedValue] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    tourDate: "",
    message: "",
  });
  const [notify, setNotify] = useState(false);

  const { id } = useParams();

  const countryInfo = countriesData.find((country) => country.id === id);

  if (!countryInfo) {
    return <div>Країна не знайдена.</div>;
  }

  const descriptionParagraphs = countryInfo.description
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  const handleRangeChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.tourDate) {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        tourDate: "",
        message: "",
      });
      setSelectedValue(1);
      setNotify(true);
    } else {
      alert("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        <div className="order">
          <div className="order-header">
            <div className="order-title">
              <h2>Увага!</h2>
            </div>
            <div className="order-text">
              <p>
                Наша компанія відрізняється від інших тим, що ми маємо
                незвичайний спосіб вибору путівок.
              </p>
              <p>
                Клієнт дізнається, в яке саме місце потрапить, тільки прибувши
                до аеропорту в обраній ним країні. Це чудово підійде тим, хто
                любить певну позитивну невідомість :) <br />
                Так, може здатися, що це величезний ризик. Але ми даємо
                гарантію, що ви будете в захваті від вашої відпустки, ніколи її
                не забудете і нізащо не пошкодуєте!
              </p>
              <p>
                Будь-який з готелів, з якими ми маємо справу, є відмінним і має
                високий рейтинг. А також, входить до 10 найкращих по всій
                країні.
              </p>
              <p>
                У нас максимально ретельний та якісний підхід до кожного
                клієнта, тому, будь ласка, заповніть форми, наведені нижче, щоб
                ми змогли підібрати для вас ідеальний варіант відпочинку:
              </p>
            </div>
          </div>
          <div className="input-container">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="ваше iм`я"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                placeholder="номер мобiльного"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                placeholder="дата початку туру"
                name="tourDate"
                value={formData.tourDate}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="peopleCount">
                кiлькiсть людей: {selectedValue}
              </label>
              <input
                type="range"
                id="peopleCount"
                name="peopleCount"
                min="1"
                max="4"
                value={selectedValue}
                onChange={handleRangeChange}
                required
              />
              <textarea
                rows="5"
                placeholder="вашi хоббi, побажання, що завгодно, що дасть нам змогу пiдiбрати для вас найкращий вiдпочинок"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Надiслати запит</button>
            </form>
          </div>
          {notify && (
            <div
              onAnimationEnd={() => setNotify(false)}
              className="notify"
            >
              <p>
                Дякуємо за оформлення! Ми зв'яжемося з вами найближчим часом!🌎
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Country;
