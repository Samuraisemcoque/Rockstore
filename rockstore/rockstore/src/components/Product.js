// import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Product({
//   id,
//   image, 
//   name, 
//   rate, 
//   price,
//   addProductToCart,
// }) {
//   return (
//     <div className="product">
//         <img src={image} alt={name} />
//         <p className="name">{name}</p>
//         <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
//         <p className="price">
//             {price} <span>BRL</span>
//             </p>
//            <div className="buttons">
//              <Link to="/products/123/checkout" className="btn-icon">
//                     <span>Comprar Agora</span>
//                     <FontAwesomeIcon icon={faMoneyBill}/>
//              </Link>
//              <button onClick={() => addProductToCart(id)} className="btn-icon add-to-cart-btn">
//              <span>Adicionar ao Carrinho</span>
//              <FontAwesomeIcon icon={faCartShopping}/>
//              </button>
//            </div> 
//     </div>
//   );
// }

import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({
  id,
  image, 
  name, 
  rate, 
  price,
  addProductToCart,
}) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addProductToCart(id);
    navigate('/cart/checkout');
  };

  return (
    <div className="product">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <p className="rate">★★★★★</p>
        <p className="price">
            {price} <span>BRL</span>
        </p>
        <div className="buttons">
            <button onClick={handleBuyNow} className="btn-icon">
                <span>Comprar Agora</span>
                <FontAwesomeIcon icon={faMoneyBill}/>
            </button>
            <button onClick={() => addProductToCart(id)} className="btn-icon add-to-cart-btn">
                <span>Adicionar ao Carrinho</span>
                <FontAwesomeIcon icon={faCartShopping}/>
            </button>
        </div> 
    </div>
  );
}
