import './pdtlistingall.css'
import React from 'react'
import PdtListingCard from '../../cards/pdtlisting-cards/PdtListingCard'
import { BookData } from '../../../utl/BookData'
const PdtListingAll = () => {
  return (
   <section className='all-container'>
    <div className='container'>
        
        <div className='grid-container'>
            {BookData.map((book)=>{
                return(
                    <div key={book.id} className='grid-item'>
                    <PdtListingCard  bookData={book}/>
                </div>
                );
            })}
        </div>
    </div>
   </section>
  )
}

export default PdtListingAll