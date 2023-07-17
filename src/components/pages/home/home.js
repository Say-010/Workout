import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import './home.css'
import Herosection from './sections/herosection/herosection'
import Aboutsec from './sections/aboutsection/aboutsec'
import Whysection from './sections/whysection/whysection'


function Home() {
  return (
    <div className='home_wrapper'>
     <Header/>

     <div className="hero_section">
     <Herosection/>
     </div>
     <div className="about_section">
      <Aboutsec/>
     </div>
     <div className="whyUs_section">
      <Whysection/>
     </div>
     <div className='training-section'>

     </div>

     <Footer/>
    </div>
  )
}

export default Home