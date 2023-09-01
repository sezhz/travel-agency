import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from "./reviewsData";

const Reviews = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1400,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-header">
          <div className="reviews-title">
            <span>Наші клієнти</span>
            <h2>Вiдгуки про компанiю та подорожi</h2>
          </div>
        </div>
        <div class="carousel-container">
          <Slider {...settings}>
            {reviewsData.map((review, index) => (
              <div className="carousel-item" key={index}>
                <div className="rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <div className="message">
                  <p>{review.message}</p>
                </div>
                <div className="client-info">
                  <h5>{review.name}</h5>
                  <p>{review.location}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
