import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
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
    this.setState({
      series: [
        {
          name: "Infected",
          data: [33, 55, 57, 56, 61, 58, 63, 60, 66]
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

export default ApexChart;
