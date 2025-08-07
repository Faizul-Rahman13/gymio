import React from "react";
import { NavLink } from "react-router-dom";

function Topmenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">FitLife</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/classes">Classes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/contact">Contact</NavLink>
              </li>
                <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/signup">Login/Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topmenu;
