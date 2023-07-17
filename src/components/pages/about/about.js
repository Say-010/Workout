import React from 'react'
import Header from '../../header/header'
import './about.css'
import Footer from '../../footer/footer'

function About() {
  return (
    <div>
        <Header/>
        <div className='about-wrapper'>
          
          <div className='about-header'>
          <h1>About US</h1>
          </div>
          
          <div className='about-main'>
          
          <div className='about-image'>
            <img src='https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400' alt='image'></img>
            
          </div>
          <div className='about-content'>
            <h1>Who We Are?</h1>
            <h2>We Will Give You Strength <br/>And Health.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>

          </div>
        
        </div>
        <Footer/>
    </div>
  )
}

export default About