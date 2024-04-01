
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
import CartPage from './pages/cartpage/CartPage';


export const userContext = createContext({})
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

  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      if (user){
        setAuthenticatedUser(user);
      } else{
        setAuthenticatedUser(null)
      }})},[])

  useEffect(() =>{
   let total = 0;
   cartItems.forEach((item) =>{
    console.log(item.price);
    total = total + parseInt(item.price);})
   setTotalAmount(total);},[cartItems])

  return ( 
    <Router>
     <ScrollToTop>
     <CartContext.Provider value={{cartItems, totalAmount, setCartItems}}>
      < userContext.Provider value = {authenticatedUser}>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/books' element={<BookPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/book-details/:id' element={<BookDetailsPage/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>        
         </Routes>
     </userContext.Provider>
     </CartContext.Provider>
     </ScrollToTop>
     </Router>
      
     
  );
}

export default App;
