import React,{useContext, useEffect, useState} from 'react'
import { CartContext, userContext } from '../../../App'
import './details.css'
//import BookDetailImg from '../../../images/books/subtle.jpg'
import { useParams, useNavigate } from 'react-router-dom'
import { BookData } from '../../../utl/BookData'


const DetailsSection = () => {
    const{id} = useParams();
    const[bookData,setBookData] = useState({});

    const user =  useContext(userContext);
    const {cartItems, setCartItems} = useContext(CartContext);


    const navigate = useNavigate()
   
    useEffect(()=>{
        let newData = BookData.filter((book) => book.id === parseInt(id))
        setBookData(newData[0])
    },[])

    const handleAddToCart = () => {
        if (user) {
          if (cartItems.some(item => item.id === bookData.id)) {
            alert('This book is already in the cart.');
          } else {
            setCartItems([...cartItems, bookData]);
            alert('The book is added to the cart.');
          }
        } else {
          navigate('/login');
          alert('Please login or signup first.');
        }
      };

   
   
   
    return (
   <section className='detail-section.container'>
    <div className='container'>
        <div className='flex-container'>
           
            <div className='book-img-container'></div>
            <div className='book-detail-container'>
                <img src={bookData.book_url} alt='book' className='book'/>
                <h2>{bookData.book_title}</h2>
                <p className='primary'>{bookData.author_name}</p>
                <p className='book-description'>{bookData.book_description}</p>
                <h3>${bookData.price}</h3>
                <a onClick={handleAddToCart} className='button-primary'>Add To Cart</a>

            </div>
        </div>
    </div>
   </section>
  )
}

export default DetailsSection