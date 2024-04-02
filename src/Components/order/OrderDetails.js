import React, { useContext } from 'react';
import { OrderContext } from '../../App';

const OrderDetails = ({ orderId }) => {
  const { orderHistory } = useContext(OrderContext);
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





