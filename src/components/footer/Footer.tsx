import React from "react";
import NewsLetter from "../newsLetter/NewsLetter";

// import { Container } from './styles';
import "./footer.css";
const Footer: React.FC = () => {
  return (
    <footer className=" " style={{}}>
      <NewsLetter />
      <div className="d-flex  justify-content-between mt-5">
        <div>
          <p>
            <strong>Informações</strong>
          </p>
          <p>Quem somos</p>
          <p>Prazo de envio</p>
          <p>Troca e devoluções</p>
          <p>Promoções e cupons</p>
        </div>
        <div>
          <p>
            <strong>Minha conta</strong>
          </p>
          <p>Minha conta</p>
          <p>Meus pedidos</p>
          <p>Cadastre-se</p>
        </div>
        <div>
          <p>
            <strong>Onde nos encontrar</strong>
          </p>
          <p>Lojas</p>
          <p>Endereços</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
