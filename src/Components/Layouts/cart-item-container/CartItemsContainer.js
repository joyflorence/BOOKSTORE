
import React, { useContext } from 'react';
import './cart-item-container.css';
import CartItemCard from '../../cards/cart-item-card/CartItemCard';
import { CartContext, OrderContext } from '../../../App';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';

const CartItemsContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const stripeKey = 'pk_test_51OyA4BRuhMJGUpa1ScTdOVfEHBktPAEz9K2GsCaUiAuIfKZHRF9yLetp7STlSD4dHYtCFwS4WxApS2XFpKOCxMSD002LpodRnc';

  const onToken = (token) => {
    alert('successful payment made')
    navigate('/order')
  }



  return (
    <section className='cart-items-container'>
      <div className='container'>
        {totalAmount === 0 ? (
          <h2>Currently Your cart is empty</h2>
        ) : (
          <React.Fragment>
            {cartItems.map((item) => (
              <CartItemCard key={item.id} bookData={item} />
            ))}
            <h2>Total = Ughs{totalAmount}</h2>
            <StripeCheckout
              name='Book Checkout'
              description='Please fill in the details below'
              amount={totalAmount * 100}
              currency='Ughs'
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



// import React, { useContext } from 'react';
// import './cart-item-container.css';
// import CartItemCard from '../../cards/cart-item-card/CartItemCard';
// import { CartContext, OrderContext } from '../../../App';
// import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router-dom';

// const CartItemsContainer = () => {
//   const { cartItems, totalAmount } = useContext(CartContext);
//   const { setOrderHistory } = useContext(OrderContext);
//   const navigate = useNavigate();
//   const stripeKey =
//     'pk_test_51OyA4BRuhMJGUpa1ScTdOVfEHBktPAEz9K2GsCaUiAuIfKZHRF9yLetp7STlSD4dHYtCFwS4WxApS2XFpKOCxMSD002LpodRnc';

//   const onToken = (token) => {
//     // Assuming the server endpoint for payment is '/api/payments'
//     fetch('/api/payments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         token: token.id,
//         amount: totalAmount,
//         items: cartItems,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // Payment successful, store order history and navigate to order status
//           const orderHistory = data.orderHistory;
//           setOrderHistory(orderHistory);
//           alert('Your payment has been processed successfully');
//           navigate('/order');
//         } else {
//           // Handle payment error
//           alert('Payment failed. Please try again.');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('An error occurred. Please try again later.');
//       });
//   };

//   return (
//     <section className='cart-items-container'>
//       <div className='container'>
//         {totalAmount === 0 ? (
//           <h2>Currently Your cart is empty</h2>
//         ) : (
//           <React.Fragment>
//             {cartItems.map((item) => (
//               <CartItemCard key={item.id} bookData={item} />
//             ))}
//             <h2>Total = Ughs{totalAmount}</h2>
//             <StripeCheckout
//               name='Book Checkout'
//               description='Please fill in the details below'
//               amount={totalAmount * 100}
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


