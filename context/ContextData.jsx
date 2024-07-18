"use client";
import { createContext, useState, useContext, useEffect } from "react";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [bagCount, setBagCount] = useState(null);
  const [favCount, setFavCount] = useState(null);

  useEffect(() => {
    const bagCountFromStorage = localStorage.getItem("bagCount");
    const favCountFromStorage = localStorage.getItem("favCount");

    if (bagCountFromStorage !== null) {
      setBagCount(Number(bagCountFromStorage));
    }
    if (favCountFromStorage !== null) {
      setFavCount(Number(favCountFromStorage));
    }
  }, []);

  useEffect(() => {
    if (bagCount !== null) {
      localStorage.setItem("bagCount", bagCount);
    }
  }, [bagCount]);

  useEffect(() => {
    if (favCount !== null) {
      localStorage.setItem("favCount", favCount);
    }
  }, [favCount]);

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
