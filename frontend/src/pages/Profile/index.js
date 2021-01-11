import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';
import api from '../../service/api';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile').then((response) => {
      setIncidents(response.data);
    });
  }, [ongId]);
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
        {incidents.map((incident) => (
          <ul key={incident.id}>
            <li>
              <strong>Caso:</strong>
              <p>{incident.title}</p>

              <strong>Descrição</strong>
              <p>{incident.description}</p>

              <strong>Valor</strong>
              <p>{incident.value}</p>
              <button>
                <FiTrash2 size="18" color="#a8a8b3"></FiTrash2>
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
