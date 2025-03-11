import React, { useState } from 'react'
import{
    Form,
    Label,FormGroup,Input,Button
} from 'reactstrap'
import UserLoginCss from '../component3/UserLogin.css'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import { useEffect } from 'react'

const UserLogin = () => {
  const navig=useNavigate()
  const [Loginuser,setLoginuser]=useState({
    email:"",
    password:""
  })
  // const [regLogin,setregLogin]=useState([])
//   const registerdata=async()=>{
//     try{
//         const registerresponse=await axios.get("http://localhost:3333/user/alluser")
//         console.log(registerresponse)
//         setregLogin(registerresponse.data)
        
        
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// useEffect(()=>{
//     registerdata()
    
// },[] )
const handleLoginUser=(e)=>{
  setLoginuser({...Loginuser,[e.target.name]:e.target.value})

}

const handleUser=async()=>{

  try{
    const resp =  await axios.post("http://localhost:3333/user/login",Loginuser)
    console.log(resp,'iii')
    const data=resp.data
    localStorage.setItem("currentUser",Loginuser.email)
    navig('/UserHome')
    // const newdata=data.find(item=>item.email===Loginuser.email && item.password===Loginuser.password )
    // if(newdata && Loginuser.email!=="" && Loginuser.password!==""){
   
    // }
    // else{
    //   alert("please fill the details or check the details")
    // }
  }
  catch(err){
    console.log(err)
  }
  }

  return (
    <div className='wallpaper'>
       <div className='User'>
  
  <Form>
    <legend style={{color : "black"}}>User Login</legend>
    <FormGroup floating>
      <Input 
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        value={Loginuser.email}
        onChange={handleLoginUser}
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        value={Loginuser.password}
        onChange={handleLoginUser}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button className='userlogin' onClick={handleUser}>
      Login
    </Button>
    <p className='useror'>or</p>
    {' '}
    <Link to='/UserReg'><Button className='userreg'>
      Register
    </Button>
    </Link>
  </Form>
</div>
      
    </div>
  )
}

export default UserLogin
