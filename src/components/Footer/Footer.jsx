import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

import "./css/Footer.css"; 

export default function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_wrapper_top">
                <div className="footer_wrapper_top_company">
                    <div className="footer_wrapper_top_company_items">
                        <h4 className="company-title">Empresa</h4>
                        <p className="company-text">Termos e Condições</p>
                        <p className="company-text">Políticas de Privacidade</p>
                        <p className="company-text">Sobre nós</p>
                    </div>                    
                </div>
                <div className="footer_wrapper_logo">
                    <img className="logo-img" src="/gAtlas.svg" alt="LOGO" />
                </div>
                <div className="footer_wrapper_top_about">
                    <div className="footer_wrapper_top_about_items">
                        <h4 className="about-title">Dúvidas</h4>
                        <p className="about-text">Contato-nos</p>
                        <p className="about-text">FAQ</p>
                        <p className="about-text">Suporte ao Cliente</p>
                    </div>
                </div>
            </div>
            <div className="footer_wrapper_linebox">
                <div className="footer_wrapper_linebox_line"></div>
            </div>
            <div className="footer_wrapper_bottom">
                <div className="footer_icons">
                    <FaInstagram className="footer_icons-icon" />
                    <FaTiktok className="footer_icons-icon" />
                    <FaSquareFacebook className="footer_icons-icon" />
                </div>
                <p className="footer_wrapper_bottom_copyright">2024 &copy; Copyright - Todos os direitos reservados</p>
            </div>
        </div>
    )
}