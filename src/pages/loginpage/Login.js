import React from 'react'
import './login.css'
import Hotpg from '../../images/books/show.jpg'
import Navbar from '../../Components/Layouts/navbar/Navbar'
import AuthForm from '../../Components/forms/authform/AuthForm'
const Login = () => {
  return (
    <React.Fragment>
    <Navbar darktext={true}/>
    <section className='signup-container'>
            <div className='signup-img-container'>
                <img src={Hotpg} alt='book'/>
            </div>
            <div className='sign-up-content-container'>
                <div className='container-wrapper'>
                    <h2>Login</h2>
                    <p>Sign in With Email and password</p>
                    <AuthForm buttonName='login'/>
                </div>
            </div>
    </section>
    </React.Fragment>
  )
}

export default Login