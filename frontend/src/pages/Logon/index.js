import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../service/api';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      console.error('Falha no login. Messagem: ', error);
      alert(error);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
        <form onSubmit={handleLogin}>
          <h1>Faça o seu logon</h1>
          <input
            placeholder="Informe seu id"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link class="back-link" to="/register">
            <FiLogIn size="16" color="#e02e41" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
