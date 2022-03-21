import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import ReactDOM from "react-dom"


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // fetch("/api")
    //   .then(response => response.json())
    //   .them(response => this.setState(response.message))

    this.setState({
      date: new Date()
    })
  }

  render() {
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //   fetch("/api")
    //     .then(response => response.json())
    //     .then(response => setData(response.message))
    // }, [])

    return (
      <div>
        <h4>Clock</h4>
        <h2>{this.state.data.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(

  <Clock />,
  document.getElementById("root")
)

export default Clock;