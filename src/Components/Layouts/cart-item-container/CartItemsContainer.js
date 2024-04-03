
// import React, { useContext, useEffect, useState, useCallback } from 'react';
// import './cart-item-container.css';
// import CartItemCard from '../../cards/cart-item-card/CartItemCard';
// import { CartContext } from '../../../App';
// import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router-dom';

// const CartItemsContainer = () => {
//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate();
//   const stripeKey = 'pk_test_51OyA4BRuhMJGUpa1ScTdOVfEHBktPAEz9K2GsCaUiAuIfKZHRF9yLetp7STlSD4dHYtCFwS4WxApS2XFpKOCxMSD002LpodRnc';

//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       if (item.price && item.quantity) {
//         total += item.price * item.quantity;
//       }
//     });
//     setTotalAmount(total);
//   }, [cartItems]);

//   const onToken = (token) => {
//     alert('Successful payment made');
//     navigate('/books');
//   };

//   const handleQuantityChange = useCallback((itemId, newQuantity) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === itemId) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setTotalAmount(calculateTotalAmount(updatedCartItems));
//   }, [cartItems]);
  
//   // ...

//   const calculateTotalAmount = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       if (item.price && item.quantity) {
//         total += item.price * item.quantity;
//       }
//     });
//     return total;
//   };

//   return (
//     <section className='cart-items-container'>
//       <div className='container'>
//         {cartItems.length === 0 ? (
//           <h2>Currently, your cart is empty</h2>
//         ) : (
//           <React.Fragment>
//             {cartItems.map((item) => (
//               <CartItemCard
//                 key={item.id}
//                 bookData={item}
//                 onQuantityChange={handleQuantityChange}
//               />
//             ))}
//             <h2>Total Amount: Ughs {totalAmount.toFixed(2)}</h2>
//             <StripeCheckout
//               name='Book Checkout'
//               description='Please fill in the details below'
//               amount={totalAmount * 100}
//               currency='UGX'
//               stripeKey={stripeKey}
//               token={onToken}
//               billingAddress
//             >
//               <button className='button-primary'>Checkout</button>
//             </StripeCheckout>
//           </React.Fragment>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CartItemsContainer;





import React, { useContext, useEffect, useState, useCallback } from 'react';
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

  const handleQuantityChange = useCallback((itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setTotalAmount(calculateTotalAmount(updatedCartItems));
  }, [cartItems]);

  const calculateTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      if (item.price && item.quantity) {
        total += item.price * item.quantity;
      }
    });
    return total;
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
                onQuantityChange={handleQuantityChange}
              />
            ))}
            <h2>Total Amount: Ughs {totalAmount.toFixed(2)}</h2>
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
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default CartItemsContainer;