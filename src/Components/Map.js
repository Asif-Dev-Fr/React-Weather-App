import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapJp = ({ lat, lon, name, zipCode }) => {
    const position = [lat, lon];
    const zoom = 16;
    return (
        <Map center={position} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <p>
                        Zip code : {zipCode} <br/>
                        City : {name}
                    </p>
                </Popup>
            </Marker>
        </Map>


    )
}

export default MapJp;