import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import ReactApexChart from "react-apexcharts";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Infected",
          data: []
        },
        {
          name: "Recovered",
          data: []
        },
        {
          name: "Deceased",
          data: []
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
          ]
        },
        yaxis: {
          title: {
            text: "Number of Cases"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      }
    };
  }

  async componentDidMount() {
    const dailyData = await fetchDailyData();

    const dailyConfirmed = dailyData.map(el => ({
      dailyConfirmed: el.dailyConfirmed
    }));
    const dConfirmed = dailyConfirmed.map(
      ({ dailyConfirmed }) => dailyConfirmed
    );
    const cConfirmed = dConfirmed.map(i => Number(i));

    this.setState({
      series: [
        {
          name: "Infected",
          // data: [33, 55, 57, 56, 61, 58, 63, 60, 66]
          data: cConfirmed
        },
        {
          name: "Recovered",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Deceased",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ]
    });
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default Graph;

// export const modifiedDailyData = dailyData.map(data => ({
//   dailyConfirmedCase: data.dailyconfirmed,
//   dailyRecoveredCase: data.dailyrecovered
// }));
// dailyData.length ? console.log(modifiedDailyData) : null;
