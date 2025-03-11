import React, {  useState } from 'react';
import { Form, Label, FormGroup, Input, Button } from 'reactstrap';
import '../component2/AdminLogin.css'; 
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const nav = useNavigate()
  const [Admindata, setAdmindata] = useState({
    email: "",
    password: ""
  })
 

  const HandleAdmin = (e) => {
    setAdmindata({ ...Admindata, [e.target.name]: e.target.value });
  }

   const handleClickAdmin = async() => {

    try{
      const resp =  await axios.post("http://localhost:3333/user/login", Admindata)
      console.log(resp.data)
      
      const Token = resp.data.accesstoken
      localStorage.setItem("TokenKey",Token)
      if(Token ){
        nav('/AdminHome')
      }
      // set it to the local storage
      // whenever we request any api, we get the data from local storage and include token value in the request data
       
     
     
     }
     catch(err){
          console.log(err)
     }
   
  }

  return (
    <div className='Admin'>
      <Form>
        <legend style={{ color: "black" }}>Admin Login</legend>
        <FormGroup floating >
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={HandleAdmin}
            value={Admindata.email}
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
            onChange={HandleAdmin}
            value={Admindata.password}
          />
          <Label for="examplePassword">
            Password
          </Label>
        </FormGroup>
        {' '}
        <Button className='adminlogin' onClick={handleClickAdmin} >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;
