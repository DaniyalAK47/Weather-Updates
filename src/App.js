import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import WeatherForecast from "./Components/WeatherForecast";
import HourlyUpdate from "./Components/HourlyUpdate";
import { CircularProgress } from "@material-ui/core";
import { getWeather } from "./Components/GetWeather";

function App() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("Islamabad");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [weatherHour, setWeatherHour] = useState("");
  const [forecastDisplay, setForecastDisplay] = useState(false);
  const [hourDisplay, setHourDisplay] = useState("");

  // const [refresh,setRefresh]= useState(false)

  useEffect(() => {
    //getWeather
    setLoading(true);
    getWeather(
      location,
      setForecastDisplay,
      setWeatherForecast,
      setHourDisplay,
      setWeatherHour
    ).then((res) => setLoading(false));
  }, []);

  // setInterval(getWeather(location), 360000);

  return (
    // console.log(weatherForecast.forecast.forecastday, "DATAAAAAAAAAA"),
    <>
      <Header
        location={location}
        setLocation={setLocation}
        setForecastDisplay={setForecastDisplay}
        setWeatherForecast={setWeatherForecast}
        setWeatherHour={setWeatherHour}
        setHourDisplay={setHourDisplay}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <WeatherForecast
            weatherForecast={weatherForecast}
            setWeatherHour={setWeatherHour}
            setHourDisplay={setHourDisplay}
          />
          <HourlyUpdate weatherHour={weatherHour} hourDisplay={hourDisplay} />
        </>
      )}
    </>
  );
}

export default App;
