import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import './contact.css'
function Contact() {
  return (
    <div>
        <Header/>
        <div className='contact-wrapper'>
          <div className='contact-header'>
            <h1>Contact Us</h1>
            </div>
            <h1>Touch To Connect With Us</h1>
          <div className='contact-main'>
          
            <div className='map'></div>
            <div className='form'>
              <input type='email' placeholder='enter email'></input> 
              <input type='mobile' placeholder='enter mobile'></input>
              <input type='password' placeholder='enter password'></input> 
              <textarea placeholder='Type Your Message'></textarea>
              <button>Send Message</button>  
            </div>  
           
          </div>  
        </div>

        <Footer/>
    </div>
  )
}

export default Contact