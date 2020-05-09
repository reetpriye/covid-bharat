import React from "react";
import "./styles.css";
import { Cards, StatePicker, ApexChart, Graph } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";

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
        <span id={styles.heading1}>Covid</span>
        <span id={styles.heading2}>Bharat</span>
        {/* <img className={styles.logo} src={logo} alt="CoVid-19 Bharat" /> */}
        <Cards data={data} />
        <Graph />
        <StatePicker />
        <ApexChart />
      </div>
    );
  }
}

export default App;
