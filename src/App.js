import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./Component/Registration";
import Price from "./Pages/Price";
import Submit from "./Component/Submit";
import Login from "./Component/Login";
import Filesubmit from "./DashboardPanel/Filesubmit";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const App = () => {
  //check whether the token exist or not, initially set it false after get token the token set it true
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    //set the function for token getand also check the token becoz eventlistener perform in the function
    const Tokenupdate = () => {
      const token = localStorage.getItem("jwt-token");
      setIsAuth(!!token);
    };
    //add event listener for automatically listen the event 
    window.addEventListener("token-update", Tokenupdate);
    return () => {
      // Cleanup the event listener to enhance performance
      window.removeEventListener("token-update", Tokenupdate);
    };
  }, []);

  return (
    <div>
      <div>
        <nav className="  navbar navbar-expand-lg navbar-light "style={{backgroundColor:"#FCFCFF"}}>
        <h3
        className="text-center ms-5"
        style={{ font: "#012970", fontSize: "20px" }}
      >
        <img src="logo.png" alt="" /> Intern Pro
      </h3>
          <ul className="navbar-nav ms-auto d-flex justify-content-flex-end">
            
            <h5>
              <li className="nav-item">
                <Link to="/">Sign in</Link>
                {"  |    "}
              </li>
            </h5>

            <h5>
              <li className="nav-item">
                <Link to="/Login">Log in</Link>
                {"  |  "}
              </li>
            </h5>
            {/* <h5>
              <li className="nav-item">
                <Link to="/Login">Log Out</Link>
                {"    "}
              </li>
            </h5> */}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Filesubmit"
          element={
            localStorage.getItem("jwt-token") ? (
              <Filesubmit />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
      </Routes>
    </div>
  );
};
export default App;
