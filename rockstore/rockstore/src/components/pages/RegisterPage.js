// src/components/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para salvar o novo cliente no backend
    alert('Cliente cadastrado com sucesso!');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button-group">
        <button onClick={handleRegister}>Cadastrar</button>
        <button className="link-button" onClick={() => navigate('/login')}>Voltar para Login</button>
      </div>
    </div>
  );
};

export default RegisterPage;