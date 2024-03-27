import React, {useContext} from 'react'
import './cart-item-container.css'
import CartItemCard from '../../cards/cart-item-card/CartItemCard';
import { CartContext } from '../../../App';
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom';


const CartItemsContainer = () => {
    const {cartItems, totalAmount} = useContext(CartContext);
    const navigate = useNavigate()
    const stripeKey = 'pk_test_51OyA4BRuhMJGUpa1ScTdOVfEHBktPAEz9K2GsCaUiAuIfKZHRF9yLetp7STlSD4dHYtCFwS4WxApS2XFpKOCxMSD002LpodRnc'
    const onToken  = (token) =>{
      alert('Your payment has been processed')
        navigate('/books');
}

    
    
  return (
   <section className='cart-items-container'>
   <div className='container'>
      {totalAmount === 0 ? (
            <h2>Currently Your cart is empty</h2>
      ) : (
       <React.Fragment>
          {cartItems.map((item) => (
            <CartItemCard key={item.id} bookData={item}/>
          ))}
          <h2>TotalAmount = Ughs{totalAmount}</h2>
         
          <StripeCheckout
          name='Book Checkout'
          description='Please fill in the details below'
          amount={totalAmount*100}
          stripeKey={stripeKey}
          token={onToken}
          billingAddress
          
          > <button className='button-primary'>Proceed To CheckOut</button></StripeCheckout>
       </React.Fragment>
      )}
   
   </div>
   </section>
  );
}

export default CartItemsContainer;