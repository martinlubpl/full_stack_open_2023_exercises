import React, { useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  console.log(capital);
  const [weather, setWeather] = React.useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((result) => {
        console.log(result.data);
        setWeather(result.data);
      })
      .catch((err) => window.alert(err));
  }, [capital]);
  return (
    <div>
      <h1>Weather in {capital}</h1>
      <p>temp {weather.main.temp} C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
