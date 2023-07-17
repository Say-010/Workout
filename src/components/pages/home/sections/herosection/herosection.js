import React from 'react'
import './herosection.css'
import { useNavigate } from 'react-router-dom'

function Herosection() {

    const navigate =useNavigate()
  return (
    <div className='hero-wrapper'>
      <div className='hero'>
       <h1>"Take care of your <span className='hero-text'>body.</span><br/> It's the only place you<br/> have to <span className='hero-text'>Live.</span>"</h1>
       <div className='joinUs'>
            <button onClick={()=>navigate('/signUp')}>Join With US</button>
        </div>
       </div>
       </div>
  )
}

export default Herosection