// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const LandingPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Function to navigate to the login or register page
  const redirectTo = (page) => {
    navigate(`/${page}`); // Use navigate to redirect to the respective page
  };

  return (
    <div
      className="landing-page"
      style={{
        background: "linear-gradient(45deg, #ff6f61, #ffcc00, #009688, #3f51b5)", // Multi-color sporty gradient
        minHeight: "100vh", // Ensures full height of the viewport
        color: "white",
      }}
    >
      {/* Header Section */}
      <div className="container text-center d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div>
          <h1 className="display-4 fw-bold mb-4 text-shadow">
            Cricket Analytics & Guide
          </h1>
          <p className="lead mb-4 text-shadow">
            Enhance your cricket skills with AI-powered shot analysis and personalized feedback.
          </p>

          {/* Authentication Options: Login and Register Buttons */}
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-4 text-center">
                {/* Login Button */}
                <button
                  className="btn btn-outline-light btn-block mb-3 w-100 shadow-lg rounded-pill"
                  onClick={() => redirectTo("login")}
                >
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </button>
                {/* Register Button */}
                <button
                  className="btn btn-outline-warning btn-block w-100 shadow-lg rounded-pill"
                  onClick={() => redirectTo("register")}
                >
                  <i className="bi bi-person-plus-fill"></i> Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
