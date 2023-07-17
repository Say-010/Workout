import React from 'react'
import './whysection.css'

function Whysection() {
  return (
    <div className='whySec_wrapper'>
        <div className='why_content'>
            <h1>Why Us?</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3>sed do eiusmod tempor incididunt ut labore et dolore.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <button>Learn More</button>
        </div>
        <div className='why_video'>
        <iframe 
        width="400" 
        height="300"
        src="https://www.youtube.com/embed/JxRnueT6wHs" 
        title="50+ Man Workout in Gym Free Stock Video Footage | Muscular Man Working Out or Exercising at Home/Gym" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Whysection