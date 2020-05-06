import React from "react";
import "./styles.css";
import Cards from "./components/Cards/Cards";
import Graph from "./components/Graph/Graph";
import StatePicker from "./components/StatePicker/StatePicker";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Cards className="App" />
      <Graph />
      <StatePicker />
    </div>
  );
}
