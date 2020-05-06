import React from "react";
import axios from "axios";

const url = "https://api.covid19india.org/data.json";

export const fetchData = async () => {
  try {
    const {
      data: { cases_time_series, statewise, tested }
    } = await axios.get(url);

    return { cases_time_series, statewise, tested };
  } catch (error) {
    return error;
  }
};
