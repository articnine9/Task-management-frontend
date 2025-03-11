import Login from './components/component1/Login'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AdminLogin from './components/component2/AdminLogin';
import UserLogin from './components/component3/UserLogin';
import AdminHome from './components/component2/AdminHome'
import UserReg from './components/component3/UserReg';
import UserHome from './components/component3/UserHome'
import ViewProjects from './components/component2/ViewProjects';
import ViewEmployees from './components/component2/ViewEmployees';
import AddProject from './components/component2/AddProject';
import Logout from './components/component2/Logout';
import UserProject from './components/component3/UserProject';


const App=()=>{
 
  return(
    <>
    {/* <Login/> */}
    <BrowserRouter>
    
    
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/AdminLogin' element={<AdminLogin/>}/>
      <Route path='/UserLogin' element={<UserLogin/>}/>
      <Route path='/AdminHome' element={<AdminHome/>}/>
      <Route path='/UserReg' element={<UserReg/>}/>
      <Route path='/UserHome' element={<UserHome/>}/>
      <Route path='/ViewProjects' element={<ViewProjects/>}/>
      <Route path='/ViewEmployees' element={<ViewEmployees/>}/>
      <Route path='/AddProject' element={<AddProject/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/UserProject' element={<UserProject/>}/>
      
    </Routes>

    
   
   
    </BrowserRouter>
    </>
  )
}
export default App