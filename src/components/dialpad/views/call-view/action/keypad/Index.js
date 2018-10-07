import React, { Component } from 'react';

class Keypad extends Component {
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
        className="button keypad"
        onClick={this.onPressed}>
      </div>
    );
  }
}

export default Keypad;
