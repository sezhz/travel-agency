import React from "react";
import reviewsData from "./reviewsData";

const Reviews = () => {
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
          <div class="carousel-track">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
