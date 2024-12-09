import React from "react";
import { useContext } from "react";
import { UserRegContext } from "../Context/UserRegContext";
import { useNavigate } from "react-router-dom";

const Price = () => {
  const { savePlan } = useContext(UserRegContext);
  const Navigate=useNavigate();


  const handlePlan = (Plan) => {
    console.log(Plan, "user selected plan");
    savePlan(Plan);
    Navigate("/Submit");
  };
  

 

  return (
    <div>
      <h1 className="text-center mt-5">
        Elevate Your Experience With InternPro Premimum
      </h1>
      <h5 className="text-center mt-3">
        Unlock Exclusive Features And Prioritize Your Support
      </h5>
      <div className="row mt-5 ms-3 me-3">
        {/* Free Card */}
        <div className="col-4 ">
          <div
            className="card ms-3 me-3 "
            style={{ backgroundColor: "#DFF6EC" }}
          >
            <div className="card-body">
              <h4 className="card-title">Free</h4>
              expires in 24 hours
              <ul className="mt-2">
                <li>Max File Size:5MB</li>
                <li>OCR Support:Yes</li>
                <li>Customer Support:No</li>
                <li>Total Sessions:Limited</li>
              </ul>
              <button
                className="btn btn-primary mt-3 "
                style={{ width: "100%" }}
                onClick={() => {
                  handlePlan("Free");
                }}
              >
                Start Free Trail
              </button>
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="col-4 ">
          <div className="card ms-3 me-3">
            <div className="card-body " style={{ backgroundColor: "#DFF6EC" }}>
              <h4 className="card-title">Pro</h4>
              Rs.999/- per Month
              <ul className="mt-2">
                <li>Max File Size:5MB</li>
                <li>OCR Support:Yes</li>
                <li>Customer Support:Yes</li>
                <li>Total Sessions:UnLimited</li>
              </ul>
              <button
                className="btn btn-primary mt-3 "
                style={{ width: "100%" }}
                onClick={() => {
                  handlePlan("Pro");
                }}
              >
                Select Plan
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Card */}
        <div className="col-4 ">
          <div
            className="card ms-3 me-3 "
            style={{ backgroundColor: "#DFF6EC" }}
          >
            <div className="card-body">
              <h4 className="card-title">Advanced</h4>
              Rs.3499/- Per Year
              <ul className="mt-2">
                <li>Max File Size:5MB</li>
                <li>OCR Support:Yes</li>
                <li>Customer Support:Yes</li>
                <li>Total Sessions:UnLimited</li>
              </ul>
              <button
                className="btn btn-primary mt-3 "
                style={{ width: "100%" }}
                onClick={() => {
                  handlePlan("Advanced");
                }}
              >
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price;
