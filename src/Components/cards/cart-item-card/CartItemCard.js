import React,{ useContext } from 'react'
import './cartitemcard.css'
import { CartContext } from '../../../App'

const CartItemCard = ({bookData}) => {

  const{cartItems, setCartItems} = useContext(CartContext)

  const handleRemove = () =>{
    console.log(bookData.id)
    setCartItems(cartItems.filter((item)=>item.id !== bookData.id));
   
  }

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
            <p className='cart-item-price'>${bookData.price}</p>

            <button onClick={handleRemove} className='delete-button'>Remove From Cart</button>
           
        </div>

    </div>
   </section>
  )
}

export default CartItemCard