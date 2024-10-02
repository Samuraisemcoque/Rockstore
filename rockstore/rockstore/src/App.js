// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { useEffect, useState } from "react";
// import Footer from "./components/Footer";
// import HomePage from "./components/pages/HomePage";
// import ProductsPage from "./components/pages/ProductsPage";
// import SidebarCart from "./components/SidebarCart";
// import CheckoutPage from "./components/pages/CheckoutPage";

// function App() {
//     const [products, setProducts] = useState([]);
//     const [ShowSidebarcart, setShowSidebarcart ] = useState (false);
//     const [selectedProducts, setSelectedProducts ] = useState ([]);
//     const [cartTotal, setCartTotal] = useState(0);

//     const addToCartTotal = (value) => setCartTotal(cartTotal + value);

//     useEffect(() => {
//       fetch('/db.json') 
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//     }, [])

//     const addProductToCart = (id) => {
//       const productToAdd = products.filter((product) => product.id === id)[0];
//       if(selectedProducts.includes(productToAdd)) return;
//       setSelectedProducts(selectedProducts.concat(productToAdd));
//       setCartTotal(cartTotal + productToAdd.price);
//     };

//     const removeProductFromCart = (id) => {
//       const newSelectedProducts = selectedProducts.filter(
//         product => product.id !== id
//       );
//       setSelectedProducts(newSelectedProducts);
//     }

//   return (
//     <Router>
//     <div className="App">
//       <Navbar selectedProducts={selectedProducts} 
//       setShowSidebarcart={setShowSidebarcart} 
//       />
//       <SidebarCart
//      addToCartTotal={addToCartTotal}
//      removeProductFromCart={removeProductFromCart}
//      cartTotal={cartTotal}
//      selectedProducts={selectedProducts} 
//      setShowSidebarcart={setShowSidebarcart}
//      showSidebarCart={ShowSidebarcart} 
//      />
//         <main> 
//           <Routes>
//              <Route 
//              path="/" 
//              element={
//                 <HomePage
//                   addToCartTotal={addToCartTotal}
//                   removeProductFromCart={removeProductFromCart}
//                   selectedProducts={selectedProducts}
//                   addProductToCart={addProductToCart}
//                   products={products} 
//                   setShowSidebarcart={setShowSidebarcart}
//                   ShowSidebarcart={ShowSidebarcart}
//                   cartTotal={cartTotal}
//                 />
//                 }
//              />
//              <Route 
//               path="/products"
//               element={
//               <ProductsPage
//                products={products} 
//                addProductToCart={addProductToCart}
//                />
//               }
//              />
//              <Route
//               path="cart/checkout"
//               element={<div>Total ={cartTotal}</div>}
//               />
//              </Routes>
//         </main>
//       <Footer />
//     </div>
//    </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import SidebarCart from './components/SidebarCart';
import CheckoutPage from './components/pages/CheckoutPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Dashboard from './components/pages/Dashboard';
import UpdateStockPage from './components/pages/UpdateStockPage';
import OrdersPage from './components/pages/OrdersPage';
import SalesPage from './components/pages/SalesPage';
import MonthlyReportsPage from './components/pages/MonthlyReportsPage';
import RegisterEmployeePage from './components/pages/RegisterEmployeePage';
import OrderHistoryPage from './components/pages/OrderHistoryPage';
import ProfilePage from './components/pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import AboutPage from './components/pages/AboutPage';
import SACPage from './components/pages/SACPage';
import ContactPage from './components/pages/ContactPage';
import TermsPage from './components/pages/TermsPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';

function App() {
  const [products, setProducts] = useState([]);
  const [ShowSidebarcart, setShowSidebarcart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [user, setUser] = useState(null);

  const addToCartTotal = (value) => setCartTotal(cartTotal + value);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
    if (selectedProducts.includes(productToAdd)) return;
    setSelectedProducts(selectedProducts.concat(productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(newSelectedProducts);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          selectedProducts={selectedProducts}
          setShowSidebarcart={setShowSidebarcart}
          user={user}
        />
        <SidebarCart
          addToCartTotal={addToCartTotal}
          removeProductFromCart={removeProductFromCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts}
          setShowSidebarcart={setShowSidebarcart}
          showSidebarCart={ShowSidebarcart}
        />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute user={user}>
                  <HomePage
                    addToCartTotal={addToCartTotal}
                    removeProductFromCart={removeProductFromCart}
                    selectedProducts={selectedProducts}
                    addProductToCart={addProductToCart}
                    products={products}
                    setShowSidebarcart={setShowSidebarcart}
                    ShowSidebarcart={ShowSidebarcart}
                    cartTotal={cartTotal}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute user={user}>
                  <ProductsPage
                    products={products}
                    addProductToCart={addProductToCart}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart/checkout"
              element={
                <ProtectedRoute user={user}>
                  <CheckoutPage
                    cartTotal={cartTotal}
                    selectedProducts={selectedProducts}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/update-stock"
              element={
                <ProtectedRoute user={user}>
                  <UpdateStockPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/orders"
              element={
                <ProtectedRoute user={user}>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/sales"
              element={
                <ProtectedRoute user={user}>
                  <SalesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/monthly-reports"
              element={
                <ProtectedRoute user={user}>
                  <MonthlyReportsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/register-employee"
              element={
                <ProtectedRoute user={user}>
                  <RegisterEmployeePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/order-history"
              element={
                <ProtectedRoute user={user}>
                  <OrderHistoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/profile"
              element={
                <ProtectedRoute user={user}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sac" element={<SACPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;