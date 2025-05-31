import './DaySelection.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Logo from '../image/upscalemedia-transformed.png'

function DaySelection() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="pagina-inicial">

        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>

        <div className='escrever'>
          <div className='email'>
            <label htmlFor="login" className="texto-email">
              E-mail
            </label>
            <input type="text" />
          </div>

          <div className="senha">
            <label htmlFor="password" className="texto-senha">
              Senha
            </label>
            <input type="text" />
          </div>
        </div>

        <div>
          <button onClick={() => navigate("/")} className="botão" type="button">
            Entrar
          </button>
        </div>

      </div>
    </section>
  );
};

export default DaySelection;
