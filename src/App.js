import React from "react";
import "./styles.css";
import { Cards, Graph, StatePicker, ApexChart } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";
import logo from "./images/logo.png";

class App extends React.Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="CoVid-19 Bharat" />
        <Cards data={data} />
        <Graph />
        <StatePicker />
        <ApexChart />
      </div>
    );
  }
}

export default App;
