// src/components/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ profile, onShowMap }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <img src={profile.photo} alt={profile.name} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p>{profile.description}</p>
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={() => onShowMap(profile.address)} // This triggers the map update
      >
        Summary
      </button>
    </div>
  );
};

export default ProfileCard;
