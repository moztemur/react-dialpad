import React, { Component } from 'react';

class Microphone extends Component {
  constructor() {
    super();
    this.onPressed = this.onPressed.bind(this);
  }

  onPressed() {
    const { onPressed } = this.props;

    onPressed();
  }

  render() {
    return (
      <div
        className="button microphone"
        onClick={this.onPressed}>
      </div>
    );
  }
}

export default Microphone;
