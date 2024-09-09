import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./css/Carrossel.css";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images] = useState(['1.jpg', '2.jpg', '3.jpg']);

  // Use ref to store the interval ID
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the interval
    startInterval();

    return () => {
      // Cleanup interval on component unmount
      clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval(); // Reset the interval on click
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetInterval(); // Reset the interval on click
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current); // Clear the existing interval
    startInterval(); // Start a new interval
  };

  return (
    <div className="carrossel">
      <div className="carrossel_button">
        <button className="left" onClick={handlePrevious}>
          <IoIosArrowBack className="icon" />
        </button>
      </div>
      <div className="carrossel_images">
        <img src={images[currentIndex]} alt="Banner" />
      </div>
      <div className="carrossel_button">
        <button className="right" onClick={handleNext}>
          <IoIosArrowForward className="icon" />
        </button>
      </div>
    </div>
  );
}
