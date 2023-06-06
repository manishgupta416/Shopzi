import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Sign.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const { signInHandler } = useContext(AuthContext);
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });
  const handleLoginInputs = (e, name) => {
    setUserLoginDetails({ ...userLoginDetails, [name]: e.target.value });
    // console.log(userLoginDetails);
  };

  const handleLogin = () => {
    if (userLoginDetails.email !== "" && userLoginDetails.password !== "") {
      signInHandler(userLoginDetails);
    } else {
      toast.error("Email & Password should not be empty", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleGuestLogin = () => {
    signInHandler({
      email: "manish@gmail.com",
      password: "manishgupta",
    });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="login-card">
          <div className="login-header">
            <h2>Sign In</h2>
          </div>
          <div className="login-items">
            <div className="input-container">
              <label htmlFor="input" className="input">
                Email
              </label>
              <input
                className="login-input"
                type="email"
                name="email"
                onChange={(e) => handleLoginInputs(e, "email")}
              />
            </div>
          </div>
          <div className="login-items">
            {" "}
            <div className="input-container">
              <label htmlFor="input" className="input">
                Password
              </label>
              <input
                className="login-input"
                type="password"
                name="password"
                onChange={(e) => handleLoginInputs(e, "password")}
              />
            </div>
          </div>
          <div className="login-items">
            <button className="login-button" onClick={handleLogin}>
              Login In
            </button>
            <button className="login-button" onClick={handleGuestLogin}>
              Login as Guest
            </button>
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
