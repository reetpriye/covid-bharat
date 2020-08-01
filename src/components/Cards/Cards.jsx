import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

function Cards({
  data: {
    totalConfirmed,
    totalRecovered,
    totalDeceased,
    dailyInfectedData,
    dailyRecoveredData,
    dailyDeceasedData
  }
}) {
  if (!totalConfirmed) {
    return <h4 align="center">Fetching latest data...</h4>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2" display="inline">
              <CountUp
                start={0}
                end={parseInt(totalConfirmed)}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography
              variant="caption"
              component="h6"
              align="right"
              display="inline"
            >
              {"   "}
              +
              <CountUp
                start={0}
                end={parseInt(dailyInfectedData)}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2" component="p">
              Number of infected cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography gutterBottom variant="h4">
              Recovered
            </Typography>
            <Typography variant="h5" component="h2" display="inline">
              <CountUp
                start={0}
                end={parseInt(totalRecovered)}
                duration={2.75}
                separator=","
              />
            </Typography>

            <Typography
              variant="caption"
              component="h6"
              align="right"
              display="inline"
            >
              {"   "}
              +
              <CountUp
                start={0}
                end={parseInt(dailyRecoveredData)}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deceased)}
        >
          <CardContent>
            <Typography gutterBottom variant="h4">
              Deceased
            </Typography>
            <Typography variant="h5" component="h2" display="inline">
              <CountUp
                start={0}
                end={parseInt(totalDeceased)}
                duration={2.75}
                separator=","
              />

              <Typography
                variant="caption"
                component="h6"
                align="right"
                display="inline"
              >
                {"   "}
                +
                <CountUp
                  start={0}
                  end={parseInt(dailyDeceasedData)}
                  duration={2.75}
                  separator=","
                />
              </Typography>
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
