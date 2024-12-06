// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink to highlight active link
import '../styles/Navbar.css'; // Custom styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-3">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center ms-3" href="/home">
          <span className="fs-3">Cricket Analytics</span>
        </a>

        {/* Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link fs-5" 
                to="/home" 
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link fs-5" 
                to="/analyze" 
                activeClassName="active"
              >
                Analyze
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link fs-5" 
                to="/guide" 
                activeClassName="active"
              >
                Cricknowledge
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
