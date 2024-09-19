import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./css/Carrossel.css";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['./1.svg', './2.svg', './3.svg'];
  const [intervalId, setIntervalId] = useState(null); // Armazenar o ID do intervalo

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalId);
  }, [images.length]);

  const startInterval = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    setIntervalId(id);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalId); // Limpa o intervalo atual
    startInterval(); // Inicia um novo intervalo
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
