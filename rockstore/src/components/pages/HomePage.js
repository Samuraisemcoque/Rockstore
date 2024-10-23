import React from 'react'
import Header from '../Header'
// import SidebarCart from '../SidebarCart'
import ProductsList from '../ProductsList'
import ExclusiveSection from '../ExclusiveSection'
import ReviewsList from '../ReviewsList'


export default function HomePage({ products, addProductToCart,}) {
  return (
    <> 


    <Header />


    <div className="page-inner-content">
      <div className="section-title">
        <h3>Produtos Selecionados</h3>
        <div className="underline"></div>
      </div>
      <div className="main-content">
        <ProductsList addProductToCart={addProductToCart}
         products={products}/>
      </div>
    </div>

  <ExclusiveSection />
  <ReviewsList /></>
  )
}