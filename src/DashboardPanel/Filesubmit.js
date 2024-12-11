import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Filesubmit = () => {
  const Navigate = useNavigate();
  const removetoken = () => {
    const removetoken = localStorage.removeItem("jwt-token");
    window.dispatchEvent(new Event("token-update")); // Notify the app

    console.log(removetoken);
    // alert("logout successfully");
    window.dispatchEvent(new Event("token-update"));

    Navigate("/Login");
  };

  const handlefile = (e) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid errors
    if (!file) {
      console.log("file is not exist ");
    } else {
      console.log("file is here only");
    }
  };

  return (
    <div>

        <header>
            <h4>intern Pro</h4>
        </header>
      <div
        className=" ms-5 mt-5 card  "
        style={{ width: "200px", height: "100px", backgroundColor: "#ADD8E6" }}
      >
        <h4 style={{ color: "#040348" }}>Upload Your File</h4>
        <input className="mt-3" type="file" onChange={handlefile} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <div className="mt-2 ms-5">
        <button className="btn btn-primary" onClick={removetoken}>
          Log out
        </button>
      </div>
    </div>
  );
};
export default Filesubmit;
