import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./css/Carrossel.css";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['1.svg', '2.svg', '3.svg'];
  const intervalRef = useRef(null); // Usar um ref para o ID do intervalo

  useEffect(() => {
    startInterval(); // Inicia o intervalo quando o componente monta

    return () => clearInterval(intervalRef.current); // Limpa o intervalo ao desmontar
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
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
    clearInterval(intervalRef.current); // Limpa o intervalo atual
    startInterval(); // Inicia um novo intervalo
  };

  return (
    <div className="carrossel">
      <div className="carrossel_button_left">
        <button onClick={handlePrevious}>
          <IoIosArrowBack className="icon_arrow" />
        </button>
      </div>
      <div className="carrossel_images">
        <img src={images[currentIndex]} alt="Banner" />
      </div>
      <div className="carrossel_button_right">
        <button onClick={handleNext}>
          <IoIosArrowForward className="icon_arrow" />
        </button>
      </div>
    </div>
  );
}
