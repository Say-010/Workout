import  React, { useState } from 'react'
import './signUp.css'
import {useNavigate} from "react-router-dom"

function SignUp() {
    const[email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()
    function handleClick(){
      
      let users=JSON.parse(localStorage.getItem("user") || "[]")   /*creating a users array and storing it in localstorage*/
      
      let user={
            email:email,          /*creating user key and value for individual user */
            mobile:mobile,
            password:password
        }

        users.push(user)          /*adding the user details to users array*/ 
        localStorage.setItem("user",JSON.stringify(users))      /*storing the datas to localstorage using key as "user" and convert it to string*/
        
        navigate("/login")
      }

  return (
    <div className='signUp-container'>
      <h1>SignUp Page</h1>
        <div className='signUp'>
            <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='mobile' placeholder='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type='password' placeholder='confirm password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    
    </div>
  )
}

export default SignUp