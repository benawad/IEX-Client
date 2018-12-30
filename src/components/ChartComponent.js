import React from "react";
import Chart from "./Chart";
import { getData } from "./Utils";

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then(data => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return <Chart data={this.state.data} />;
  }
}

export default ChartComponent;