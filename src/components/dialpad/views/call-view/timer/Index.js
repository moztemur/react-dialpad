import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
  }

  render() {
    const { timer } = this.props;

    return (
      <div className="timer">
        {timer}
      </div>
    );
  }
}

export default Timer;
