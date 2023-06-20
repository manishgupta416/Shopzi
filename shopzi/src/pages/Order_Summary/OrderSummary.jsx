import React, { useContext } from "react";
import { AddressContext } from "../../context/AddressContext";

import "./OrderSummary.css";
import Navbar from "../../components/Navbar/Navbar";

const OrderSummary = () => {
  const { orderAddress } = useContext(AddressContext);
  return (
    <div>
      <Navbar />
      <div className="summary-container">
        <h2 className="summary-header">Order Confirmed</h2>
        <div className="summary-main-container">
          {Object.keys(orderAddress).length !== 0 && (
            <div className="summary-left">
              <h5>Payment Id :</h5>
              <h5>Total Amount : </h5>
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
            <div className="ordered-items"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
