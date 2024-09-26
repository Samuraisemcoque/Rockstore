import React from 'react';

const CheckoutPage = ({ cartTotal, selectedProducts }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <p>Total: ${cartTotal}</p>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default CheckoutPage;