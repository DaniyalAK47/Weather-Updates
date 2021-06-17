import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CardActions,
  Divider,
} from "@material-ui/core";
import moment from "moment";

export default function WeatherForecast({
  weatherForecast,
  setWeatherHour,
  setHourDisplay,
}) {
  return (
    <>
      <Grid container spacing={5} justify="center">
        {weatherForecast !== "" ? (
          weatherForecast.forecast.forecastday.map((val) => (
            <Grid item>
              <Card elevation={5} style={{ margin: 10 }}>
                <CardContent>
                  <Typography variant="h6">
                    {moment(val.date).format("Do MMMM YYYY")}
                  </Typography>
                  <img src={val.day.condition.icon} />
                  <Typography variant="h6">{val.day.condition.text}</Typography>

                  <Divider />

                  <Typography variant="h6">Humidity</Typography>
                  <Typography variant="subtitle1">
                    {val.day.avghumidity}
                  </Typography>

                  <Typography variant="h6">Max Wind Speed</Typography>
                  <Typography variant="subtitle1">
                    {val.day.maxwind_mph}
                  </Typography>

                  <Typography variant="h6">Max Temprature</Typography>
                  <Typography variant="subtitle1">
                    {val.day.maxtemp_c}
                  </Typography>

                  <Typography variant="h6">Min Temrature</Typography>
                  <Typography variant="subtitle1">
                    {val.day.mintemp_c}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{
                      margin: 5,
                      backgroundColor: "#CFA348",
                      fontSize: 15,
                    }}
                    onClick={() => {
                      setWeatherHour(val.hour);
                      setHourDisplay(moment(val.date).format("Do MMMM YYYY"));
                    }}
                  >
                    Hourly Updates
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <div></div>
        )}{" "}
      </Grid>
    </>
  );
}
