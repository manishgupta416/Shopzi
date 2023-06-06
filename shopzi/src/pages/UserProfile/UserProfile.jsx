import React from "react";
import "./UserProfile.css";
import Navbar from "../../components/Navbar/Navbar";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className="main-profile">
        <div className="profile-container">
          <div className="profile-items">
            <div className="profile-details">
              <div className="profile-name">
                <label htmlFor="">Name : </label>
                <h2>Manish Gupta</h2>
              </div>
              <div className="profile-email">
                <label htmlFor="">Email : </label>
                <h2>Manish@gmail.com</h2>
              </div>
            </div>
          </div>
          <div className="profile-items">
            <div className="profile-status">
              <button className="logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
