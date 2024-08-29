import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuHeart } from "react-icons/lu";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import "./css/Header.css"

export default function Header() {
    return (
        <div className="header_wrapper">
            <div className="header_logo_wrapper">
                <img className="header_logo" src="" alt="LOGO" />
            </div>
            <div className="search_bar_wrapper">
                <input className="search_bar_input" type="text" min="3" title="Barra de pesquisa" placeholder="Faça sua pesquisa" />
                <PiMagnifyingGlassBold className="search_bar_icon" />
            </div>
            <div className="header_element">
                <LuHeart className="header_element_icon" />
                <p className="header_element_title">LISTA DE DESEJOS</p>
            </div>
            <div className="header_element">
                <CgProfile className="header_element_icon" />
                <p className="header_element_title">PERFIL</p>
            </div>
            <div className="header_element_car">
                <MdOutlineLocalGroceryStore className="header_element_icon" />
                <p className="header_element_car_title">CARRINHO</p>
            </div>
        </div>
    )
}