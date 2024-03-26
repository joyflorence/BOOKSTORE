import React from 'react'
import Navbar from '../../Components/Layouts/navbar/Navbar'
import Footer from '../../Components/Layouts/footer/Footer'
import CartItemsContainer from '../../Components/Layouts/cart-item-container/CartItemsContainer'

const CartPage = () => {
  return (
   <section>
      <Navbar darktheme={true}/>
        <CartItemsContainer/>
      <Footer/>
   </section>
  )
}

export default CartPage