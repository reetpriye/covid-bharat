import React from "react";
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
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: "Combined Data"
          }
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      },
      infectedOptions: {
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
          categories: []
        },
        yaxis: {
          title: {
            text: "Number of Cases [Infected]"
          }
        },
        fill: {
          opacity: 1,
          colors: ["#008FFB"]
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + " cases";
            }
          }
        }
      },
      recoveredOptions: {
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
          categories: []
        },
        yaxis: {
          title: {
            text: "Number of Cases [Recovered]"
          }
        },
        fill: {
          opacity: 1,
          colors: ["#00e396"]
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + " cases";
            }
          }
        }
      },
      deceasedOptions: {
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
          categories: []
        },
        yaxis: {
          title: {
            text: "Number of Cases [Deceased]"
          }
        },
        fill: {
          opacity: 1,
          colors: ["#ff6363"]
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

    const dailyRecovered = fetchData.map(el => ({
      dailyRecovered: el.dailyRecovered
    }));
    const dRecovered = dailyRecovered.map(
      ({ dailyRecovered }) => dailyRecovered
    );
    const dailyRecoveredFinal = dRecovered.map(i => Number(i));

    const dailyDeceased = fetchData.map(el => ({
      dailyDeceased: el.dailyDeceased
    }));
    const dDeceased = dailyDeceased.map(({ dailyDeceased }) => dailyDeceased);
    const dailyDeceasedFinal = dDeceased.map(i => Number(i));

    const date = fetchData.map(el => ({
      date: el.date
    }));

    const dDate = date.map(({ date }) => date);
    console.log(this.state.infectedOptions.xaxis.categories);

    this.setState({
      series: [
        {
          name: "Infected",
          data: dailyConfirmedFinal
        },
        {
          name: "Recovered",
          data: dailyRecoveredFinal
        },
        {
          name: "Deceased",
          data: dailyDeceasedFinal
        }
      ],
      options: {
        xaxis: {
          categories: dDate
        }
      },
      infectedOptions: {
        xaxis: {
          categories: dDate
        }
      },
      recoveredOptions: {
        xaxis: {
          categories: dDate
        }
      },
      deceasedOptions: {
        xaxis: {
          categories: dDate
        }
      },
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
          options={this.state.infectedOptions}
          series={this.state.infectedSeries}
          type="bar"
          height={350}
        />
        <ReactApexChart
          options={this.state.recoveredOptions}
          series={this.state.recoveredSeries}
          type="bar"
          height={350}
        />
        <ReactApexChart
          options={this.state.deceasedOptions}
          series={this.state.deceasedSeries}
          type="bar"
          height={350}
        />

        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default Graph;
