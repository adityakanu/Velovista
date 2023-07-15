import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Driver from "../assets/driver.png";
import Navbar from "./Nav";
import "./map.css";

const position1 = [28.37, 76.99];
const position2 = [28.39, 77.0];

export default function Map() {
    return (
        <div>
            <div className="px-5 py-0 m-0">
                <MapContainer
                    center={position1}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    {/* OPEN STREET MAP TILES */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position1}>
                        <Popup>You are here.</Popup>
                    </Marker>
                    <Marker position={position2}>
                        <Popup>Obama is coming for you.</Popup>
                    </Marker>
                </MapContainer>

                <img
                    className="absolute z-20 w-32 h-32 bottom-10 right-20"
                    alt="Driver"
                    src={Driver}
                />
            </div>
        </div>
    );
}
