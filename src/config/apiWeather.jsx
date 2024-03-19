import axios from "axios";

const API_KEY = "f3333bd5e858525238e8ff6547a996f9";
const BASE_URL = "http://api.openweathermap.org/data/2.5";

const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric", // ou 'imperial' para Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    // Trate o erro conforme necessárioconsole.error(error);
  }
};

export default getWeatherData;
