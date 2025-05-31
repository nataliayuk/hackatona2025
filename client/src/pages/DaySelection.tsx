import './DaySelection.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Logo from '../image/Feed_Bingo-removebg-preview.svg';

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
            <label htmlFor="login" className="titulo-email">
              E-mail
            </label>
            <input type="text" />
          </div>

          <div className="senha">
            <label htmlFor="password" className="titulo-senha">
              Senha
            </label>
            <input type="text" />
          </div>
        </div>
        <div className='botao'>
          <button onClick={() => navigate("/")} className="nome-do-botao" type="button">
            Entrar
          </button>
        </div>

      </div>
    </section>
  );
};

export default DaySelection;
