import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      remaining: 30
    };
    this.startTimer = this.startTimer.bind(this);
    this.removeOne = this.removeOne.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  removeOne() {
    if (this.state.remaining > 0) {
      this.setState(state => ({
        remaining: state.remaining - 1
      }));
    } else {
      clearInterval(this);
      this.setState(state => ({
        remaining: "done!"
      }));
    }
  }

  startTimer() {
    setInterval(this.removeOne, 60000);
  }

  render() {
    return (
      <div className="timer">
        <p>{this.state.remaining}</p>
      </div>
    );
  }
}
