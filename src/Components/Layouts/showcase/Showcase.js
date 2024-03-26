import React from 'react'
import './showcase.css'
import Navbar from '../navbar/Navbar'
import SearchInputForm from '../../forms/searchinputform/SearchInputForm'
const Showcase = () => {
  return (
   <section className='showcase-container'>

    <Navbar/>
    <div className='overlay'></div>
    <div className='showcase-content'>
        <h1>Buy quality books at affordable price</h1>
        <p>Best books available</p>
        <SearchInputForm  darkTheme={true}/>
    </div>
   </section>
  )
}

export default Showcase;