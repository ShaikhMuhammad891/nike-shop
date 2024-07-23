"use client"
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FilterChange, Search } from "@/icons/logos";
import { stores } from "../../../utils/store";

// Define map container style
const mapContainerStyle = {
  width: "960px", // Adjust width as needed
  height: "720px", // Adjust height as needed
};

// Initial center for New York City
const initialCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

// Define your Google Maps API Key here
const YOUR_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

const FindStore = () => {
  const [showAllStores, setShowAllStores] = useState(false);
  const [places, setPlaces] = useState(stores);
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleShowAllStores = () => {
    setShowAllStores(!showAllStores);
  };

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredStores = stores.filter((store) =>
      store.city.toLowerCase().includes(term)
    );
    setPlaces(filteredStores);
    setSelectedStore(null); // Reset selected store when searching
  };

  const 
  getMapCenter = () => {
    if (selectedStore) {
      return { lat: selectedStore.latitude, lng: selectedStore.longitude };
    } else if (places.length > 0) {
      return { lat: places[0].latitude, lng: places[0].longitude }; // Default to first search result
    } else {
      return initialCenter; // Default to New York if no search results
    }
  };

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex relative">
          <div className="max-w-[416px] mx-[32px] mt-[36px]">
            <p className="text-[27px] leading-[32px] font-medium">
              Find a Nike Store
            </p>
            <div className="mt-[44px] pl-[12px] py-[16px] flex gap-[12px] items-center border border-[#757575] w-[416px] rounded-[8px]">
              <Search />
              <input
                type="text"
                placeholder="Search Location"
                className="outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="mt-[30px] flex justify-between items-center mb-[30px]">
              <p className="text-[14px] leading-[20px] font-normal text-[#757575]">
                {places.length} Stores Near You
              </p>
              <div className="flex rounded-[30px] px-[21.5px] py-[7.5px] gap-[8.56px] border border-[#757575] cursor-pointer">
                <p className="text-center text-[15px] leading-[24px] font-medium">
                  Filter
                </p>
                <FilterChange />
              </div>
            </div>
            <hr />
            <div>
              {places
                .slice(0, showAllStores ? places.length : 3)
                .map((store, index) => (
                  <div
                    key={index}
                    className="mt-[28px] cursor-pointer"
                    onClick={() => handleStoreClick(store)}
                  >
                    <p className="text-[15px] leading-[24px] font-medium">
                      {store.name}
                    </p>
                    <p className="text-[#757575] text-[15px] leading-[24px] font-normal">
                      {store.address}
                    </p>
                    <p className="text-[#757575] text-[16px] leading-[24px]">
                      {store.city}, {store.state}, {store.zip}
                    </p>
                    <div className="flex gap-[3px] items-center text-[#757575] text-[15px] leading-[24px]">
                      <p className="text-[#D43F21]">{store.status}</p>
                      <p className="mt-[-3px]">.</p>
                      <p>Opens at</p>
                      <p>{store.opensAt}</p>
                    </div>
                    <hr className="mt-[24px]" />
                  </div>
                ))}
            </div>
            <p
              className="mt-[14px] underline font-medium text-[15px] leading-[24px] pb-[14px]"
              onClick={toggleShowAllStores}
            >
              {showAllStores ? "View Less" : "View All store"}
            </p>
          </div>

          {/*Map Section */}
          <div className="">
            <LoadScript googleMapsApiKey= "">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={getMapCenter()}
                zoom={selectedStore ? 14 : 12}
              >
                {places.map((store, index) => (
                  <Marker
                    key={index}
                    position={{ lat: store.latitude, lng: store.longitude }}
                    title={store.name}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindStore;
