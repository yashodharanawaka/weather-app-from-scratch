import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3b82abddf541099e44c5ee978bbf36b0";

export const fetchWeather = async (city) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
