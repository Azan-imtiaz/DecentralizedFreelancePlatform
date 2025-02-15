// ContextProvider.js
import React, { useState } from "react";
import MyContext from "./createContext";

const ContextProvider = ({ children }) => {
  // Shared state value
  const [user, setUser] = useState(null);

  // Function to update the state
  const login = () => {
    setUser(true);
  };
  const logout = () => {
    setUser(false);
  };


  // Provide the value to children components
  return (
    <MyContext.Provider value={{ user, login ,logout}}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
