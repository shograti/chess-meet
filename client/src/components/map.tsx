import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  return (
    <MapContainer
      className="h-[600px] rounded-sm mt-6"
      center={[47.3562401947093, 2.7745504965354706]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[47.3562401947093, 2.7745504965354706]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
