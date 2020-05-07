import React from "react";
import axios from "axios";

const url = "https://api.covid19india.org/data.json";

export const fetchData = async () => {
  try {
    const {
      data: { cases_time_series }
    } = await axios.get(url);
    const totalConfirmed =
      cases_time_series[cases_time_series.length - 1].totalconfirmed;
    const totalRecovered =
      cases_time_series[cases_time_series.length - 1].totalrecovered;
    const totalDeceased =
      cases_time_series[cases_time_series.length - 1].totaldeceased;

    return { totalConfirmed, totalRecovered, totalDeceased };
  } catch (error) {
    console.log(error);
  }
};
