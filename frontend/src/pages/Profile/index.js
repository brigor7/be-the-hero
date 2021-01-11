import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';

export default function Profile() {
  const ongName = localStorage.getItem('ongName');
  return (
    <div className="profile-container">
      <header>
        <Link to="/">
          <img src={logoImg} alt="Be The Hero" />
        </Link>

        <span>Bem vindo(a) {ongName}</span>
        <Link className="button" to="/incident/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={24} color="#e02e41" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <div className="casos-container">
        <ul>
          <li>
            <strong>Caso:</strong>
            <p>Cadela atropelada</p>
            <strong>Descrição</strong>
            <p>
              A cadelinha mai foi atropelada no bairro Parque 10 e teve que
              passar por uma cirurgia
            </p>
            <strong>Valor</strong>
            <p>R$ 1200.00</p>
            <button>
              <FiTrash2 size="18" color="#a8a8b3"></FiTrash2>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Caso</strong>
            <p>Cadela atropelada</p>
            <strong>Descrição</strong>
            <p>
              A cadelinha mai foi atropelada no bairro Parque 10 e teve que
              passar por uma cirurgia
            </p>
            <strong>Valor</strong>
            <p>R$ 1200.00</p>
            <button>
              <FiTrash2 size="18" color="#a8a8b3"></FiTrash2>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Caso</strong>
            <p>Cadela atropelada</p>
            <strong>Descrição</strong>
            <p>
              A cadelinha mai foi atropelada no bairro Parque 10 e teve que
              passar por uma cirurgia
            </p>
            <strong>Valor</strong>
            <p>R$ 1200.00</p>
            <button>
              <FiTrash2 size="18" color="#a8a8b3"></FiTrash2>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Caso</strong>
            <p>Cadela atropelada</p>
            <strong>Descrição</strong>
            <p>
              A cadelinha mai foi atropelada no bairro Parque 10 e teve que
              passar por uma cirurgia
            </p>
            <strong>Valor</strong>
            <p>R$ 1200.00</p>
            <button>
              <FiTrash2 size="18" color="#a8a8b3"></FiTrash2>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
