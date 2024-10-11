import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ location }) => {
  if (!location || location.length === 0) return null; // Ensure location is valid

  return (
    <MapContainer center={location} zoom={13} className="h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>Location: {location[0]}, {location[1]}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
