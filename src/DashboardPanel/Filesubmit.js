import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ansdis from "./Ansdis";

const Filesubmit = () => {
  const Navigate = useNavigate();
  const [UploadFile, setUploadFile] = useState(null);
  const [fileError, setError] = useState(null);

  //when logout condition to remove the token from localstorage
  const removetoken = () => {
    localStorage.removeItem("jwt-token");
    window.dispatchEvent(new Event("token-update")); // Notify the app if the event is happen

    console.log(removetoken);
    window.dispatchEvent(new Event("token-update")); //after remove token also we have to give the event for enhance performance

    Navigate("/Login");
  };
  const AllowTypes = [
    "application/pdf",
    "application/doc",
    "application/docx",
    "image/png",
    "image/jpeg",
  ]; //allowing types of files
  const Maxsize = 5 * 1024 * 1024; //maxmum size of file
//onchangemwe have to save the files and checks the conditions
  const handlefile = (e) => {
    const file = e.target.files[0];
    console.log(file); 
    if (file) {
      if(!AllowTypes.includes(file.type)){
        setError("Only docx, pdf, jpeg, png are allowed")
      }
      else if (file.size > Maxsize) {
        setError("File size exceeds the maximum limit of 5MB");
      }
     
    }
      
      
    setUploadFile(file);
    
   
  };

  return (
    (
      <div>
        {/* Header Section */}
        <header
          className="ms-5 mt-5 card text-center"
          style={{
            width: "200px",
            backgroundColor: "white",
            boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)",
            fontSize: "20px",
          }}
        >
          <h4 style={{ color: "#040348", textDecoration: "underline" }}>
            Upload Your File
          </h4>
          <input
            className="mt-2"
            type="file"
            aria-label="Upload your file"
            onChange={handlefile}
          />
          {fileError && <p style={{ color: "red" }}>{fileError}</p>}
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={!UploadFile}
          >
            Submit
          </button>
        </header>
  
        {/* Logout Section */}
        <div className="mt-5 ms-5">
          <button className="btn btn-primary" onClick={removetoken}>
            Log out
          </button>
        </div>
  <body> {/* Ansdis Component */}
  <Ansdis /></body>
       
      </div>
   ) );
  };
  
  export default Filesubmit;
  