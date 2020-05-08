import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";

const Graph = data => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchmyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchmyAPI();
  }, []);

  return <div>Graph</div>;
};

export default Graph;
