import React from 'react'
import Showcase from '../../Components/Layouts/showcase/Showcase'
import ProductListing from '../../Components/Layouts/prodlisting/ProductListing'
import Footer from '../../Components/Layouts/footer/Footer'
const HomePage = () => {
  return (
   <section>
      <Showcase/>
      <ProductListing/>
      <Footer/>
   </section>
  )
}

export default HomePage