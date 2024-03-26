import React,{ useContext } from 'react'
import './searchresultcard.css'
import { Link } from 'react-router-dom';


const SearchResultCard = ({bookData}) =>{

  return (
   <section>
      <div className='cart-items'>
        <div className='cart-item-img-container'>
            <img src={bookData.book_url} alt='cart-item-img' className='cart-item-img'/>
        </div>
        <div className='cart-item-content-container'>
            <h3>{bookData.book_title}</h3>
            <p>{bookData.author_name}</p>
            <p>{bookData.genre_name}</p>
        <Link to={`/book-details/${bookData.id}`} className='button-primary'>Product Details</Link>
        </div>

    </div>
   </section>
  )
}

export default SearchResultCard;