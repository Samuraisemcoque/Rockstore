// src/components/pages/RegisterEmployeePage.js
import React, { useState } from 'react';

const RegisterEmployeePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para salvar o novo funcionário no backend
    alert('Funcionário cadastrado com sucesso!');
  };

  return (
    <div className="page-container">
      <h1>Cadastrar Funcionário</h1>
      <input
        type="email"
        placeholder="Email do Funcionário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha do Funcionário"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar Funcionário</button>
    </div>
  );
};

export default RegisterEmployeePage;