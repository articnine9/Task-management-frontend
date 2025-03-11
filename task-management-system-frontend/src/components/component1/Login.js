
// import { Link } from "react-router-dom"
import React, { useState } from 'react';
import LoginCss from '../component1/Login.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { MdOutlineAddTask } from "react-icons/md";
const Login = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
 
  
  return (
    <>
      <body>
        <div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </body>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <MdOutlineAddTask />  Task Management System
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/AdminLogin">Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/UserLogin">
                User
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='content'>
        <div className='content1'>
          <legend style={{color : "black"}}>Welcome To Task Management System</legend>
          <p>With intuitive features and user-friendly interface, our Task Management System simplifies the complex process of handling tasks. Whether you're juggling multiple projects, coordinating team efforts, or managing personal objectives, our platform provides the structure and flexibility you need to succeed.

            From creating tasks and setting deadlines to monitoring milestones and collaborating with colleagues, our system facilitates smooth communication and fosters accountability. Say goodbye to scattered to-do lists and missed deadlines—welcome to a centralized hub where tasks are managed with precision and clarity.</p>
        </div>
        <div className='image'>
          
        </div>
      </div>
    </>
  )
}
export default Login
