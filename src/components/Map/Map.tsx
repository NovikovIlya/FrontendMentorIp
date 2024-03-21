import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ dataInfo: { lat, lng } }) {
  const [latValue, setLat] = useState();
  const [lngValue, setLng] = useState();

  useEffect(() => {
    setLat(lat);
    setLng(lng);
  }, [lng, lat]);
  console.log(typeof lat, lng);

  return (
    <>
      {latValue && lngValue && (
        <div className="ss">
          <MapContainer
            center={[latValue, lngValue]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latValue, lngValue]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
}

export default Map;
