import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ date, title, imageSrc, linkTo }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="news-item">
      <div className="news-img">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="news-text">
        <h4>{date}</h4>
        <h3>{title}</h3>
        <Link to={linkTo} onClick={scrollToTop}>
          Детальніше
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
