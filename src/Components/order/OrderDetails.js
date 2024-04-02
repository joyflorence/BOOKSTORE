import React, { useContext } from 'react';
import { userContext} from '../../App';

const OrderDetails = ({ orderId }) => {
    
  const authenticatedUser = useContext(userContext);
  const orderHistory = authenticatedUser?.orderHistory || [];
  const order = orderHistory.find((order) => order.id === orderId);

  if (!order) {
    return <div>Order not found.</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>
        <strong>Order ID:</strong> {order.id}
      </p>
      <p>
        <strong>Date:</strong> {order.date}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
    
      <p>
        <strong>Item:</strong> {order.item}
      </p>
      <p>
        <strong>Total:</strong> {order.total}
      </p>
      {/* ...and so on */}
    </div>
  );
};

export default OrderDetails;



// import React, { useContext } from 'react';
// import './cart-item-container.css';
// import { CartContext, OrderContext } from '../../../App';

// const CartItemsContainer = () => {
//   const { cartItems, totalAmount } = useContext(CartContext);
//   const { orderHistory } = useContext(OrderContext);

//   return (
//     <section className='cart-items-container'>
//       <div className='container'>
//         {orderHistory.length === 0 ? (
//           <h2>No order history available</h2>
//         ) : (
//           <React.Fragment>
//             {orderHistory.map((order) => (
//               <div key={order.id} className='order-card'>
//                 <h3>Order ID: {order.id}</h3>
//                 <h4>Order Status: {order.status}</h4>
//                 <h4>Total Amount: Ughs {order.totalAmount}</h4>
//                 <h4>Items:</h4>
//                 <ul>
//                   {order.items.map((item) => (
//                     <li key={item.id}>
//                       {item.book_title} - Ughs {item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </React.Fragment>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CartItemsContainer;