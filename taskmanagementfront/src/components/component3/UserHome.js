import React, { useEffect } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { MdOutlineAddTask } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const UserHome = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(location.pathname === '/UserHome'){
      navigate('/UserProject')
    }
  },[location,navigate])
  
  return (
    <>
      <div className='userhead'>
        <div className='userhead1'>
          <h1><MdOutlineAddTask /> Task Management System</h1>
        </div>
        <div className='userhead2'>
          <Nav>
            <li>
              <NavItem>
                <NavLink to='/UserProject'
                  active href="#" style={{ textDecoration: "none", color: " tomato" }}>
                  My Projects
                </NavLink>
              </NavItem></li>
            <li>
              <NavItem>
                <NavLink to='/' href="#" style={{ textDecoration: "none", color: " tomato" }}>
                  LogOut
                </NavLink>
              </NavItem>
            </li>
          </Nav>
        </div>
      </div>

      <div className='home-content'>
        <div className='home-cnt'>
          <p></p>
        </div>
        <div className='home-pic'>

        </div>
      </div>
      <div className='home-content'>
        <div className='home-cnt'>
          <p></p>
        </div>
        <div className='home-pic'></div>
      </div>
      <div className='home-content'>
        <div className='home-cnt'>
          <p></p>
        </div>
        <div className='home-pic'></div>
      </div>
    </>
  )
}

export default UserHome
