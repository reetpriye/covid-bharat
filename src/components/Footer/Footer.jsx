import React from "react";
import { Grid } from "@material-ui/core";

function Footer() {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <h4>State Stats to be featured soon.</h4>
          <h4>I'm still learning React.js.</h4>
          <h3 align="right">©REET 2020</h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
