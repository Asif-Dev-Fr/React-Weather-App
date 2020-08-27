import React, { useEffect } from 'react';

const AirQuality = ({lat, lon}) => {

    useEffect(()=> {
        const fetchAirQualityData = async () => {
            const response = await fetch(`https://api.waqi.info/feed/geo::39.954592;:116.468117/?token=` + process.env.REACT_APP_AIR_API_KEY);
            const data = await response.json();
            // console.log(data);
        }
        fetchAirQualityData();
    }, [lat,lon]);

    return(
        <div>

        </div>
    )
}

export default AirQuality;