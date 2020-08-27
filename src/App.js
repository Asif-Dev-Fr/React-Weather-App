import React, { useState } from 'react';
import './App.css';
import WeatherCards from './Components/WeatherCards';
import MapJp from './Components/Map';
import AirQuality from './Components/AirQuality';
import Wikiinfos from './Components/WikiInfos';

const App = () => {

  const [query, setQuery] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [cityName, setcityName] = useState();
  const [countryName, setCountryName] = useState();
  const [population, setPopulation] = useState();
  const [error, setError] = useState(false);

  const searchInput = (e) => {
    let searchZipcode = e.target.value;
    setQuery(searchZipcode);
  }

  const searchEnter = async (event) => {
    if (event.key === 'Enter') {

      const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=" + process.env.REACT_APP_API_KEY);
      const data = await response.json();
      // console.log(data);
      const errorMessage = data.message;
      if (errorMessage !== "city not found") {
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;
        const name = data.city.name;
        const country = data.city.country;
        const pop = data.city.population;
        setPopulation(pop);
        setCountryName(country);
        setcityName(name);
        setLongitude(lon);
        setLatitude(lat);
        setError(false);
      } else {
        setError(true);
      }
      
    }
  }


  const searchButton = async () => {

    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=" + process.env.REACT_APP_API_KEY);
      const data = await response.json();
      console.log(data);
      const errorMessage = data.message;
      if (errorMessage !== "city not found") {
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;
        const name = data.city.name;
        const country = data.city.country;
        const pop = data.city.population;
        setPopulation(pop);
        setCountryName(country);
        setcityName(name);
        setLongitude(lon);
        setLatitude(lat);
        setError(false);
      } else {
        setError(true);
      }
  
  }

  return (
    <div className="App">
      <div className="container">

        <header>
          <div className="row">

            <div className="col-12 col-lg-10 input">
              <input type="text" name="city" placeholder="Enter the name of a City" id="city" onChange={searchInput} onKeyPress={searchEnter} />
            </div>

            <div className="col-12 col-lg-2 submitButton">
              <button type="submit" className="btn" onClick={searchButton}>
                Submit
              </button>
            </div>
          </div>
        </header>

        {error === false ?
        <main>

          {
            (typeof cityName !== 'undefined') ?
            <section className="section-1">
              <h1> 
                { cityName } &nbsp;
                ({ countryName })
              </h1>
            </section>
             : ''
          }     
    
          {
            (typeof latitude !== "undefined") ?
              <section className="section-2">
                <p className="text-mockup">3-day forecast</p> 
                <WeatherCards lat={latitude} lon={longitude} />
              </section> : ''
          }

          {
            (typeof latitude !== "undefined") ?
              <section className="section-3 row">

                <div className="left col-12 col-lg-5">
                  <p className="text-mockup">Map</p> 
                  <MapJp lat={latitude} lon={longitude} population={population} name={cityName} />
                </div>

                <div className="right col-12 col-lg-5">
                  <AirQuality lat={latitude} lon={longitude} />
                </div>

                
              </section> : ''
          }

          {
            (typeof cityName !== "undefined") ? 
              <section className="section-4">
                <Wikiinfos city={cityName} />
              </section> : ''
          }
        </main>
        : <div className="errorDisplay"> The city that you entered is incorrect. Try again </div>
        }



      </div>

    </div>
  );
}

export default App;
