import React from 'react'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/order">Orders</a>
          </li>
         <a href='/managebooks'> ManageBooks</a>
        </ul>
      </div>
    );
  };
  export default Sidebar