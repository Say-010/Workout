import React from 'react'
import './footer.css'
import {FaInstagramSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {FaYoutubeSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div  className='footer-content'>
     
      <div className='logo-sec'>
        <button className='logo' >GYM</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='social-icons'>
        <FaFacebookSquare/>
        <FaInstagramSquare/>
        <FaYoutubeSquare/>
        </div>
      </div>
      
      <div className='healthy-sec'>
      <h3>Healthy Living</h3>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      </div>
      
      <div className='services-sec'>
      <h3>Services</h3>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      </div>
      
      <div className='programs-sec'>
      <h3>Prorams</h3>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum</h4>
      </div>

      </div> 

      <div className='copyright'>
          <p>copyright@gym.com</p>
       </div>
    </div>
  )
}

export default Footer