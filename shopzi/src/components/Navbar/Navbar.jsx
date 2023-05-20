import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { ProductContext } from "../../context/ProductContext";

const Navbar = () => {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <NavLink tp="/">
            <h2 className="nav-header">Shopzi</h2>
          </NavLink>
        </div>
        <div className="search-container">
          <input
            onChange={(e) =>
              dispatch({
                type: "search",
                payload: e.target.value.toLowerCase(),
              })
            }
            type="text"
            placeholder="search products"
          />
        </div>
        <div className="nav-right">
          <NavLink to="/wishlist">
            <i
              className="fa-sharp fa-regular fa-heart fa-2x"
              style={{ color: " white" }}
            ></i>
          </NavLink>
          <NavLink to="/cart" className="cart">
            {" "}
            <i
              className="fa-solid fa-cart-shopping fa-2x"
              style={{ color: "white" }}
            >
              {" "}
            </i>{" "}
          </NavLink>
          <NavLink to="/user-profile">
            {" "}
            <i className="fa-regular fa-user fa-2x" style={{ color: "white" }}></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
