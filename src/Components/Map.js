import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapJp = ({ lat, lon, name, population }) => {
    const position = [lat, lon];
    const zoom = 11;
    return (
        <Map center={position} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <p>
                        City : {name} <br/>
                        Population : {population}
                    </p>
                </Popup>
            </Marker>
        </Map>


    )
}

export default MapJp;