import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./SignUp.css";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const { signUpHandler } = useContext(AuthContext);

  const [userSignupDetails, setUserSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUpInputs = (e, name) => {
    setUserSignupDetails({ ...userSignupDetails, [name]: e.target.value });
    // console.log(userSignupDetails);
  };

  const handleSignUp = () => {
    if (
      (userSignupDetails.firstName !== "" && userSignupDetails.lastName !== "",
      userSignupDetails.email !== "",
      userSignupDetails.password !== "",
      userSignupDetails.confirmPassword !== "" &&
        userSignupDetails.password === userSignupDetails.confirmPassword)
    ) {
      signUpHandler(userSignupDetails);
    } else {
      //   alert("all input field should not be empty and password should match ");
      toast.error(
        "All input fields should not be empty and both password should match",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
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
        <div className="signup-card">
          <div className="signup-header">
            <h2>Sign Up </h2>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">First Name</label>
              <input
                className="signup-inputs"
                type="text"
                name="firstName"
                onChange={(e) => handleSignUpInputs(e, "firstName")}
              />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Last Name</label>
              <input
                className="signup-inputs"
                type="text"
                name="lastName"
                onChange={(e) => handleSignUpInputs(e, "lastName")}
              />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Email</label>
              <input
                className="signup-inputs"
                type="email"
                name="email"
                onChange={(e) => handleSignUpInputs(e, "email")}
              />
            </div>
          </div>

          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Password</label>
              <input
                className="signup-inputs"
                type="password"
                name="password"
                onChange={(e) => handleSignUpInputs(e, "password")}
              />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <label htmlFor="">Confirm Password</label>
              <input
                className="signup-inputs"
                type="password"
                name="confirmPassword"
                onChange={(e) => handleSignUpInputs(e, "confirmPassword")}
              />
            </div>
          </div>
          <div className="signup-items">
            <div className="signup-input-container">
              <button className="signup-btn" onClick={handleSignUp}>
                Create new account
              </button>
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
