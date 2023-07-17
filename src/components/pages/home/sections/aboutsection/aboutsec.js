import React from 'react'
import './aboutsec.css'

function Aboutsec() {
  return (
    <div className='aboutsec_wrapper'>
        <div className='about_video'>
        <iframe 
        width="400" 
        height="300"
        src="https://www.youtube.com/embed/JxRnueT6wHs" 
        title="50+ Man Workout in Gym Free Stock Video Footage | Muscular Man Working Out or Exercising at Home/Gym" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
         </div>
        
        <div className='about_content'>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default Aboutsec