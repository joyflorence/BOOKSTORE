import React from 'react'
import Navbar from '../Components/Layouts/navbar/Navbar'
import Hotpg from '../images/showcase.jpg'
const OrderHistory = () => {
  return (
    <div>
      <Navbar darktext={true}/>
      <div className='signup-img-container'>
      <img src={Hotpg} alt='book'/>
      </div>
    </div>
  )
}

export default OrderHistory