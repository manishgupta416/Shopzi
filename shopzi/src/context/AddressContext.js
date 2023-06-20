import { createContext, useState, useEffect } from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addressData, setAddressData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [updateButton, setUpdateButton] = useState(false);
  const [addressForm, setAddressForm] = useState({
    id: Date.now(),
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    mobile: "",
  });

  const handleAddressInputs = (e, name) => {
    setAddressForm({ ...addressForm, [name]: e.target.value });
    console.log(addressForm);
  };

  const addAddress = () => {
    if (
      addressForm.name !== "" &&
      addressForm.street !== "" &&
      addressForm.city !== "" &&
      addressForm.state !== "" &&
      addressForm.country !== "" &&
      addressForm.pinCode !== "" &&
      addressForm.mobile !== ""
    ) {
      setAddressData([...addressData, addressForm]);
      setIsOpen(false);
      console.log(addressData);
    } else {
      alert("Every input fileds must be filled");
    }
  };

  const handleReset = () => {
    console.log("ll");
    setAddressForm({
      id: Date.now(),
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      mobile: "",
    });
  };
  const handleFillDummy = (dummyData) => {
    setAddressForm({ ...addressForm, ...dummyData });
  };
  const handleDummyData = () => {
    const dummyData = {
      name: "Manish Gupta",
      street: "123 AnandNagar",
      city: "Bhopal",
      state: "MP",
      country: "India",
      pinCode: "12345",
      mobile: "1234567890",
    };

    handleFillDummy(dummyData);
  };
  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  const handleDelete = (selectedAddId) => {
    setAddressData([...addressData.filter(({ id }) => id !== selectedAddId)]);
  };

  const handleEditAddress = (id, addressdetails) => {
    setIsOpen(true);
    setAddressForm({ ...addressdetails });
    setUpdateButton(true);
  };
  const updateHandler = (selectedId) => {
    const UpdatedAddress = addressData.map((address) =>
      address.id === selectedId ? { addressForm } : address
    );
    setAddressData([...UpdatedAddress]);
    setAddressForm({
      id: Date.now(),
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      mobile: "",
    });
    setIsOpen(false);
    setUpdateButton(false);
  };
  useEffect(() => {
    //  whenever data changes
    if (addressData.length > 0) {
      console.log(addressData);
    }
  }, [addressData]);
  return (
    <AddressContext.Provider
      value={{
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
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
