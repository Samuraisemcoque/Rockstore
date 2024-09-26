import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarCart from "./components/SidebarCart";

function App() {
    const [products, setProducts] = useState([]);
    const [ShowSidebarcart, setShowSidebarcart ] = useState (false);
    const [selectedProducts, setSelectedProducts ] = useState ([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCartTotal = (value) => setCartTotal(cartTotal + value);

    useEffect(() => {
      fetch('/db.json') 
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    }, [])

    const addProductToCart = (id) => {
      const productToAdd = products.filter((product) => product.id === id)[0];
      if(selectedProducts.includes(productToAdd)) return;
      setSelectedProducts(selectedProducts.concat(productToAdd));
      setCartTotal(cartTotal + productToAdd.price);
    };

    const removeProductFromCart = (id) => {
      const newSelectedProducts = selectedProducts.filter(
        product => product.id !== id
      );
      setSelectedProducts(newSelectedProducts);
    }

  return (
    <Router>
    <div className="App">
      <Navbar selectedProducts={selectedProducts} 
      setShowSidebarcart={setShowSidebarcart} 
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
             <Route 
             path="/" 
             element={
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
                }
             />
             <Route 
              path="/products"
              element={
              <ProductsPage
               products={products} 
               addProductToCart={addProductToCart}
               />
              }
             />
             <Route path="cart/checkout"
              element={<div>Pagina de checkout{cartTotal}</div>}
              />
             </Routes>
        </main>
      <Footer />
    </div>
   </Router>
  );
}

export default App;
