import React, { Component } from 'react';

class Camera extends Component {
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
        className="button camera"
        onClick={this.onPressed}>
      </div>
    );
  }
}

export default Camera;
