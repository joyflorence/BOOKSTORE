import React from 'react'
import './signup.css'
import Hotpg from '../../images/books/show.jpg'
import Navbar from '../../Components/Layouts/navbar/Navbar'
import AuthForm from '../../Components/forms/authform/AuthForm'

const Signup = () => {
  return (
    <React.Fragment>
    <Navbar darktext={true}/>
    <section className='signup-container'>
            <div className='signup-img-container'>
                <img src={Hotpg} alt='book'/>
            </div>
            <div className='sign-up-content-container'>
                <div className='container-wrapper'>
                    <h2>Signup</h2>
                    <p>Create a New Account With Email and password</p>
                  <AuthForm buttonName='Sign up'/>

                </div>

            </div>
    </section>
    </React.Fragment>
  )
}

export default Signup;