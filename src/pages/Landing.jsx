import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import MapView from "../components/MapView";
import HomeNavbar from "./HomeNavbar";

const Landing = ({ profiles }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleShowMap = (address) => {
    setSelectedAddress(address);
  };

  return (
    <>
      <HomeNavbar />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-primaryRegular text-center mt-8 text-white mb-4">For Managing Profiles Login to Admin Panel through menu icon in Navbar ! </h2>
        <h2 className="text-2xl font-bold text-center mt-8 text-white mb-4">Profiles</h2>
        <div className="flex flex-wrap justify-center">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              profile={profile}
              onShowMap={handleShowMap}
            />
          ))}
        </div>
        {selectedAddress && (
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <MapView address={selectedAddress} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Landing;
