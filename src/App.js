import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/home';
import About from './components/pages/about/about' 
import Classes from './components/pages/classes/classes'
import Contact from './components/pages/contact/contact'
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';

function App() {
  return (
   <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      </BrowserRouter>
  
   </div>
  );
}

export default App;
