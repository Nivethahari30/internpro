import React from "react";
import "../App.css";



const Filesubmit=()=>{

    const handlefile=(e)=>{
        const file = e.target.files?.[0]; // Use optional chaining to avoid errors
        if(!file){
            console.log("hii")
        }
        else{
            console.log("file")
        }
    }

    return(
        <div>
           
       <div className=" ms-5 mt-5 card  "style={{width:"200px",height:"100px",backgroundColor:"#ADD8E6"}}> 
       <h4 style={{color:"#040348"}}>Upload Your File</h4>
  <input className="mt-3" type="file" onChange={handlefile} />
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  </div>
    )
}
export default Filesubmit;