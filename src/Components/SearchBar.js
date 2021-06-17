import React from "react";
import { TextField, Button } from "@material-ui/core";
import { getWeather } from "./GetWeather";

export default function SearchBar({
  location,
  setLocation,
  setForecastDisplay,
  setWeatherForecast,
  setWeatherHour,
  setHourDisplay,
}) {
  return (
    <>
      <TextField
        placeholder="Search"
        style={{
          backgroundColor: "white",
          margin: 5,
          width: "50%",
          padding: 4,
        }}
        data-testid="searchBar"
        value={location}
        onChange={(val) => setLocation(val.target.value)}
      />
      <Button
        disabled={location === "" ? true : false}
        data-testid="search-button"
        style={{
          margin: 5,
          backgroundColor: "#CFA348",
          fontSize: 15,
        }}
        onClick={() => {
          getWeather(
            location,
            setForecastDisplay,
            setWeatherForecast,
            setWeatherHour,
            setHourDisplay
          );
        }}
      >
        Search
      </Button>
    </>
  );
}
