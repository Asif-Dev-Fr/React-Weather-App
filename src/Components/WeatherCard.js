import React from 'react';

const WeatherCard = ({result}) => {
    // Date
    let date = new Date(result.dt*1000);
    let changeDateFormat = date.toLocaleDateString();
    let dayOfTheWeek = date.toLocaleDateString("en-EN", {weekday: "long"});
    let firstThreeLetters = dayOfTheWeek.substring(0,3);

    // Icone 
    let weather = result.weather[0].main;
    let icone = '';
    switch(weather) {
        case 'Sun':
            icone = "/icone/sun.png";
            break;
        case 'Rain' :
            icone = "/icone/rain.png";
            break;
        case 'Snow' : 
            icone = "/icone/snow.png";
            break;
        case 'Clouds' :
            icone = "/icone/cloud.png";
            break;
        case 'Clear' :
            icone = "/icone/clear.jpg";
            break;
        default :
            icone = "No icone found";
            break;
    }


    return (
        <div className="card" >
            <img src={icone} className="card-img-top" alt={weather} />
            <div className="card-body">
                <h4 className="card-title d-flex justify-content-between">
                    <span>{changeDateFormat}</span> 
                    <span>{firstThreeLetters}</span>
                </h4>
                <h2 className="card-text text-center">{weather}</h2>
                <h5 className="card-text d-flex justify-content-between">
                    <span>Max : {result.temp.max}° </span>
                    <span>Min : {result.temp.min}°</span>
                </h5>
                
            </div>
        </div>

    )
}

export default WeatherCard;