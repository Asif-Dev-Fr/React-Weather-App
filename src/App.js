import React, { useState } from 'react';
import './App.css';
import WeatherCards from './Components/WeatherCards';

const App = () => {

  const [query, setQuery] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [cityName, setcityName] = useState();
  const [countryName, setCountryName] = useState();
  const [result, setResult] = useState();

  const searchInput = (e) => {
    let searchZipcode = e.target.value;
    setQuery(searchZipcode);
  }

  const searchEnter = async (event) => {
    if (event.key === 'Enter') {

      const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?zip=" + query + ",jp&appid=" + process.env.REACT_APP_API_KEY);
      const data = await response.json();
      console.log(data);
      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;
      const name = data.city.name;
      const country = data.city.country;
      setCountryName(country);
      setcityName(name);
      setLongitude(lon);
      setLatitude(lat);
    }
  }


  const searchButton = async () => {

    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?zip=" + query + ",jp&appid=" + process.env.REACT_APP_API_KEY);
    const data = await response.json();
    console.log(data);
    const lat = data.city.coord.lat;
    const lon = data.city.coord.lon;
    const name = data.city.name;
    const country = data.city.country;
    setCountryName(country);
    setcityName(name);
    setLongitude(lon);
    setLatitude(lat);
  
  }

  return (
    <div className="App">
      <div className="container">

        <header>
          <div className="row">
            <div className="col-12 col-lg-2 label">
              <label htmlFor="PostCode">POST CODE</label>
            </div>

            <div className="col-12 col-lg-8 input">
              <input type="text" name="PostCode" placeholder="Please enter a japanese zip code (for example : 160-0022)" id="PostCode" onChange={searchInput} onKeyPress={searchEnter} />
            </div>

            <div className="col-12 col-lg-2 submitButton">
              <button type="submit" className="btn" onClick={searchButton}>
                Submit
              </button>
            </div>
          </div>
        </header>

        <main>

          {
            (typeof cityName !== 'undefined') ?
            <section className="section-1">
              <h1> 
                {cityName} 
                {
                  countryName === 'JP' ? ' Japan ' : ''
                }
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
        </main>



      </div>

    </div>
  );
}

export default App;
