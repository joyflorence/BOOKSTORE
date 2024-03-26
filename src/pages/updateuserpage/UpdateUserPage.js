import React from 'react';
import Hotpg from '../../images/books/show.jpg'
import Navbar from '../../Components/Layouts/navbar/Navbar'
import AuthForm from '../../Components/forms/authform/AuthForm'

const UpdateUserPage = () => {
  return (
    <React.Fragment>
    <Navbar darktext={true}/>
    <section className='signup-container'>
            <div className='signup-img-container'>
                <img src={Hotpg} alt='book'/>
            </div>
            <div className='sign-up-content-container'>
                <div className='container-wrapper'>
                    <h2>Please Update Credentials</h2>
                    
                    <AuthForm buttoName='update'/>
                </div>
            </div>
    </section>
    </React.Fragment>
  );
};

export default UpdateUserPage;