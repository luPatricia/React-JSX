import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";
import ForecastList from "./components/ForecastList";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    async function featchWeather() {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`
        );
        const data = await response.json();

        if (data.results) {
          setWeather(data.results);
          setForecast(data.results.forecast.slice());
        }
      } catch (erro) {
        console.error("Erro ao buscar dados da API", erro)
      }
    }
    featchWeather()
  }, [city])


  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {weather && (
        <>
          <h1>
            {weather.city}
            <span>
              Nascer do Sol: {weather.sunrise} | Pôr do Sol: {weather.sunset}
            </span>
          </h1>
          <WeatherCard weather={weather} />
          <ForecastList forecasts={forecast} />
        </>

      )}

    </div>
  );
}

export default App;
