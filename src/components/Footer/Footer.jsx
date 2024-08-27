import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

import "./css/Footer.css"

export default function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_wrapper_content_top">
                <div className="footer_wrapper_content_top_">
                    <h4 className="footer_wrapper_content_top_">Empresa</h4>
                    <p className="footer_wrapper_content_top_">Termos e Condições</p>
                    <p className="footer_wrapper_content_top_">Políticas de Privacidade</p>
                    <p className="footer_wrapper_content_top_">Sobre nós</p>
                </div>
                <div>
                    <img src="" alt="LOGO" />
                </div>
                <div>
                    <h4>Dúvidas</h4>
                    <p>Suporte ao Cliente</p>
                    <p>Contato-nos</p>
                    <p>FAQ</p>
                </div>
            </div>
            <div className="footer_wrapper_line"></div>
            <div className="footer_wrapper_content_bottom">
                <div className="footer_wrapper_content_bottom_icons">
                    <AiFillTikTok />
                    <FaSquareXTwitter />
                </div>
                <p className="footer_wrapper_content_bottom_copyright">2024 &copy; Copyright - Todos os direitos reservados</p>
            </div>
        </div>
    )
}