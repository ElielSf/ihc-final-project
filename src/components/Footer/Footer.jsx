import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

import "./css/Footer.css"

export default function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_wrapper_content_top">
                <div className="footer_wrapper_content_top_about">
                    <h4 className="footer_wrapper_content_top_about_title">Empresa</h4>
                    <p className="footer_wrapper_content_top_about_text">Termos e Condições</p>
                    <p className="footer_wrapper_content_top_about_text">Políticas de Privacidade</p>
                    <p className="footer_wrapper_content_top_about_text">Sobre nós</p>
                </div>
                <div className="footer_wrapper_content_top_logo">
                    <img className="footer_wrapper_content_top_logo_img" src="" alt="LOGO" />
                </div>
                <div className="footer_wrapper_content_top_about">
                    <h4 className="footer_wrapper_content_top_about_title">Dúvidas</h4>
                    <p className="footer_wrapper_content_top_about_text">Suporte ao Cliente</p>
                    <p className="footer_wrapper_content_top_about_text">Contato-nos</p>
                    <p className="footer_wrapper_content_top_about_text">FAQ</p>
                </div>
            </div>
            <div className="footer_wrapper_linebox">
                <div className="footer_wrapper_linebox_line"></div>
            </div>
            <div className="footer_wrapper_content_bottom">
                <div className="footer_wrapper_content_bottom_icons">
                    <FaXTwitter className="footer_wrapper_content_bottom_icons_icon" />
                    <FaTiktok className="footer_wrapper_content_bottom_icons_icon" />
                </div>
                <p className="footer_wrapper_content_bottom_copyright">2024 &copy; Copyright - Todos os direitos reservados</p>
            </div>
        </div>
    )
}