"use client"
import { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    <ShopContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </ShopContext.Provider>
  );
};
