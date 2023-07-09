import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
// import locationIconGif from "../assets/location.png";
import "./map.css";
import Navbar from "./navbar";

// create custom icon
const locationIcon = L.icon({
    iconUrl: "../assets/location.png",
    iconSize: [38, 38],
});

// custom cluster icon
function createClusterCustomIcon(cluster) {
    return L.divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: L.point(33, 33, true),
    });
}

// markers
const markers = [
    {
        geocode: [48.86, 2.3522],
        popUp: "Your location",
    },
    {
        geocode: [48.85, 2.3522],
        popUp: "Driver's location",
    },
];

export default function Map() {
    return (
        <div>
            <Navbar />
            <div className="px-5 py-0 m-0">
                <MapContainer center={[48.8566, 2.3522]} zoom={13}>
                    {/* OPEN STREET MAP TILES */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* MARKER CLUSTER GROUP */}
                    <MarkerClusterGroup
                        chunkedLoading
                        iconCreateFunction={createClusterCustomIcon}
                    >
                        {/* Map through the markers */}
                        {markers.map((markers) => (
                            <Marker
                                position={markers.geocode}
                                icon={locationIcon}
                                key={`${markers.geocode[0]}-${markers.geocode[1]}`}
                                className="text-2xl font-bold text-violet-600"
                            >
                                <Popup>{markers.popUp}</Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
    );
}
