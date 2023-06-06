import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <h2>Sign Up </h2>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Name</label>
              <input className="signup-inputs" type="text" />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Email</label>
              <input className="signup-inputs" type="email" />
            </div>
          </div>

          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Password</label>
              <input className="signup-inputs" type="password" />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Confirm Password</label>
              <input className="signup-inputs" type="password" />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <button className="signup-btn">Create new account</button>
              <div className="signup-footer">
                <p>Already have an account? </p>
                <div className="signin">
                  <NavLink className="sign-in" to="/sign-in">
                    Sign In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default SignUp;
