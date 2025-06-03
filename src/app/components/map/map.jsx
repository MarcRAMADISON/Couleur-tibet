'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import style from './map.module.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function Map() {
  return (
    <MapContainer scrollWheelZoom={false} center={[44.832604625619766, -0.5707980875194086]} zoom={20} className={style.container} >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[44.832604625619766, -0.5707980875194086]}>
        <Popup>Restaurant Couleur Tibet
        56 Rue du Mirail 33000 Bordeaux France </Popup>
      </Marker>
    </MapContainer>
  );
}
