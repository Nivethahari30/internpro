import React from "react";
import { useContext } from "react";
import { UserRegContext } from "../Context/UserRegContext";
import { useEffect,useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import axios from "axios";
const Submit = () => {

  const FullDatatUrl="http://localhost:9000/Registration";

  const { UserContext,SaveUserPlan,UserFullData } = useContext(UserRegContext);
   const Navigate=useNavigate()
   const[UserSavedData,setUserSavedData,]=useState("")

   useEffect(() => {
    const saveData = async () => {
      try {
        console.log("UserContext:", UserContext);
        console.log("Plan:", SaveUserPlan);
        console.log("UserFullData:", UserFullData);
  
        // Directly use UserFullData instead of UserSavedData
        if (UserFullData) {
          const response = await axios.post(FullDatatUrl, UserFullData);
          console.log("Data saved in database:", response.data);
        } else {
          console.warn("UserFullData is undefined, skipping API call.");
        }
      } catch (e) {
        console.error("Error saving data:", e);
      }
    };
  
    saveData(); // Call the async function
  
  }, [UserContext, SaveUserPlan, UserFullData]); // Dependencies
  

  const handlesubmit = () => {
    console.log(
      "Your Details are successfully saved in Submit Page So dont worry about that login for use this app"
    );
   Navigate("/Login")
     // save logic for combine the userlist object and plan into one object USED FOR ONLOADING

  

  };
  return (
    <div className="row ">
      <div className="col-12 d-flex justify-content-center align-items-center mt-5">
        <button className="btn btn-primary " onClick={handlesubmit}>
          Login
        </button>
        </div>
        <div className=" col-12 d-flex justify-content-center align-items-center mt-3">
        <h5 style={{font:"#012970"}}> Successfully Registered Welcome to Intern Pro</h5>
       
       
      </div>
    </div>
  );
};
export default Submit;
