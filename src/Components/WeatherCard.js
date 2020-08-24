import React from 'react';

const WeatherCard = ({result}) => {
    const date = new Date(result.dt*1000);
    return (
        <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{date}</h4>
                <h3 className="card-text">{result.weather[0].main}</h3>
                <h5 className="card-text">Max {result.temp.max}° Min {result.temp.min}°</h5>
                
            </div>
        </div>

    )
}

export default WeatherCard;