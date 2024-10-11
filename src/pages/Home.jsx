import React, { useState } from "react";
import Navbar from "./Navbar";
import ProfileForm from "../components/ProfileForm";
import ProfileCard from "../components/ProfileCard"; 
import MapView from "../components/MapView"; 

const Home = ({ onAddProfile, profiles, onDeleteProfile }) => {
  const [selectedAddress, setSelectedAddress] = useState(null); 

  const handleShowMap = (address) => {
    setSelectedAddress(address); 
  };

  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-white font-bold text-center mb-4 pt-4 pb-4">Add a Profile</h1>
      <ProfileForm onAddProfile={onAddProfile} />

      <h2 className="text-2xl text-white font-bold text-center mt-8 ">Profiles</h2>
      <div className="flex flex-wrap justify-center">
        {profiles.map((profile, index) => (
          <div key={index} className="relative m-2"> 
            <ProfileCard 
              profile={profile} 
              onShowMap={handleShowMap} 
            />
            <button
              onClick={() => onDeleteProfile(index)}
              className="bg-red-500 text-white p-2 rounded mt-2" 
              style={{ width: "100%" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {selectedAddress && (
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <MapView address={selectedAddress} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
