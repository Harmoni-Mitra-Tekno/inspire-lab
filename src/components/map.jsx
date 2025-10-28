import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function Map({className, markerPosition }){
    return(
        <MapContainer center={markerPosition} zoom={16} scrollWheelZoom={true} className={className}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition}>
                <Popup>
                    INSPIRE Lab
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map