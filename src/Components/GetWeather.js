import axios from "axios";

export const getWeather = (
  location,
  setForecastDisplay,
  setWeatherForecast,
  setHourDisplay,
  setWeatherHour
) => {
  return axios({
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=3ee9908412104e03a2b184944211006&q=${location}&days=10&aqi=no&alerts=no`,
  })
    .then((res) => {
      console.log(res, "HBHJBBBBBBBB");
      if (res.data) {
        setWeatherForecast(res.data);
        setForecastDisplay(true);
        setWeatherHour("");
        setHourDisplay("");
      }
    })

    .catch((err) => {
      console.log(err, "Error getting weather information");
    });
};
