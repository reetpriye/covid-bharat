import React from "react";
import { fetchDailyData } from "../../api";
import ReactApexChart from "react-apexcharts";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infectedSeries: [
        {
          name: "Infected",
          data: []
        }
      ],
      recoveredSeries: [
        {
          name: "Recovered",
          data: []
        }
      ],
      deceasedSeries: [
        {
          name: "Deceased",
          data: []
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 350
        },
        dataLabels: {
          enabled: false
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
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + " cases";
            }
          }
        }
      }
    };
  }

  async componentDidMount() {
    const fetchData = await fetchDailyData();

    const dailyConfirmed = fetchData.map(el => ({
      dailyConfirmed: el.dailyConfirmed
    }));
    const dConfirmed = dailyConfirmed.map(
      ({ dailyConfirmed }) => dailyConfirmed
    );
    const dailyConfirmedFinal = dConfirmed.map(i => Number(i));

    console.log(dailyConfirmedFinal);

    const dailyRecovered = fetchData.map(el => ({
      dailyRecovered: el.dailyRecovered
    }));
    const dRecovered = dailyRecovered.map(
      ({ dailyRecovered }) => dailyRecovered
    );
    const dailyRecoveredFinal = dRecovered.map(i => Number(i));
    console.log(dailyRecoveredFinal);
    const dailyDeceased = fetchData.map(el => ({
      dailyDeceased: el.dailyDeceased
    }));
    const dDeceased = dailyDeceased.map(({ dailyDeceased }) => dailyDeceased);
    const dailyDeceasedFinal = dDeceased.map(i => Number(i));
    console.log(dailyDeceasedFinal);
    this.setState({
      infectedSeries: [
        {
          name: "Infected",
          // data: [33, 55, 57, 56, 61, 58, 63, 60, 66]
          data: dailyConfirmedFinal
        }
      ],
      recoveredSeries: [
        {
          name: "Recovered",
          data: dailyRecoveredFinal
        }
      ],
      deceasedSeries: [
        {
          name: "Deceased",
          data: dailyDeceasedFinal
        }
      ]
    });
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.infectedSeries}
          height={350}
        />
        <ReactApexChart
          options={this.state.options}
          series={this.state.recoveredSeries}
          height={350}
        />
        <ReactApexChart
          options={this.state.options}
          series={this.state.deceasedSeries}
          height={350}
        />
      </div>
    );
  }
}

export default Graph;
