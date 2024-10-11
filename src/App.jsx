// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Team from "./pages/Team";

function App() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [profiles, setProfiles] = useState(() => {
    // Load profiles from local storage if available
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
      {/* <Route path="/team" element={<Team />} /> */}
    </Routes>
  );
}

export default App;
