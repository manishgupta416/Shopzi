import React from "react";
import "./Sign.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2>Sign In</h2>
          </div>
          <div className="login-items">
            <div className="input-container">
              <label htmlFor="input" className="input">
                Email
              </label>
              <input className="login-input" type="email" name="" id="" />
            </div>
          </div>
          <div className="login-items">
            {" "}
            <div className="input-container">
              <label htmlFor="input" className="input">
                Password
              </label>
              <input className="login-input" type="password" name="" id="" />
            </div>
          </div>
          <div className="login-items">
            <button className="login-button">Login In</button>
            <button className="login-button">Login as Guest</button>
            <div className="login-footer">
              <p>Don't have an account ? </p>
              <NavLink className="sign-link" to="/sign-up">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
