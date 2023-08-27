import React from "react";

const PreloadImages = ({ images }) => {
  return (
    <div style={{ display: "none" }}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Preload ${index}`} />
      ))}
    </div>
  );
};

export default PreloadImages;
