import './App.css';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { useMap } from 'react-leaflet/hooks';
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';

function App() {
  const [coordinateLeft,setCoordinateLeft] = useState('')
  const [coordinateRight,setCoordinateRight] = useState('')
  
  return (
    <>
      <div className='ss'>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default App;
