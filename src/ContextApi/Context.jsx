import React, { createContext, useState } from "react";
import { useEffect } from "react";

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [arrayShopping, setArrayShopping] = useState(() => {
    const stored = localStorage.getItem("array");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(arrayShopping));
  }, [arrayShopping]);
  return (
    <ShoppingContext.Provider value={{ arrayShopping, setArrayShopping }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
