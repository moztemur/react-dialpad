import React, { Component } from 'react';

class DialpadButton extends Component {
  constructor() {
    super();
    this.onPressed = this.onPressed.bind(this);
  }

  onPressed(value) {
    const { onPressed } = this.props;
    onPressed(value);
    // console.log(value);
  }

  render() {
    const { value, letters } = this.props;
    return (
      <div className="dialpad-button" onClick={() => this.onPressed(value)}>
        <div className="value">
          {value}
        </div>
        <div className="letters">
          {letters}
        </div>
      </div>
    );
  }
}

export default DialpadButton;