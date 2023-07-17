import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'

function Header() {
    const navigate = useNavigate();
    
  return (
    <div className='header'>
        <div className='logo'>
            <button onClick={()=>navigate('/')}>Logo</button>
        </div>
        <div className='menu'>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/about')}>About</button>
            <button onClick={()=>navigate('/classes')}>Classes</button>
            <button onClick={()=>navigate('/contact')}>Contact</button>
        </div>
        <div className='joinUs'>
            <button onClick={()=>navigate('/signUp')}>JoinUS</button>
        </div>

    </div>
  )
}

export default Header