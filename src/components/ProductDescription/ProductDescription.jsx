import "./css/ProductDescription.css";
import { useParams } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function ProductDescription() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const productList = [
    {
      id: 1,
      image: "/card-1.svg",
      alt: "Cadeira Thunder",
      title: "Cadeira Gamer THUNDER X3",
    },
    {
      id: 2,
      image: "/card-2.svg",
      alt: "Monitor Samsung",
      title: 'Monitor Samsung Odyssey CRG9 49" Polegadas 120Hz',
    },
    {
      id: 3,
      image: "/card-3.svg",
      alt: "Placa de Vídeo GIGABYTE",
      title:
        "Placa de Vídeo GIGABYTE NVIDIA GeForce RTX 2080 Super Gaming OC, 8GB, GDDR6",
    },
    {
      id: 4,
      image: "/card-4.svg",
      alt: "Mouse Delux",
      title: "Delux-M800PRO PAW3370 19000 DPI",
    },
    {
      id: 5,
      image: "/card-5.svg",
      alt: "Headset Gamer",
      title: "Headset Gamer Logitech G935",
    },
    {
      id: 6,
      image: "/card-6.svg",
      alt: "PLAYSTATION 5",
      title: "PLAYSTATION 5 825GB SONY + 1 Controle",
    },
  ];
  const product = productList.find((p) => p.id === productId);

  return (
    <div className="product_description">
      <div className="title_content">
        <h1>{product.title}</h1>
      </div>
      <div className="image_content">
        <img src={product.image} alt={product.alt} />
      </div>
      <div className="buy_content">
        <div className="wrapper">
          <p>R$ 1.300,00</p>
          <button>Comprar</button>
          <button>
            <MdOutlineLocalGroceryStore className="icon" />
          </button>
        </div>
      </div>
      <div className="description_content">
        <div className="section">
          <p>DESCRIÇÃO</p>
          {/* seta pra cima */}
        </div>
        <div>
          <p>desc</p>
        </div>
      </div>
    </div>
  );
}
