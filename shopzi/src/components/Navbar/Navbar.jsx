import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { ProductContext } from "../../context/ProductContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { loginToken } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <NavLink to="/">
            <h2 className="nav-header">Shopzi</h2>
          </NavLink>
        </div>
        <div
          className="search-container"
          onClick={() => navigate("/productlist-page")}
        >
          <input
            onChange={(e) => {
              dispatch({
                type: "search",
                payload: e.target.value.toLowerCase(),
              });
              // navigate("/productlist-page");
            }}
            type="text"
            placeholder="search products"
          />
        </div>
        <div className="nav-right">
          <NavLink to="/productlist-page">
            <i class="fa-solid fa-store fa-2x" style={{ color: " white" }}></i>
          </NavLink>

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
          <NavLink to="/sign-in" className="login-btn">
            {loginToken ? (
              <i
                className="fa-regular fa-user fa-2x"
                style={{ color: "white" }}
              ></i>
            ) : (
              "Login"
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
