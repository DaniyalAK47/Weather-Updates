import React from "react";
import { AppBar, Grid, Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";

export default function Header({
  location,
  setLocation,
  setForecastDisplay,
  setWeatherForecast,
  setWeatherHour,
  setHourDisplay,
}) {
  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "#10143B", height: "30%" }}
    >
      <Grid container alignItems="center" style={{ marginTop: 10 }}>
        <Grid item xs={4} sm={5} md={6} lg={6}>
          <Typography variant="h3">Weather Updates</Typography>
        </Grid>

        <Grid item xs={8} sm={7} md={6} lg={6}>
          <SearchBar
            location={location}
            setLocation={setLocation}
            setForecastDisplay={setForecastDisplay}
            setWeatherForecast={setWeatherForecast}
            setWeatherHour={setWeatherHour}
            setHourDisplay={setHourDisplay}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
}
