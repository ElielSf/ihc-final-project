import "./css/ToTopButton.css";

export default function ToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  return (
    <div className="to_top_button">
      <button>
        <img src="seta-direita.svg" alt="Voltar para o topo" onClick={scrollToTop} />
      </button>
    </div>
  );
}
