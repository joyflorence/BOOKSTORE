
import React, { useContext, useEffect, useState } from 'react';
import './cart-item-container.css';
import CartItemCard from '../../cards/cart-item-card/CartItemCard';
import { CartContext } from '../../../App';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';

const CartItemsContainer = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const stripeKey = 'pk_test_51OyA4BRuhMJGUpa1ScTdOVfEHBktPAEz9K2GsCaUiAuIfKZHRF9yLetp7STlSD4dHYtCFwS4WxApS2XFpKOCxMSD002LpodRnc';

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(cartItems));
  }, [cartItems]);

  const onToken = (token) => {
    alert('Successful payment made');
    navigate('/books');
  };

  const calculateTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      if (item.price && item.quantity) {
        total += item.price * item.quantity;
      }
    });
    return total;
  };

  const handleBackToShopping = () => {
    navigate('/books');
  };

  return (
    <section className='cart-items-container'>
      <div className='container'>
        {cartItems.length === 0 ? (
          <h2>Currently, your cart is empty</h2>
        ) : (
          <React.Fragment>
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                bookData={item}
              />
            ))}
            <h2>TotalAmount: UGX {totalAmount}</h2>
            <StripeCheckout
              name='Book Checkout'
              description='Please fill in the details below'
              amount={totalAmount * 100}
              currency='UGX'
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <button className='button-primary'>Checkout</button>
            </StripeCheckout>
            
            <div className="backtoshopping" onClick={handleBackToShopping}>
              <span>&larr;</span>
              <span>Back to Shopping</span>
            </div>
          </React.Fragment>
          
        )}
      </div>
    </section>
  );
};

export default CartItemsContainer;