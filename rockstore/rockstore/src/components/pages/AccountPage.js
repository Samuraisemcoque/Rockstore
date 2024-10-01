// src/components/pages/AccountPage.js
import React from 'react';

const AccountPage = ({ user }) => {
  if (!user || user.role !== 'cliente') {
    return <div>Você precisa estar logado como cliente para acessar esta página.</div>;
  }

  return (
    <div className="account-container">
      <h1>Minha Conta</h1>
      <h2>Meus Produtos</h2>
      {/* Lista de produtos disponíveis para compra */}
    </div>
  );
};

export default AccountPage;