import './App.css';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Route,Routes,Link } from 'react-router-dom';

import Registration from "./Component/Registration";
import Price from './Pages/Price';
import Submit from './Component/Submit';
import Login from './Component/Login';
import Filesubmit from "./DashboardPanel/Filesubmit"
import { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';


// import"./Component/Registration.css";


const App=()=>{
  const[isAuth,setIsAuth]=useState(false);
  useEffect(()=>{
    const token=localStorage.getItem("jwt-token");
    if(token){
      setIsAuth(token!==null);
      console.log("hii")
      return;
    }
    
  },[])
  
  return(
   <div>
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle ">
          <ul className="navbar-nav ms-auto">
          
          
             
           
            <h5><li className="nav-item">
            <Link to="/">Sign in</Link>
            {"  |    "}</li></h5>

           <h5><li className="nav-item">
            <Link to="/Login">Log in</Link>
            {"    "}
          </li></h5> 
           
            
          </ul>
        </nav>
      </div>
    {/* <Registration/> */}
    <Routes>
  <Route path='/'element={<Registration/>}/>
  <Route path='/Price'element={<Price/>}/>
  <Route path="/Submit"element={<Submit/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Filesubmit" element={isAuth ? <Filesubmit/> : <Navigate to ="/Login"/>}/>
</Routes>

    </div>


  );
    

    
};
export default App;