import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../dist/styles.css";

const TourSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [departureCountry, setDepartureCountry] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("1");

  return (
    <div className="tour-select">
      <div className="container">
        <div className="tour-select-wrap">
          <div className="tour-select-content">
            <div className="tour-title">
              <p>Пошук туру</p>
            </div>
            <div className="select-container">
              <select
                className="select-box"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option disabled value="">
                  Оберіть країну
                </option>
                <option value="Балі" className="custom-option">
                  Балі
                </option>
                <option value="Египет" className="custom-option">
                  Єгипет
                </option>
                <option value="Ібіцу" className="custom-option">
                  Ібіца
                </option>
                <option value="Карпати" className="custom-option">
                  Карпати
                </option>
                <option value="Мальдіви" className="custom-option">
                  Мальдіви
                </option>
                <option value="Париж" className="custom-option">
                  Париж
                </option>
                <option value="Турція" className="custom-option">
                  Турція
                </option>
                <option value="Греція" className="custom-option">
                  Греція
                </option>
                <option value="Iндонезiя" className="custom-option">
                  Iндонезiя
                </option>
                <option value="Японiя" className="custom-option">
                  Японiя
                </option>
                <option value="Україна" className="custom-option">
                  Україна
                </option>
              </select>

              <select
                className="select-box"
                value={departureCountry}
                onChange={(e) => setDepartureCountry(e.target.value)}
              >
                <option value="з Варшави" className="custom-option">
                  з Варшави
                </option>
                <option value="з Києва" className="custom-option">
                  з Києва
                </option>
                <option value="з Катовіце" className="custom-option">
                  з Катовіце
                </option>
                <option value="зi Львова" className="custom-option">
                  зi Львова
                </option>
                <option value="з Берліну" className="custom-option">
                  з Берліну
                </option>
              </select>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="custom-datepicker"
                placeholderText="Початок туру"
              />

              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="custom-datepicker"
                placeholderText="Кiнець туру"
              />

              <select
                className="select-box"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1 === 1
                      ? "1 людина"
                      : i + 1 >= 2 && i + 1 <= 4
                      ? `${i + 1} людини`
                      : `${i + 1} людин`}
                  </option>
                ))}
              </select>

              <button className="button-box">Знайти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSelect;
