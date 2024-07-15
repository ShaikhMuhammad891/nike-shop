"use client";
import { createContext, useState, useContext, useEffect } from "react";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [bagCount, setBagCount] = useState(null);
  const [favCount, setFavCount] = useState(null);

  return (
    <ShopContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        bagCount,
        setBagCount,
        favCount,
        setFavCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
