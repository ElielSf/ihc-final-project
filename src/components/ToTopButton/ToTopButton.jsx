import "./css/ToTopButton.css";
import { useParams } from "react-router-dom";

export default function ToTopButton() {
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  return (
    <div className={id ? ("to_top_button-white") : ("to_top_button")}>
      <button>
        <img src="up-button.svg" alt="Voltar para o topo" onClick={scrollToTop} />
      </button>
    </div>
  );
}
