import React from 'react';
import { Link} from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/orders">Manage Orders</Link>
        </li>
        <li>
          <a href="/managebooks">Manage Books</a>
        </li>
        <li>
          <Link to="/users">Manage Users</Link>
        </li>

        <li>
          <a href="/adminProfile">Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
