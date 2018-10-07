import React, { Component } from 'react';

class Speaker extends Component {
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
        className="button speaker"
        onClick={this.onPressed}>
      </div>
    );
  }
}

export default Speaker;
