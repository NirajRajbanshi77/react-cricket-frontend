import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleRegister = () => {
    // Validate form inputs
    if (!name || !email || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    // Send registration data to the backend
    axios
      .post("http://127.0.0.1:5000/register", { name, email, password })
      .then(() => {
        // Redirect to the home page on successful registration
        navigate("/home");
      })
      .catch((err) => {
        setErrorMessage(err.response?.data?.message || "Registration failed!");
      });
  };

  return (
    <div className="register-page bg-light min-vh-100">
      {/* Navigation Bar */}

      {/* Back Button */}
      <div className="text-center mt-4">
        <a
          href="/"
          className="text-decoration-none text-white bg-dark py-2 px-4 rounded-3"
          style={{ fontSize: "16px" }}
        >
          <i className="bi bi-arrow-left"></i> Back
        </a>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <h3 className="card-title text-center text-primary fw-bold">
                  Register
                </h3>
                <p className="text-center text-muted">
                  Start analyzing your cricket shots today!
                </p>

                {/* Name Input */}
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">
                    <i className="bi bi-person-fill"></i> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email Input */}
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="bi bi-envelope-fill"></i> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Input */}
                <div className="form-group mb-4">
                  <label htmlFor="password" className="form-label">
                    <i className="bi bi-lock-fill"></i> Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div
                    className="alert alert-danger text-center mb-3"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Register Button */}
                <button
                  className="btn btn-primary w-100"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Login Link */}
            <p className="text-center mt-3">
              Already registered?{" "}
              <a
                href="/login"
                className="text-decoration-none text-primary fw-bold"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
