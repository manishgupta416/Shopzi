import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="nav">
        <div className="nav-left">
          <NavLink tp="/">
            <h2 className='nav-header'>Shopzi</h2>
          </NavLink>
        </div>
        <div className="search-container">
          <input type="text" placeholder="search products" />
        </div>
        <div className="nav-right">
          <NavLink to="/wishlist">
            <i
              class="fa-sharp fa-regular fa-heart fa-2x"
              style={{ color: " white" }}
            ></i>
          </NavLink>
          <NavLink to="/cart" className="cart">
            {" "}
            <i
              class="fa-solid fa-cart-shopping fa-2x"
              style={{ color: "white" }}
            >
              {" "}
            </i>{" "}
          </NavLink>
          <NavLink to="/user-profile">
            {" "}
            <i class="fa-regular fa-user fa-2x" style={{ color: "white" }}></i>
          </NavLink>
        </div>
      </div>
 
    </>
  )
}

export default Navbar