import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem("profiles");
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  const handleAddProfile = (newProfile) => {
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); // Save to local storage
  };

  const handleDeleteProfile = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); // Save to local storage
  };

  const handleShowMap = (address) => {
    setSelectedAddress(address);
  };

  return (
    <BrowserRouter basename="/MapTrack"> {/* Set the basename */}
      <Routes>
        <Route 
          path="/" 
          element={<Landing profiles={profiles} onDeleteProfile={handleDeleteProfile} />} 
        />
        <Route 
          path="/signin" 
          element={<LoginForm />} 
        />
        <Route 
          path="/signup" 
          element={<SignUpForm />} 
        />
        <Route 
          path="/user" 
          element={<Home onAddProfile={handleAddProfile} profiles={profiles} onDeleteProfile={handleDeleteProfile} onShowMap={handleShowMap}/>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
