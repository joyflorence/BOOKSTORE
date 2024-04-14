

import React from 'react'
import './pdtcard.css'
import { Link } from 'react-router-dom';
const PdtListingCard = ({bookData}) => {
  return (
    <div className='list-card'>
    <div className='listing-img-container'>
        <img src={bookData.book_url} alt='listing-img' className='listing-img'/>

    </div>
    <div className='listing-details-container'>
        <h3>{bookData.book_title}</h3>
        <p className='name'>{bookData.author_name}</p>
        <p className='price'>Ughs{bookData.price}</p>
        <p className='name'>{bookData.book_genre}</p>
        <p className='name'>{bookData.Available}</p>
    </div>
   
    <div className='card-button-container'>
    <Link to={`/book-details/${bookData.id}`} className='listing-button'>Add To Cart</Link>
    </div>
    </div>
  );
}

export default PdtListingCard;