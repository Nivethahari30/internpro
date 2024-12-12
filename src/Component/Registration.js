import React from "react";
import "../App.css";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import {UserRegContext} from '../Context/UserRegContext';

const Registration = () => {


  // handle inputchange data stored into object
  const [userList, setUserList] = useState({
    name: "",
    email: "",
    Password: "",
  });
  //get the saveuserreg for user filling details save after the plan select
  const {SaveUserReg}=useContext(UserRegContext);

  

  // Email already exists error saving
  const [EmailError, setEmailError] = useState("");

  // checkbox field checking
  const [termschecked, setTermsChecked] = useState("");
  // Field doesnot fill saving error for tick
  const [checkError, setCheckError] = useState("");
// Password error
  const [passwordError,setPasswordError]=useState("");


// Field datas stored in e
  const handleinputchange = (e) => {
    //new method for saving user data
    setUserList((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
      
    });
// email doesnot exist leave it
    if (e.target.value === "email") {
      setEmailError("");
    }

    // Password minimum 8char
   if(e.target.name==="Password" && e.target.value.minLength>8){
    setPasswordError("");
   
   }
    
   
  };
  // check whether the checkbox is filled or not 
  const handlechecked = (e) => {
    setTermsChecked(e.target.checked);
    if (e.target.checked) {
      setCheckError("");
    }
  };

  const Navigate=useNavigate();

  // url for post method it only checks the data didnot save and email already exists
  const Url = "http://localhost:9000/Registration/validation";


  const handlesubmit = async () => {
    const { name, email, Password } = userList;

    //any fields it empty send the alert
    if(!name||!email||!Password){
      alert("please fill the details")
    }
    // before saving check whether the checkbox is filled or not
    if (!termschecked) {
      setCheckError("You must accept the terms and conditions");
      return;
    }
    //checks the password length
    if (userList.Password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }
    
  
    try {
      const response = await axios.post(Url, userList);
      const resp = response.data;
      console.log(resp, " database message");
  
      const respstatus = response.status;
      if (respstatus === 200 ) {
        setEmailError("Email already exists");
        console.log(EmailError,"email already exists");
        return;
      } 
       else {
        SaveUserReg(userList)
        Navigate('/Price');
      }
  
      // Reset all datas
      setUserList({
        name: "",
        email: "",
        Password: "",
      });
      setTermsChecked("");
      setEmailError("");
      setCheckError("");
  
      
    } catch (e) {
      console.log("Error:", e);
      alert("An error occurred. Please try again later.");
    }
  
  
}
  
  return (
    <div>
      <h3
        className="text-center mt-5"
        style={{ font: "#012970", fontSize: "20px" }}
      >
        <img src="logo.png" alt="" /> Intern Pro
      </h3>
      <div
        className="container-fluid d-flex justify-content-center align-items-center  "
        style={{ width: "50%" }}
      >
        <div
          className="col-md-6 col-4  p-4 rounded text-center bg-white border-radius-5px"
          style={{ boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)" }}
        >
          <h6 style={{ font: "#012970" }}>Create Your Account</h6>
          <p>Enter Your Details</p>

          {/* Name Field */}
          <div className="mb-3 text-start mt-3">
            <label htmlFor="nameInput" className="form-label">
              Your Name
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={userList.name}
              required
              onChange={handleinputchange}
              id="exampleFormControlInput1"
            />
          </div>

          {/* Email Field */}
          <div className="mb-3 text-start mt-3">
            <label htmlFor="nameInput" className="form-label">
              Your Email
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              required
              value={userList.email}
              onChange={handleinputchange}
            />

            {/* Email Error */}
            {EmailError &&(
              <div className="text-danger "style={{font:"12px",}}>{EmailError}</div>
            )}
            
          
          </div>



          {/* Password Field */}
          <div className="mb-3 text-start mt-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control "
              name="Password"
              required
              minLength={8}
              value={userList.Password}
              onChange={handleinputchange}
             
            />
            {passwordError &&(
              <div className="text-danger "style={{font:"12px",}}>{passwordError}</div>
            )}
            
          </div>

          {/* Checkbox */}
          <div className="form-check text-start">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              required
              checked={termschecked}
              onChange={handlechecked}
            />

            <label className="form-check-label " htmlFor="termsCheckbox">
              I agree and accept the{" "}
              <span className="text-primary">terms and conditions</span>


              {/* Checkbox Error */}
              {checkError && !termschecked && (
              <div className="text-danger" style={{ font: "2px" }}>
                {" "}
                {checkError}
              </div>
            )}
            </label>
           
          </div>

          {/* Create Button Field */}
          <button
            type="button"
            style={{
              width: "100%", // Makes the button take up the full width of its container
            }}
            className="btn btn-outline-primary"
            onClick={handlesubmit}
          >
            Create Account
          </button>
 
          {/*Already a/c */}
          <p className="text-start mt-2">Already have an account?</p>
          {/* Login */}
          <p style={{ boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)" }}>
          <Link to="/login" >Login</Link>          </p>
        </div>
      </div>
    </div>
  );
};
export default Registration;
