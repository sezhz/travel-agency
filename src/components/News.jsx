import React from "react";
import NewsItem from "./NewsItem";
import summerSeason from "../img/maldives-house.jpg";
import winterSeason from "../img/winter-japan.jpg";
import thankyou from "../img/spring.png";

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news-header">
          <div className="news-title">
            <span>Актуальнi</span>
            <h2>Новини та статтi</h2>
          </div>
          <div className="news-content">
            <div className="news-container">
              <NewsItem
                date="28.05.2023"
                title="ТУРИСТИЧНИЙ СЕЗОН ЛІТО!"
                imageSrc={summerSeason}
              />
              <NewsItem
                date="05.03.2023"
                title="ДЯКУЄМО, ЩО ВИ З НАМИ!"
                imageSrc={thankyou}
              />
              <NewsItem
                date="06.31.2022"
                title="ТУРИСТИЧНИЙ СЕЗОН ЗИМА 2023"
                imageSrc={winterSeason}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
