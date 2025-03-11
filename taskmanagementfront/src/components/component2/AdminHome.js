import React, { useState, useEffect } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { MdOutlineAddTask } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


const AdminHome = () => {
  
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/AdminHome') {
      navigate('/ViewProjects')
    }
  }, [location, navigate])

 

  return (
    <>
      <div className='homehead'>
        <div className='homehead1'>
          <h1><MdOutlineAddTask /> Task Management System</h1>
        </div>
        <div className='homehead2'>
          <Nav>
            <li>
              <NavItem>
                <NavLink to='/ViewProjects' style={{ textDecoration: 'none' }}>
                  View All Projects
                </NavLink>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <NavLink to='/AddProject' style={{ textDecoration: 'none' }}>
                  Add Project
                </NavLink>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <NavLink to='/ViewEmployees' style={{ textDecoration: 'none' }}>
                  View All Employees
                </NavLink>
              </NavItem>
            </li>
            <li>
              <NavItem>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                  LogOut
                </NavLink>
              </NavItem>
            </li>
          </Nav>
        </div>
      </div>
     
    </>
  )
}

export default AdminHome

