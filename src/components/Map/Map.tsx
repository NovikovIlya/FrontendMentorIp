import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useAppSelector } from "../../hooks/redux";

function Map() {
  const { data } = useAppSelector((state) => state.todoSlice);

  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]);

  useEffect(() => {
    if (data) {
      setPosition([data.location.lat, data.location.lng]);
    }
  }, [data]);

  return (
    <>
      {data && (
        <MapContainer
          center={position as [number, number]}
          zoom={13}
          scrollWheelZoom={false}
          key={position[0].toString()}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* @ts-ignore */}
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
}

export default Map;
