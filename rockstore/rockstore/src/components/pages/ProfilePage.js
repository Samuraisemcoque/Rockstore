// src/components/pages/ProfilePage.js
import React, { useState } from 'react';

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleUpdateProfile = () => {
    // Aqui você pode adicionar a lógica para atualizar o perfil do cliente no backend
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="page-container">
      <h1>Meu Perfil</h1>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Atualizar Perfil</button>
    </div>
  );
};

export default ProfilePage;