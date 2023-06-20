import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import Address from "../Address/Address";
import { AddressContext } from "../../context/AddressContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartState, totalPrice, discountPrice, TotalFinalPrice } =
    useContext(CartContext);
  const { orderAddress, handleOrderAddress } = useContext(AddressContext);

  console.log(orderAddress);
  const { addressData } = useContext(AddressContext);
  const handlePayment = () => {
    if (Object.keys(orderAddress).length === 0) {
      alert("j");
    }
  };
  return (
    <>
      <Navbar />
      <div className="checkout-main-container">
        <h1>Checkout</h1>
        <div className="checkout-container">
          <div className="">
            {" "}
            {addressData.length === 0 && (
              <button
                onClick={() => navigate("/user-profile")}
                className="cart-button"
              >
                Add Address
              </button>
            )}
            {addressData?.map((addressDetails) => {
              const {
                id,
                name,
                street,
                city,
                state,
                country,
                pinCode,
                mobile,
              } = addressDetails;
              return (
                <div className="address-container">
                  <label htmlFor="radio">
                    <input
                      type="radio"
                      name="radio"
                      className="address-radio-btn"
                      checked={orderAddress.id === id}
                      onChange={() => handleOrderAddress(addressDetails)}
                    />
                    <strong>{name}</strong>
                  </label>
                  <div className="address-details-checkout">
                    <p>
                      {street}, {city},{state}. {pinCode}
                    </p>
                    <p>{country}.</p>
                    <p>Mobile Number : {mobile}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-details">
            {" "}
            <div className="price-card">
              <div className="price-items ">
                <div className="price">
                  <h1>Price Details </h1>
                </div>{" "}
              </div>
              <div className="hr">
                <hr />
              </div>
              <div className="price-items">
                <div className="product-price row-items">
                  <p>Price ({cartState.cart.length}items): </p>
                  <h3>₹{totalPrice}</h3>
                </div>
              </div>
              <div className="price-items">
                <div className="discount-price row-items">
                  <p>Discount</p>
                  <h3>₹{discountPrice}</h3>
                </div>
              </div>
              <div className="price-items">
                <div className="delivery-charges row-items">
                  <p>Delivery charges</p>
                  <h3>Free</h3>
                </div>
              </div>
              <div className="price-items">
                <div className="total-price row-items">
                  <p>Total price</p>
                  <h3>₹{TotalFinalPrice}</h3>{" "}
                </div>
              </div>
              <div className="hr">
                <hr />
              </div>
              <div className="price-items">
                <p>
                  You will save <b>₹{discountPrice}</b> on this order
                </p>
              </div>
              {Object.keys(orderAddress).length !== 0 && (
                <div className="deliver-details">
                  <h4>Deliver to</h4>
                  <strong>{orderAddress?.name}</strong>{" "}
                  <div className="address-details-checkout">
                    <p>
                      {orderAddress?.street}, {orderAddress?.city},
                      {orderAddress?.state}. {orderAddress?.pinCode}
                    </p>
                    <p>{orderAddress.country}.</p>
                    <p>Mobile Number : {orderAddress?.mobile}</p>
                  </div>
                </div>
              )}
              <button
                // onClick={() => navigate("/checkout")}
                onClick={handlePayment}
                className="cart-button"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
