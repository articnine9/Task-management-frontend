import React, {  useState } from 'react'
import '../component3/UserLogin.css'
import {  useNavigate } from 'react-router-dom'

import axios from 'axios'

const UserReg = () => {
    const navi=useNavigate()
    const[Reg,setReg]=useState({
        name:"",
        email:"",
        password:"",
        role:""

    })
    const handleReg=(e)=>{
        setReg({...Reg,[e.target.name]:e.target.value})
 
    }
 
    const handleRegsubmit = async () => {
        if (Reg.role !== "" && Reg.name !== "" && Reg.email !== "" && Reg.password !== "") {
            try {
                const response = await axios.post('http://localhost:3333/user/register', Reg);
                navi('/UserLogin');
               
            } catch (error) {
                console.error("Error during registration: ", error);
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message);
                } else {
                    alert("Registration failed. Please try again.");
                }
            }
            setReg({
                name:"",
                email:"",
                password:"",
                role:""
            })
        } else {
            alert("All fields are required");
        }
       
    }
    
  return (
    <div className='regusermain'>
    <div className='regusersection'>
        <legend>Register</legend>
    <div>
        <input placeholder='Enter Your Name' name='name' value={Reg.name} onChange={handleReg} required/>
    </div>
    <div>
        <input placeholder='Enter Your Email' name='email' value={Reg.email} onChange={handleReg} required/>
    </div>
    <div>
        <input placeholder='Set Password' name='password' value={Reg.password} onChange={handleReg} required/>
    </div>
    <div>
        <input placeholder='Role' name='role' value={Reg.role} onChange={handleReg} required/>
    </div>
    <button onClick={handleRegsubmit}>Submit</button>

  </div>
  </div>
  )
}


export default UserReg
