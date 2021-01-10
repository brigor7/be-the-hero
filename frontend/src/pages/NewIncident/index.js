import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <Link to="/">
            <img src={logoImg} alt="Be the Hero" />
          </Link>

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>

          <Link class="back-link" to="/profile">
            <FiArrowLeft size="16" color="#e02e41" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Título do caso"></input>
          <textarea placeholder="Descreva o caso"></textarea>
          <input placeholder="Valor do caso"></input>

          <button class="button" onSubmit="/incident/new">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
