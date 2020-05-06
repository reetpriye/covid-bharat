import React from "react";
import "./styles.css";
import Cards from "./components/Cards/Cards";
import Graph from "./components/Graph/Graph";
import StatePicker from "./components/StatePicker/StatePicker";

import { fetchData } from "./api/index";

import styles from "./App.module.css";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards className="App" />
        <Graph />
        <StatePicker />
      </div>
    );
  }
}

export default App;
