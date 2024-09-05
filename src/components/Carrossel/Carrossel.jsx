import { useState, useEffect } from "react";

import "./css/Carrossel.css";

export default function Carrossel() {
  return (
    <div className="carrossel">
      <div className="carrossel_button">
        <button className="left">
          <img src="" alt="voltar" />
        </button>
      </div>

      <div className=""></div>
      <div className="carrossel_button">
        <button className="right">
          <img src="" alt="avançar" />
        </button>
      </div>
    </div>
  );
}
