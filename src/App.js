
import React,{useState, useEffect, createContext} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import BookPage from './pages/bookpage/BookPage';
import ScrollToTop from './Components/util/ScrollToTop';
import SearchPage from './pages/searchpage/SearchPage';
import BookDetailsPage from './pages/bookdetailspage/BookDetails';
import Login from './pages/loginpage/Login';
import Signup from './pages/loginpage/Signup';
import app from './firebase/Firebase';
import ManageOrder from './Components/adminpanel/ManageOrder';
import CartPage from './pages/cartpage/CartPage';
import Admin from './Components/adminpanel/login/Admin'
import Profile from './pages/profile/Profile';
import Dashboard from './Components/adminpanel/Dasbord'
import AdminProfile from './Components/adminpanel/adminprofile/AdminProfile';
import ManageBooks from './Components/adminpanel/Manage/ManageBooks';
import Order from './Components/Layouts/orderhistory/Order';
import ManageUsers from './Components/adminpanel/MangeUsers';





export const userContext = createContext({})
export const OrderContext = createContext({})
export const CartContext = createContext({
  cartItems: [],
  totalAmount: 0,
  setCartItems: () => {},
});

function App() {
  const auth = getAuth(app);
  const[authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0)
  const [orderHistory, setOrderHistory] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };
  


  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      if (user){
        setAuthenticatedUser(user);
      } else{
        setAuthenticatedUser(null)
      }})},[auth])

  useEffect(() =>{
   let total = 0;
   cartItems.forEach((item) =>{
    console.log(item.price);
    total = total + parseInt(item.price);})
   setTotalAmount(total);},[cartItems])

  return ( 
    <Router>
     <ScrollToTop>
     <CartContext.Provider value={{cartItems, totalAmount, setCartItems,clearCart}}>
      < userContext.Provider value = {authenticatedUser}>
       <OrderContext.Provider value={{ orderHistory, setOrderHistory }}>
       <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/books' element={<BookPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/book-details/:id' element={<BookDetailsPage/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>  
              <Route path='/admin' element={<Admin/>}/> 
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/orders' element={<ManageOrder/>}/>
              <Route path='/users' element={<ManageUsers/>}/>
              <Route path='/adminprofile' element={< AdminProfile/>}/>
               <Route path='/order' element={< Order/>}/>
              <Route path='/dashboard' element = {<Dashboard/>}/>
              <Route path='/managebooks' element={<ManageBooks/>}/>
         </Routes>
       </OrderContext.Provider>
     </userContext.Provider>
     </CartContext.Provider>
     </ScrollToTop>
     </Router>  
  );
}

export default App;
