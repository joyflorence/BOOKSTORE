import React from 'react'
import Nabar from '../../Components/Layouts/navbar/Navbar'
import SearchInputForm from '../../Components/forms/searchinputform/SearchInputForm'
import './bookpage.css'
import PdtListingAll from '../../Components/Layouts/pdtlistingall/PdtListingAll'
import Footer from '../../Components/Layouts/footer/Footer'
const BookPage = () => {
  return (
    <section>
      <Nabar darktheme={true}/>
      <div className='search-container'>
        <h2><span className='primary'>Books Available Here</span> </h2>
      <SearchInputForm darkTheme={false}/>
      </div>
      <PdtListingAll/>
      <Footer/>
    </section>
  )
}

export default BookPage