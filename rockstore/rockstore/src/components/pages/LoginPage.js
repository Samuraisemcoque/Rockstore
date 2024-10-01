// src/components/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'funcionario01@email.com' && password === '12345') {
      setUser({ role: 'funcionario' });
      navigate('/dashboard');
    } else if (email === 'gerente01@email.com' && password === '12345') {
      setUser({ role: 'gerente' });
      navigate('/dashboard');
    } else if (email === 'cliente01@email.com' && password === '12345') {
      setUser({ role: 'cliente' });
      navigate('/account');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
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
        <button onClick={handleLogin}>Login</button>
        <button className="link-button" onClick={() => navigate('/register')}>Cadastrar</button>
      </div>
    </div>
  );
};

export default LoginPage;