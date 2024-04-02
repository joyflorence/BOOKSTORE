// import React, { useContext } from 'react';
// import './navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { userContext, CartContext } from '../../../App';
// import cartImage from '../../../images/cart.png';
// import { getAuth, signOut } from 'firebase/auth';
// import app from '../../../firebase/Firebase';

// const Navbar = ({ darktheme, darktext }) => {
//   const user = useContext(userContext);
//   const auth = getAuth(app);
//   const navigate = useNavigate();
//   const cartContext = useContext(CartContext);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         navigate('/');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };



//   const showLogoutAndSignup = (
//     <nav className="nav-links-container">
//       <Link to="/" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Home
//       </Link>
//       <Link to="/books" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Books
//       </Link>
//       <Link to="/login" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Login
//       </Link>
//       <Link to="/signup" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Signup
//       </Link>
//       <Link to="/admin" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Admin
//       </Link>
//     </nav>
//   );

//   const showLogoutAndCart = (
//     <nav className="nav-links-container">
//       <Link to="/" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Home
//       </Link>
//       <Link to="/books" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Books
//       </Link>
//       <a onClick={handleLogout} className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
//         Logout
//       </a>
//       <div className="cart--container">
//         <Link to="/cart" className="cart">
//           <img src={cartImage} alt="Cart" />
//         </Link>
//         <div className="cart-count">{cartContext.cartItems.length}</div>
//       </div>
//     </nav>
//   );

//   return (
//     <section className={`navbar-container ${darktheme ? 'background-dark relative' : 'background-transparent'}`}>
//       <div className="container flex justify-between align-center ">
//         <a href="#" className="logo">
//           Book Store
//         </a>

//         {user ? showLogoutAndCart : showLogoutAndSignup}
//       </div>
//     </section>
//   );
// };

// export default Navbar;




import React, { useContext, useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { userContext, CartContext } from '../../../App';
import cartImage from '../../../images/cart.png';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase/Firebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = ({ darktheme, darktext }) => {
  const user = useContext(userContext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const showLogoutAndSignup = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Home
      </Link>
      <Link to="/books" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Books
      </Link>
      <Link to="/login" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Login
      </Link>
      <Link to="/signup" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Signup
      </Link>
      <Link to="/admin" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Admin
      </Link>
    </nav>
  );

  const showLogoutAndCart = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Home
      </Link>
      <Link to="/books" className={`${darktext ? 'nav-links-dark' : 'nav-links'}`}>
        Books
      </Link>
      <div className="user-icon" onClick={toggleProfileDropdown}>
        <AccountCircleIcon className='user'/>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)}>
              Profile
            </Link>
            <Link to="/order" onClick={() => setIsProfileDropdownOpen(false)}>
              Orders
            </Link>
            <a onClick={handleLogout}>Logout</a>
          </div>
        )}
      </div>
      <div className="cart--container">
        <Link to="/cart" className="cart">
          <img src={cartImage} alt="Cart" />
        </Link>
        <div className="cart-count">{cartContext.cartItems.length}</div>
      </div>
    </nav>
  );

  return (
    <section
      className={`navbar-container ${darktheme ? 'background-dark relative' : 'background-transparent'}`}
    >
      <div className="container flex justify-between align-center ">
        <a href=''  className="logo">
          Book Store
        </a>

        {user ? showLogoutAndCart : showLogoutAndSignup}
      </div>
    </section>
  );
};

export default Navbar;