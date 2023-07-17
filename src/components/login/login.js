import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './login.css'


function Login() {
    const[email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate= useNavigate()

    function handleClick(){
        let users= JSON.parse(localStorage.getItem("user"))       //creating a new variable and getting the datas from local storage. JSON.parse is used to convert the string into object
        users.map((user,index)=>{                          // using map method toloop through each object elements in the array
            if(user.email === email && user.password === password){       // giving a condition to check whether the given input is true or not
                navigate("/")                  // if the given input is tru then it will redirect to the home page
            }else{
                alert("invalid user")         // else it will show an alert
            }
        })        
      
    }


  return (
    <div className='login_container'>
    <h1>Login Page</h1>
    <div className='login'>
        <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
    </div>
    </div>
  )
}

export default Login