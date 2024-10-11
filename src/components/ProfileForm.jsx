import React, { useState } from 'react';

const ProfileForm = ({ onAddProfile }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    description: '',
    photo: '',
    latitude: '',
    longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      ...profileData,
      address: {
        position: [parseFloat(profileData.latitude), parseFloat(profileData.longitude)],
        details: `${profileData.name}'s Location`,
      },
    };
    onAddProfile(newProfile);
    setProfileData({ name: '', description: '', photo: '', latitude: '', longitude: '' });
  };

  return (
    <form className="bg-[#DBD3D3] shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={profileData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
        <input
          type="text"
          name="photo"
          value={profileData.photo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
        <input
          type="number"
          step="any"
          name="latitude"
          value={profileData.latitude}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
        <input
          type="number"
          step="any"
          name="longitude"
          value={profileData.longitude}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Profile
      </button>
    </form>
  );
};

export default ProfileForm;
