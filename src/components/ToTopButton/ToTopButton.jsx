import "./css/ToTopButton.css";
import { useParams } from "react-router-dom";

export default function ToTopButton() {
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <button className="totopbutton">
        <img src="/up-button.svg" alt="Voltar para o topo" onClick={scrollToTop} />
      </button>
  );
}
