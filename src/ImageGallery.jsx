import React, { useState } from "react";
import "./ImageGallery.css";

function ImageGallery({ images }) {
  // Initial image is the first one in the array
  const [currentImage, setCurrentImage] = useState(images[0].url);

  // Handle click on a thumbnail
  const handleClick = (image) => {
    setCurrentImage(image.url);
  };

  return (
    <div className="image__container">
      <div>
        <img
          src={currentImage}
          alt="Current"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
      <div className="image__list">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt="Thumbnail"
            onClick={() => handleClick(image)}
            style={{ width: "100px", height: "100px", cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
