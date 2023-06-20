import React, { useContext } from "react";
import { AddressContext } from "../../context/AddressContext";

import "./OrderSummary.css";
import Navbar from "../../components/Navbar/Navbar";
import { CartContext } from "../../context/CartContext";

const OrderSummary = () => {
  const { orderAddress, orderResponseDetails } = useContext(AddressContext);
  const { cartState, TotalFinalPrice } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      {orderResponseDetails && (
        <div className="summary-container">
          <h2 className="summary-header">Your order has successfully placed</h2>
          <div className="summary-main-container">
            {Object.keys(orderAddress).length !== 0 && (
              <div className="summary-left">
                <h5>Payment Id :{orderResponseDetails.id}</h5>
                <h5>Total Amount Paid: {TotalFinalPrice}</h5>
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
              </div>
            )}
            <div className="summary-right">
              <div className="ordered-items">
                {cartState.cart.length !== 0 && (
                  <div className="product-list">
                    {cartState.cart.map((product) => {
                      const {
                        _id,
                        title,
                        image,
                        rating,
                        size,
                        price,
                        original_price,
                        in_stock,
                        review,
                        discount,
                        qty,
                      } = product;
                      return (
                        <div className="cart-card">
                          <div className="img-container">
                            <img className="cart-img" src={image} alt="img" />
                          </div>
                          <div className="product-details">
                            <div className="product-heading">
                              <h3>{title}</h3>
                            </div>
                            <div className="product-price">
                              <h4>₹{price}</h4>{" "}
                              <h5
                                style={{
                                  textDecoration: "line-through",
                                  color: "gray",
                                }}
                              >
                                ₹{original_price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
