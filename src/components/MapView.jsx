// src/components/MapView.jsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ address }) => {
  const position = address ? address.position : [51.505, -0.09];

  // Custom component to control map movement
  const MapViewController = () => {
    const map = useMap();

    useEffect(() => {
      if (address) {
        map.setView(position, 13); // Adjust zoom level as needed
      }
    }, [address, map, position]);

    return null; // This component does not render anything to the DOM
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapViewController />
        {address && (
          <Marker position={address.position}>
            <Popup>{address.details}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;
