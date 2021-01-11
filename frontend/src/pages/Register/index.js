import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import api from '../../service/api';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      city,
      uf,
      whatsapp,
    };

    const response = await api.post('ongs', data);
    alert(`Cadastro realizado. Seu id de acesso: ${response.data.id}`);
    history.push('/');
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <Link to="/">
            <img src={logoImg} alt="Be the Hero" />
          </Link>

          <h1>Cadastrar</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarm
            os casos da sua ONG.
          </p>
          <Link class="back-link" to="/">
            <FiArrowLeft size="16" color="#e02e41" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          ></input>
          <input
            placeholder="Whatsapp"
            onChange={(e) => setWhatsapp(e.target.value)}
            value={whatsapp}
          ></input>
          <div className="groupCity">
            <input
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            ></input>
            <input
              placeholder="UF"
              onChange={(e) => setUf(e.target.value)}
              width="80"
              value={uf}
            ></input>
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
