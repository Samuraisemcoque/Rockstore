// src/components/pages/Dashboard.js
import React, { useState } from 'react';

const Dashboard = ({ user }) => {
  const [newEmployeeEmail, setNewEmployeeEmail] = useState('');
  const [newEmployeePassword, setNewEmployeePassword] = useState('');

  const handleRegisterEmployee = () => {
    // Aqui você pode adicionar a lógica para salvar o novo funcionário no backend
    alert('Funcionário cadastrado com sucesso!');
  };

  if (!user) {
    return <div>Você precisa estar logado para acessar esta página.</div>;
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      {user.role === 'funcionario' && (
        <div>
          <h2>Atualizar Estoque</h2>
          {/* Formulário para atualizar estoque */}
          <h2>Ver Pedidos</h2>
          {/* Lista de pedidos */}
        </div>
      )}
      {user.role === 'gerente' && (
        <div>
          <h2>Atualizar Estoque</h2>
          {/* Formulário para atualizar estoque */}
          <h2>Ver Vendas</h2>
          {/* Lista de vendas */}
          <h2>Relatórios de Vendas do Mês</h2>
          {/* Relatórios de vendas */}
          <h2>Cadastrar Funcionário</h2>
          <input
            type="email"
            placeholder="Email do Funcionário"
            value={newEmployeeEmail}
            onChange={(e) => setNewEmployeeEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha do Funcionário"
            value={newEmployeePassword}
            onChange={(e) => setNewEmployeePassword(e.target.value)}
          />
          <button onClick={handleRegisterEmployee}>Cadastrar Funcionário</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;