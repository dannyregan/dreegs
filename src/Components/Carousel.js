import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css"; 

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [images]); 

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevImage}>Previous</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Carousel"
          className={index === currentImageIndex ? "" : styles.hidden} 
        />
      ))}
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;