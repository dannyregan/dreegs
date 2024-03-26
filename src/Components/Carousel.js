// import React, { useState } from "react";
// import styles from "./Carousel.module.css"; // Import your CSS file for styling

// const Carousel = ({ pics }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === pics.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? pics.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className={styles.carousel}>
//       <button onClick={prevImage}>Previous</button>
//       <img src={pics[currentImageIndex]} alt="Carousel" />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import styles from "./Carousel.module.css"; // Import your CSS file for styling

// const Carousel = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(intervalId); // Clear interval on component unmount
//   }, [images]); // Run effect whenever images change

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className={styles.carousel}>
//       <button onClick={prevImage}>Previous</button>
//       <img src={images[currentImageIndex]} alt="Carousel" />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css"; // Import your CSS file for styling

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images]); // Run effect whenever images change

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
          className={index === currentImageIndex ? "" : styles.hidden} // Apply 'hidden' class to non-current images
        />
      ))}
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;


