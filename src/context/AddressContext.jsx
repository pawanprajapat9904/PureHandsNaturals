import { createContext, useContext, useState } from "react";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    state: "",
    pincode: ""
  });

  const updateAddress = (field, value) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const clearAddress = () => {
    setAddress({
      name: "",
      phone: "",
      house: "",
      area: "",
      city: "",
      state: "",
      pincode: ""
    });
  };

  return (
    <AddressContext.Provider
      value={{ address, updateAddress, clearAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  return useContext(AddressContext);
}
