import React, {useRef} from 'react'
import './footer.css'
import emailjs from '@emailjs/browser'
import{ Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';


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
            <Box sx={{textAlign:'right',
      bgcolor:'#1A1A19',
      color:'white',
      p:3}}>
        <Box sx={{
          my: 2,'& svg':{
          fontSize:'60px',
          cursor:'pointer',
          mr: 3,
        },
        '& svg:hover':{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms',
        }
        }}>
          {/*icons*/}
        <InstagramIcon/>
        <YouTubeIcon/>
        <XIcon/>
        <FacebookIcon/>
        </Box>
      </Box>
        </div>
        <p>&copy; 2024 All Rights Reserved</p>
    
        
       
        
    </section>
  )
}

export default Footer