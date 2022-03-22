import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import ReactDOM from "react-dom"
import s from "./Clock.module.scss"


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;