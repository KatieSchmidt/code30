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
    if (this.state.remaining > 1) {
      this.setState(state => ({
        remaining: state.remaining - 1
      }));
    } else {
      clearInterval(this);
      this.setState(state => ({
        remaining: "done!",
        started: false
      }));
    }
  }

  startTimer() {
    this.setState({
      started: true
    });
    setInterval(this.removeOne, 60000);
  }

  render() {
    let timerInfo;
    if (this.state.started === true && this.state.remaining > 1) {
      timerInfo = (
        <p className="timer__minutes">{this.state.remaining} minutes</p>
      );
    }
    if (this.state.started === true && this.state.remaining === 1) {
      timerInfo = <p className="timer__seconds">60 seconds</p>;
    }
    return <div className="timer">{timerInfo}</div>;
  }
}
