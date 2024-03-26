
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
import UpdateUserPage from './pages/updateuserpage/UpdateUserPage';
import app from './firebase/Firebase';
import CartPage from './pages/cartpage/CartPage';

export const userContext = createContext({})
export const CartContext = createContext([])

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
      }
    })
  },[])

  useEffect(() =>{
   let total = 0;
   cartItems.forEach((item) =>{
    console.log(item.price);
    total = total + parseInt(item.price);
   })
   setTotalAmount(total);


  },[cartItems])

  return ( 
    <Router>
     <ScrollToTop>
      < userContext.Provider value = {authenticatedUser}>
        <CartContext.Provider value={{cartItems, totalAmount,  setCartItems}}>
         
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/books' element={<BookPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/book-details/:id' element={<BookDetailsPage/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>  
              <Route path='/update' element={<UpdateUserPage/>}/> 
            
         </Routes>
        
        </CartContext.Provider>
     </userContext.Provider>
     </ScrollToTop>
     </Router>
      
     
  );
}

export default App;
