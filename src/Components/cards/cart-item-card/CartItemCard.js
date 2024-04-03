// import React,{ useContext } from 'react'
// import './cartitemcard.css'
// import { CartContext } from '../../../App'

// const CartItemCard = ({bookData}) => {

//   const{cartItems, setCartItems} = useContext(CartContext)

//   const handleRemove = () =>{
//     console.log(bookData.id)
//     setCartItems(cartItems.filter((item)=>item.id !== bookData.id));
   
//   }

//   return (
//    <section>
//       <div className='cart-items'>
//         <div className='cart-item-img-container'>
//             <img src={bookData.book_url} alt='cart-item-img' className='cart-item-img'/>
//         </div>
//         <div className='cart-item-content-container'>
//             <h3>{bookData.book_title}</h3>
//             <p>{bookData.author_name}</p>
//             <p>{bookData.genre_name}</p>
//             <p className='cart-item-price'>Ughs{bookData.price}</p>

//             <button onClick={handleRemove} className='delete-button'>Delete</button>
           
//         </div>

//     </div>
//    </section>
//   )
// }

// export default CartItemCard



import React, { useContext, useState, useEffect } from 'react';
import './cartitemcard.css';
import { CartContext } from '../../../App';

const CartItemCard = ({ bookData, onQuantityChange }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(bookData.price);
  
  useEffect(() => {
    setTotal(bookData.price * quantity);
    onQuantityChange(bookData.id, quantity);
  }, [quantity, bookData.price, bookData.id, onQuantityChange]);

  const handleRemove = () => {
    setCartItems(cartItems.filter((item) => item.id !== bookData.id));
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section>
      <div className='cart-items'>
        <div className='cart-item-img-container'>
          <img src={bookData.book_url} alt='cart-item-img' className='cart-item-img' />
        </div>
        <div className='cart-item-content-container'>
          <h3>{bookData.book_title}</h3>
          <p>{bookData.author_name}</p>
          <p>{bookData.genre_name}</p>
          <p className='cart-item-price'>Ughs{bookData.price}</p>

          <div className='cart-quantity-container'>
            <label htmlFor='quantity'>Quantity:</label>
            <button onClick={handleQuantityDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleQuantityIncrease}>+</button>
          </div>

          <p className='cart-item-total'>Total: Ughs{total}</p>

          <button onClick={handleRemove} className='delete-button'>
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItemCard;


