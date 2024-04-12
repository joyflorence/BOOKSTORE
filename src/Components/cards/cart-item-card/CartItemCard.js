
import React, { useContext, useState } from 'react';
import './cartitemcard.css';
import { CartContext } from '../../../App';

const CartItemCard = ({ bookData }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleRemove = () => {
    setCartItems(cartItems.filter((item) => item.id !== bookData.id));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateCartItemQuantity(newQuantity);
  };

  const updateCartItemQuantity = (newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === bookData.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
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
          <p className='cart-item-price'>Ughs {bookData.price}</p>

          <div className='quantity-container'>
            <label htmlFor='quantity'>Quantity:</label>
            <input
              type='number'
              id='quantity'
              value={quantity}
              min='1'
              onChange={handleQuantityChange}
            />
          </div>

          <button onClick={handleRemove} className='delete-button'>
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItemCard;



