import React, {useRef} from 'react'
import './footer.css'
import emailjs from '@emailjs/browser'


const Footer = () => {
    const form = useRef();
   const serviceid = 'service_yrbe9i9';
   const templateid = 'template_zdsu4us';
   const publicKey = 'X0sAFOeA59YRnU57n'

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(serviceid, templateid, form.current, publicKey)
        .then((response) =>{
            console.log(response.text)
        })
        .catch((error) =>{
            console.log(error.text);
        })

        e.target.reset();
       
    }

  return (
    <section className='footer'>
        <div className='container'>
            <h2> FOR MORE INFORMATION FEEL FREE TO ASK
                <form onSubmit={handleSubmit} ref={form} className='footer-form'>
                    <div className='form-group'>
                        <label htmlFor='name'className='form-label'>Name</label>
                        <input type='text' name='user_name' id='name' className='form-input' placeholder='Enter your name'/>

                    </div>
                    <div className='form-group'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' name='user_email' id='email' className='form-input' placeholder='Enter your emal'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='query' className='form-label'>Query</label>
                        <textarea className='form-input' name='message' id='query' placeholder='Type your query'></textarea>
                    </div>
                    <div>
                        <input type='submit' value='submit' className='form-submit'/>
                    </div>
                </form>
            </h2>
        </div>
        <p>&copy; 2024 All Rights Reserved</p>
    
        
       
        
    </section>
  )
}

export default Footer