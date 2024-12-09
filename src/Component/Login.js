import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const[LoginData,setLoginData]=useState({
    email:"",
    Password:""
  })
const Navigate=useNavigate();
  const handleinputchange=(e)=>{
    setLoginData((preData)=>{
      return{
        ...preData,
        [e.target.name]:e.target.value
      }
    })
  }
  const Loginurl = "http://localhost:9000/Login/UserValidation";
  // const Navigate=useNavigate();
  const handlelogin = async () => {
    try {
      const response = await axios.post(Loginurl, LoginData);
      const { status, token, message } = response.data;
  
      if (status ==="success") {
        // Navigate to Dashboard on successful login
        console.log("status:", status);
        console.log("token",token)
       localStorage.setItem("jwt-token",token);
      //  const jwttoken=localStorage.getItem("jwt-token")
      // if(jwttoken===token){
      //   alert("jwt store in localstorage")
      // }
        
        Navigate("/Filesubmit");
      } else {
        // Handle invalid credentials
        alert(message || "Login failed. Please try again.");
        console.log("error")
      }
    } catch (e) {
      // Handle server errors
      console.error(e);
      alert("An error occurred while logging in. Please try again later.",e);
    }
   
    
  };

  return (
    <div>
      <h3
        className="text-center mt-5"
        style={{ font: "#012970", fontSize: "20px" }}
      >
        <img src="logo.png" alt="" /> Intern Pro
      </h3>
      <div
        className="container-fluid d-flex justify-content-center align-items-center   "
        style={{ width: "50%" }}
      >
        <div
          className="col-md-6 col-4  p-4 rounded text-center bg-white border-radius-5px"
          style={{ boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)" }}
        >
          <h6 style={{ font: "#012970" }}>Login Your Account</h6>
          <p>Enter Your Email and Password</p>

          {/* Email Field */}
          <div className="mb-3 text-start mt-3">
            <label htmlFor="nameInput" className="form-label">
              Your Email
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="@Email Address"
              onChange={handleinputchange}
              
              required
            />

            {/* Email Error */}
          </div>

          {/* Password Field */}
          <div className="mb-3 text-start mt-3">
            <label htmlFor="PasswordInput" className="form-label">
              Password
            </label>

            <input
              type="Password"
              className="form-control "
              name="Password"
              required
              placeholder=" Enter your Password"
              onChange={handleinputchange}

            />
            <button
              className="btn btn-primary mt-3 "
              onClick={handlelogin}
              style={{ width: "100%" }}
            >
              Login
            </button>
          </div>
          {/*Already a/c */}
          <p className="text-start mt-2">Dont have an Account?</p>
          {/* Login */}
          <p style={{ boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)" }}>
            <Link to="/">Create Account</Link>{" "}
          </p>
          
        </div>
      </div>
    </div>
  );
};
export default Login;
