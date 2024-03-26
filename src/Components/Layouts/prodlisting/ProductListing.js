import React from 'react'
import './productlistinfg.css'
import PdtListingCard from '../../cards/pdtlisting-cards/PdtListingCard'
import { BookData } from '../../../utl/BookData'
const ProductListing = () => {
  return (
    <div className='prodlisting-container'>
        <div className='container'>
        <h2> <span className='primary'>Some Books You Might Like</span> </h2>
        </div>
        <div className='listing-container'>
          {BookData.slice(0,4).map((book) => {
            return(
              <PdtListingCard key={book.id} bookData={book}/>
            );
          
          })}
            </div>
    </div>
  )
}

export default ProductListing