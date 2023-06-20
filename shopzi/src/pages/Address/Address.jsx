import React, { useContext, useState } from "react";

import "./Address.css";
import { AddressContext } from "../../context/AddressContext";

const Address = () => {
  const {
    addressData,
    addressForm,
    handleAddressInputs,
    addAddress,
    handleReset,
    handleDummyData,
    handleDelete,
    isOpen,
    handleButtonClick,
    handleCloseDialog,
    handleEditAddress,
    updateHandler,
    updateButton,
  } = useContext(AddressContext);

  return (
    <div className="main-address-container">
      {isOpen && (
        <div className="address-container">
          <div className="address-items">
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                name="name"
                value={addressForm.name}
                placeholder="Enter Name"
                onChange={(e) => handleAddressInputs(e, "name")}
              />
            </div>
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                name="street"
                value={addressForm.street}
                placeholder="Enter House No, Street, Colony"
                onChange={(e) => handleAddressInputs(e, "street")}
              />
            </div>
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                name="city"
                value={addressForm.city}
                placeholder="Enter City"
                onChange={(e) => handleAddressInputs(e, "city")}
              />
            </div>
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                placeholder="Enter State"
                value={addressForm.state}
                name="state"
                onChange={(e) => handleAddressInputs(e, "state")}
              />
            </div>
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                placeholder="Enter Country "
                name="country"
                value={addressForm.country}
                onChange={(e) => handleAddressInputs(e, "country")}
              />
            </div>
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                name="pinCode"
                placeholder="Enter PinCode "
                value={addressForm.pinCode}
                onChange={(e) => handleAddressInputs(e, "pinCode")}
              />
            </div>
            <div className="address-input-container">
              <input
                className="address-input"
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number "
                value={addressForm.mobile}
                onChange={(e) => handleAddressInputs(e, "mobile")}
              />
            </div>
          </div>
          <div className="address-items">
            <div className="button-container">
              {updateButton ? (
                <button className="address-btns" onClick={addAddress}>
                  Update
                </button>
              ) : (
                <button className="address-btns" onClick={addAddress}>
                  Save
                </button>
              )}{" "}
              <button className="address-btns" onClick={handleCloseDialog}>
                Cancel
              </button>
              <button className="address-btns" onClick={handleDummyData}>
                Fill with dummy
              </button>
              <button className="address-btns" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
      {addressData.map((addressdetails) => {
        const { id, name, street, city, state, country, pinCode, mobile } =
          addressdetails;
        return (
          <div className="address-details-container">
            <div className="address-details" key={id}>
              <strong>{name}</strong>
              <p>{mobile}</p>
              <p>{street}</p>
              <p>{city}</p>
              <span>{state}</span>
              <span>{country}</span>
              <p>{pinCode}</p>
            </div>
            <div className="btns">
              <button onClick={() => handleEditAddress(id, addressdetails)}>
                Edit
              </button>
              <button onClick={() => handleDelete(id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <button className="add-address-btn" onClick={handleButtonClick}>
        Add New Address
      </button>
    </div>
  );
};

export default Address;
