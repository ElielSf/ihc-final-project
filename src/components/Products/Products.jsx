import { useState } from "react";
import Product from "./Products.card.jsx"
import "./css/Products.css";

export default function Products() {
    const productList = [
        {
            image: "card-1.svg",
            alt: "Cadeira Thunder",
            title: "Cadeira Gamer THUNDER X3",
        },
        {
            image: "card-2.svg",
            alt: "Monitor Samsung",
            title: "Monitor Samsung Odyssey CRG9 49\" Polegadas 120Hz",
        },
        {
            image: "card-3.svg",
            alt: "Placa de Vídeo GIGABYTE",
            title: "Placa de Vídeo GIGABYTE NVIDIA GeForce RTX 2080 Super Gaming OC, 8GB, GDDR6",
        },
        {
            image: "card-4.svg",
            alt: "Mouse Delux",
            title: "Delux-M800PRO PAW3370 19000 DPI",
        },
        {
            image: "card-5.svg",
            alt: "Headset Gamer",
            title: "Headset Gamer Logitech G935",
        },
        {
            image: "card-6.svg",
            alt: "PLAYSTATION 5",
            title: "PLAYSTATION 5 825GB SONY + 1 Controle",
        }
    ]
    return (
        <div className="products">
            <div className="title_section">
                <h2>NOSSOS PRODUTOS</h2>
            </div>
            <div className="products_section">
                {productList.map((product, index) => (
                    <Product
                        key={index}
                        image={product.image}
                        alt={product.alt}
                        title={product.title}
                    />
                ))}
            </div>
        </div>
    )
}