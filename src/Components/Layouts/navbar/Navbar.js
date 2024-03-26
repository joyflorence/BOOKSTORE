import React,{useContext} from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../../../App'
import {ReactComponent as Cart} from '../../../images/cart.svg'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../../firebase/Firebase'


const Navbar = ({darktheme, darktext}) => {
    const user = useContext(userContext);
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleLogout =()=>{
      signOut(auth).then(()=>{
          navigate('/');

      })
      .catch((err)=>{
        
      })
    }

    const showLogoutAndSignup = (
      <nav className='nav-links-container'>
      <Link to='/' className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Home</Link>
      <Link to='/books' className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Books</Link>
      <Link to='/login' className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Login</Link>
      <Link to='/signup' className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Signup</Link>
      </nav>
    )

    const showLogoutAndCart = (
      <nav className='nav-links-container'>
      <Link to='/' className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Home</Link>
      <Link to='/books' className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Books</Link>
      <a onClick={handleLogout} className={`${darktext ? 'nav-links-dark': 'nav-links'}`}>Logout</a>
      <Link to='/cart' className='cart'><Cart/></Link>
     </nav>
    )
   

  return (
    <section className={`navbar-container ${darktheme ? 'background-dark relative' : 'background-transparent'}`}>
        <div className='container flex justify-between align-center '>
            <a href='#' className='logo'>Book Store</a>

        {user ? showLogoutAndCart : showLogoutAndSignup}

        </div>
    </section>
  )
}

export default Navbar;