// import React from 'react';

// const CheckoutPage = ({ cartTotal, selectedProducts }) => {
//   return (
//     <div>
//       <h1>Checkout</h1>
//       <p>Total: ${cartTotal}</p>
//       <ul>
//         {selectedProducts.map((product) => (
//           <li key={product.id}>{product.name} - ${product.price}</li>
//         ))}
//       </ul>
//       <button>Finalizar Compra</button>
//     </div>
//   );
// };

// export default CheckoutPage;

import React from 'react';

const CheckoutPage = ({ cartTotal, selectedProducts }) => {
  const handlePurchase = () => {
    alert('COMPRA EFETUADA COM SUCESSO');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Total: ${cartTotal}</p>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={handlePurchase}>Finalizar Compra</button>
    </div>
  );
};

export default CheckoutPage;
