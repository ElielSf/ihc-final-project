import { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import "./css/Carrossel.css";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images] = useState([
    '1.jpg',
    '2.jpg',
    '3.jpg',
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrossel">
      <div className="carrossel_button">
        <button className="left" onClick={handlePrevious}>
          <IoIosArrowDropleftCircle className="icon" />
        </button>
      </div>
      <div className="carrossel_images">
        <img src={images[currentIndex]} alt=""  />
      </div>
      <div className="carrossel_button">
        <button className="right" onClick={handleNext}>
          <IoIosArrowDroprightCircle className="icon" />
        </button>
      </div>
    </div>
  );
}
