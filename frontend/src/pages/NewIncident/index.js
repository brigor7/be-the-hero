import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './style.css';

import api from '../../service/api';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  console.log('ongId front = ' + ongId);

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = { title, description, value };

    try {
      const response = await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile');
    } catch (error) {
      console.log(error);
    }
  }

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
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <textarea
            placeholder="Descreva o caso"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <input
            placeholder="Valor do caso"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>

          <button class="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
