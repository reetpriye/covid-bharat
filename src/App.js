import React from "react";
import { Cards, StatePicker, Graph, Header, Footer } from "./components";
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
        <Header />
        {/* <img className={styles.logo} src={logo} alt="CoVid-19 Bharat" /> */}
        <Cards data={data} />
        <Graph />
        <StatePicker />
        <Footer />
      </div>
    );
  }
}

export default App;
