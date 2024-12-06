import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleLogin = () => {
    // Validate form inputs
    if (!email || !password) {
      setErrorMessage("Both email and password are required!");
      return;
    }

    // Send login data to the backend
    axios
      .post("http://127.0.0.1:5000/login", { email, password })
      .then(() => {
        // Redirect to the home page on successful login
        navigate("/home");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message || "Login failed!");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center text-uppercase text-danger mb-4">
          Cricket Analytics
        </h2>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger text-center p-2 mb-3">
              {errorMessage}
            </div>
          )}
          <button
            type="button"
            className="btn btn-danger btn-lg w-100 text-uppercase"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
