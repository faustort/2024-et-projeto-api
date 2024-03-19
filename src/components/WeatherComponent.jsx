import React, { useEffect, useState } from "react";
import getWeatherData from "../config/apiWeather";

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      setLocation({
        ...location,
        error: "Geolocation is not supported by this browser.",
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(-26.2634146, -48.9628813); // Exemplo: coordenadas de Tóquio
      setWeatherData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {weatherData && <h1>Temperatura Atual: {weatherData.main.temp}°C</h1>}
    </div>
  );
}
