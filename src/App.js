import React, { useState } from "react";
import './App.css';
import clearicon from "./Components/assests/clear-icon.png"
import humi from "./Components/assests/humidity.png"
import windicon from "./Components/assests/wind-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { error } from "ajv/dist/vocabularies/applicator/dependencies";

const WeatherDetails = ({ icon, temp, city, country, lat, lon, humidity, windSpeed }) => {
  return (
    <div className="weather-details">
      <div className="image">
        <img src={icon} alt="weather icon" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude : </span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude : </span>
          <span>{lon}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humi} alt="humidity" className="icon" />
          <div className="data-container">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text1">Humidity</div>
          </div>
        </div>
        <div className="element wind-speed">
          <img src={windicon} alt="wind" className="icon1" />
          <div className="data">
            <div className="wind-percent">{windSpeed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  let Api_Key = "987118569ee44c28b6144548251501";
  const [text, setText] = useState("");
  const [icon, setIcon] = useState(clearicon); // Initial icon is empty, will be fetched from API
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null);

  const search = async () => {
    let url = `https://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${text}&aqi=yes&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.error) {
        console.log("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.current.humidity);
      setWindSpeed(Math.floor(data.current.wind_kph));
      setTemp(Math.floor(data.current.temp_c));
      setCity(data.location.name);
      setLat(data.location.lat);
      setLon(data.location.lon);
      setCountry(data.location.country);

      // Use the icon URL provided by WeatherAPI
      const weatherIcon = `https:${data.current.condition.icon}`; // Prepend the base URL for icons
      setIcon(weatherIcon); // Set the icon dynamically

      setCityNotFound(false);
    } catch (error) {
      console.log("An Error occurred: " + error.message);
      setError("An error occured while fetching weather data")
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          className="city-name"
          type="text"
          placeholder="Search City"
          onChange={handleCity}
          onKeyDown={handleKeyDown}
          value={text}
        />
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faSearch}
            role="button"
            onClick={() => search()}
          />
        </div>
      </div>

     
      {loading && <div className="loading-message">Loading ...</div>}
      {error &&<div className="error-message">{error}</div>}
      {cityNotFound &&<div className="city-not-found">City Not Found</div>}
      
      {!loading && !cityNotFound &&<WeatherDetails
        icon={icon}
        temp={temp}
        city={city}
        country={country}
        lat={lat}
        lon={lon}
        humidity={humidity}
        windSpeed={windSpeed}
      />}

      
      <p className="Copyright">
        Designed By <span>Danny Soundaraj.D</span>
      </p>
    </div>
  );
}

export default App;
