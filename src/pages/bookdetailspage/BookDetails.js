import React from 'react'
import Navbar from '../../Components/Layouts/navbar/Navbar';
import DetailsSection from '../../Components/Layouts/detailsection/DetailsSection';
import Footer from '../../Components/Layouts/footer/Footer'
const BookDetails = () => {
  return (
   <section>
      <Navbar darktheme={true}/>

      <DetailsSection/>
      <Footer/>
   </section>
  )
}

export default BookDetails;