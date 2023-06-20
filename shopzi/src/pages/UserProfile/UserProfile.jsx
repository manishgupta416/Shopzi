import React, { useContext, useState } from "react";
import "./UserProfile.css";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import Address from "../Address/Address";

const UserProfile = () => {
  const { currentUser, logoutHandler } = useContext(AuthContext);
  console.log("curr", currentUser);
  const [showDetails, setShowDetails] = useState(false);
  const showProfile = (tabName) => {
    setShowDetails(tabName);
  };
  const showAddress = (tabName) => {
    setShowDetails(tabName);
  };
  return (
    <>
      <Navbar />
      <div className="main-profile">
        <div className="profile-tabs">
          <button onClick={() => showProfile("profile")}>Profile</button>
          <button onClick={() => showAddress("address")}>Address</button>
        </div>
        {showDetails === "profile" ? (
          <div className="profile-container">
            <div className="profile-items">
              <div className="profile-details">
                <div className="profile-name">
                  <label htmlFor="">Name : </label>
                  <h2>
                    {currentUser?.firstName} {currentUser?.lastName}
                  </h2>
                </div>
                <div className="profile-email">
                  <label htmlFor="">Email : </label>
                  <h2> {currentUser?.email} </h2>
                </div>
              </div>
            </div>
            <div className="profile-items">
              <div className="profile-status">
                <button className="logout-btn" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="address-container">
            <Address />
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
