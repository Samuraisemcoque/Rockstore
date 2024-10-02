import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe Nosso Aplicativo</p>
          <p>Baixe Nosso Aplicativo Para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store Download" />
            <img src="/images/play-store.png" alt="Play Store Download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="Logo">
            ROCK <span>STORE</span>
          </h1>
          <p>Inovação ao Seu Alcance</p>
        </div>

        <div className="links">
          <h3>Links Úteis</h3>
          <ul>
            <li><Link to="/sac">SAC</Link></li>
            <li><Link to="/contact">Fale Conosco</Link></li>
            <li><Link to="/terms">Termos de Aceite</Link></li>
            <li><Link to="/privacy-policy">Políticas de Privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />
        <p className="copyright">
          Copyright 2030-Companhia Joathan-Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
