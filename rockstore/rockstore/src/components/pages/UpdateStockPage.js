// src/components/pages/UpdateStockPage.js
import React, { useState } from 'react';



const UpdateStockPage = ({ products, setProducts }) => {
  const [productId, setProductId] = useState('');
  const [productValue, setProductValue] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleUpdateStock = () => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, value: productValue, image: productImage } : product
    );
    setProducts(updatedProducts);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProductImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="page-container">
      <h1>Atualizar Estoque</h1>
      <input
        type="text"
        placeholder="ID do Produto"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor do Produto"
        value={productValue}
        onChange={(e) => setProductValue(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <button onClick={handleUpdateStock}>Atualizar</button>
    </div>
  );
};

export default UpdateStockPage;