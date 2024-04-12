import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/Firebase'; // Replace with the correct path to your Firebase module
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = firebase.auth().currentUser;
        const userId = user.uid; // Retrieve the user ID

        const response = await axios.get(`/api/orders?userId=${userId}`, {
          baseURL: 'https://api.stripe.com/v1', // Stripe test API endpoint
          headers: {
            Authorization: 'sk_test_51OyA4BRuhMJGUpa1NcWBHkOZSZUHzfp2tnx1u5rcXVnuxygT77NqlkSSo5JYveJlJPpC4KP9GC9Yero65vhc57V000XDdZk5k4', // Replace with your Stripe test secret key
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <Navbar darktheme={true}/>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h2>Order ID: {order.id}</h2>
              <p>Order Price: {order.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;