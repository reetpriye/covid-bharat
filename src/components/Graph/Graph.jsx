import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";

const Graph = data => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchmyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };
    fetchmyAPI();
  }, []);
  console.log(dailyData);
  // export const modifiedDailyData = dailyData.map(data => ({
  //   dailyConfirmedCase: data.dailyconfirmed,
  //   dailyRecoveredCase: data.dailyrecovered
  // }));
  // dailyData.length ? console.log(modifiedDailyData) : null;

  return <div>Graph</div>;
};

export default Graph;
