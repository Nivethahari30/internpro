import React from "react";
import { useState}from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Ansdis = () => {
  
  const [Answer, setAnswers] = useState(["Answers"]);
  const AnswersRef=useRef(null)
  const handleAns = () => {
    setAnswers((prevdata) => {
      return [...prevdata, `Answer ${prevdata.length + 1}`];
    });
  };
  useEffect(() => {
    if (AnswersRef.current) {
      AnswersRef.current.scrollTop = AnswersRef.current.scrollHeight;
    }
  }, [Answer]);
  
  return (
    <div>
      {/* Display Container */}
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div ref={AnswersRef}
          style={{
            height: "120px",
            
            overflowY: "auto",
            width: "50%",
            backgroundColor: "white",
            boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)",
            padding: "10px",
          }}
        >
          <p
            className="mt-3 ms-2 me-2 "
            style={{
              backgroundColor: "skyblue",
              height: "40px",
              lineHeight: "40px",
              textAlign: "right",
              margin: "0",
              padding: "0 10px",
              fontWeight: "bold",
            }}
          >
            Welcome, Your answers will be displayed here 😊
          </p>
          {Answer.map((data, i) => {
            return <p key={i}>{data}</p>;
          })}
        </div>
      </div>

      {/* Question Input Container */}
      <div
        className="container mt-5 d-flex justify-content-center align-items-center"
        style={{
          height: "auto",
          width: "50%",
          backgroundColor: "white",
          boxShadow: "0px 0 30px rgba(1, 41, 112, 0.1)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <div style={{ width: "100%" }}>
          <h6
            className="text-center"
            style={{
              color: "#012970",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            Ask Your Questions
          </h6>
          <input
            type="text"
            placeholder="Type your question here..."
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            className="mt-2"
          />
          <button
            style={{ width: "100%" }}
            className="btn btn-primary mt-2"
            onClick={handleAns}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ansdis;
