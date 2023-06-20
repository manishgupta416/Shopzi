import React from "react";
import { useNavigate } from "react-router-dom";

import notFound from "../assets/notFound.svg";

import "./404.css";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-Found-container">
      <h2>Sorry, Page not found!</h2>
      <img className="notFound-img" src={notFound} alt="Page Not Found" />
      <button className="not-found-btn" onClick={() => navigate("/")}>
        Go to Homepage
      </button>
    </div>
  );
};

export default PageNotFound;
