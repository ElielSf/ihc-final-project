import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";

import "./css/Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <img src="/gAtlas-header.svg" alt="LOGO" />
            </div>
            <div className="header_searchbar">
                <div>
                    <input className="search_bar_input" type="text" min="3" title="Barra de pesquisa" />
                    <PiMagnifyingGlassBold className="icon" />
                </div>
            </div>
            <div className="header_element-menu">
                <RxHamburgerMenu className="icon" />
            </div>
            <div className="header_element-wish">
                <FaRegHeart className="icon" />
                <p className="header_element_title">LISTA DE DESEJOS</p>
            </div>
            <div className="header_element-profile">
                <CgProfile className="icon" />
                <p className="header_element_title">PERFIL</p>
            </div>
            <div className="header_element-car">
                <MdOutlineLocalGroceryStore className="icon" />
                <p className="header_element_title">CARRINHO</p>
            </div>
        </div>
    )
}