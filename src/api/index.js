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
    const dailyInfectedData =
      cases_time_series[cases_time_series.length - 1].totalconfirmed -
      cases_time_series[cases_time_series.length - 2].totalconfirmed;
    const dailyRecoveredData =
      cases_time_series[cases_time_series.length - 1].totalrecovered -
      cases_time_series[cases_time_series.length - 2].totalrecovered;
    const dailyDeceasedData =
      cases_time_series[cases_time_series.length - 1].totaldeceased -
      cases_time_series[cases_time_series.length - 2].totaldeceased;
    const lastUpdate = cases_time_series[cases_time_series.length - 1].date;
    return {
      totalConfirmed,
      totalRecovered,
      totalDeceased,
      dailyInfectedData,
      dailyRecoveredData,
      dailyDeceasedData,
      lastUpdate
    };
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
      dailyDeceased: data.dailydeceased,
      date: data.date
    }));
    const lengthOfArray = cases_time_series.length;
    const finalDailyData = fetchedData.slice(lengthOfArray - 10, lengthOfArray);
    return finalDailyData;
  } catch (error) {}
};
