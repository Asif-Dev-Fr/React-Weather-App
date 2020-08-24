import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

const WeatherCards = ({lat, lon}) => {
    const [result, setResult] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly&units=metric&appid=' + process.env.REACT_APP_API_KEY);
            const data = await response.json();
            console.log(data.daily);
            setResult(data.daily);
        }
        fetchData();
    }, [lat,lon]);
    return(
        <div className="weather-card">
           {   
                (typeof result !== "undefined") ?
                result.slice(0,3).map((value) =>(
                   <WeatherCard key={value.dt} result={value} />
                )) : ''
           }
        </div>
    )
}

export default WeatherCards;