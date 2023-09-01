import React from "react";

const NewsItem = ({ date, title, imageSrc }) => {
  return (
    <div className="news-item">
      <div className="news-img">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="news-text">
        <h4>{date}</h4>
        <h3>{title}</h3>
        <a href="/">Детальніше</a>
      </div>
    </div>
  );
};

export default NewsItem;