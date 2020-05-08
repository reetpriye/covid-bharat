import React from "react";
import axios from "axios";

const url = "https://api.covid19india.org/data.json";

// Data Fetching for Cards

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

//Last 8 Days daily Data Fetching for Graph

export const fetchDailyData = async () => {
  try {
    const {
      data: { cases_time_series }
    } = await axios.get(url);

    const fetchedData = cases_time_series.map(data => ({
      dailyConfirmed: data.dailyconfirmed,
      dailyRecovered: data.dailyrecovered,
      dailyDeceased: data.dailydeceased
    }));
    const lengthOfArray = cases_time_series.length;
    return fetchedData.slice(lengthOfArray - 8, lengthOfArray);
  } catch (error) {}
};
