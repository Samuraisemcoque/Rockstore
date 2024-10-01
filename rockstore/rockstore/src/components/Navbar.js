// import { 
//     faBars, 
//     faSearch, 
//     faShoppingCart
//   } from "@fortawesome/free-solid-svg-icons";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//   import { useState } from "react";
//   import { Link } from "react-router-dom";

// export default function Navbar({ setShowSidebarcart, selectedProducts }) {
//     const [show, setShow] = useState(false);

//   return (
//     <div className="nav">
//         <div className="inner-content"> 
//         <h1 className="Logo">
//           ROCK <span>STORE</span>
//         </h1>
//         <nav className={`${show && "show"}`}>
//           <ul>
//             <li><
//               Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/products">Produtos</Link>
//             </li>
//             <li>
//               <Link to="/about">Sobre</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contato</Link>
//             </li>
//             <li>
//               <Link to="/account">Conta</Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="navs-icon-container">
//         <div className="search-input-container">
//           <input type="search" placeholder="Procurar" />
//           <FontAwesomeIcon icon={faSearch} />
//         </div>
//         <button className="shopping-cart" onClick={()=>setShowSidebarcart(true)}
//         > 
//           <FontAwesomeIcon icon={faShoppingCart} />
//           <div className="products-count">{selectedProducts.length}</div>
//         </button>
//         <button className="menu-button" onClick={() => setShow(!show)}>
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//               </div>
//             </div>
//           </div>
//   )
// }

import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setShowSidebarcart, selectedProducts, user }) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="Logo">
          ROCK <span>STORE</span>
        </h1>
        <nav className={`${show && "show"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            {user && (
              <li className="account-menu">
                <Link to="/account">Conta</Link>
                <ul className="dropdown">
                  {user.role === 'funcionario' && (
                    <>
                      <li><Link to="/account/update-stock">Atualizar Estoque</Link></li>
                      <li><Link to="/account/orders">Ver Pedidos</Link></li>
                    </>
                  )}
                  {user.role === 'gerente' && (
                    <>
                      <li><Link to="/account/update-stock">Atualizar Estoque</Link></li>
                      <li><Link to="/account/sales">Ver Vendas</Link></li>
                      <li><Link to="/account/monthly-reports">Relatórios de Vendas do Mês</Link></li>
                      <li><Link to="/account/register-employee">Cadastrar Funcionário</Link></li>
                    </>
                  )}
                  {user.role === 'cliente' && (
                    <>
                      <li><Link to="/account/order-history">Histórico de Pedidos</Link></li>
                      <li><Link to="/account/profile">Meu Perfil</Link></li>
                    </>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </nav>
        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" placeholder="Procurar" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <button className="shopping-cart" onClick={() => setShowSidebarcart(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="products-count">{selectedProducts.length}</div>
          </button>
          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}