import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import moment from "moment";

export default function HourlyUpdate({ weatherHour, hourDisplay }) {
  return (
    <>
      {hourDisplay !== "" ? (
        <Typography variant="h3" style={{ margin: 10 }}>
          Hourly Updates for {hourDisplay}
        </Typography>
      ) : (
        <div></div>
      )}

      <Grid container spacing={5} justify="center">
        {weatherHour !== "" ? (
          weatherHour.map((val) => (
            <Grid item>
              <Card elevation={5} style={{ margin: 10 }}>
                <CardContent>
                  <Typography variant="h6">
                    {moment(val.time).format("HH:mm")}
                  </Typography>
                  <img src={val.condition.icon} />
                  <Typography variant="h6">{val.condition.text}</Typography>

                  <Divider />
                  <Typography variant="h6">Humidity</Typography>

                  <Typography>{val.humidity}</Typography>
                  <Typography variant="h6">Wind Speed</Typography>

                  <Typography>{val.wind_mph}</Typography>
                  <Typography variant="h6">Tempreature</Typography>

                  <Typography>{val.temp_f}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          //   <div></div>
          <div></div>
        )}{" "}
      </Grid>
    </>
  );
}
