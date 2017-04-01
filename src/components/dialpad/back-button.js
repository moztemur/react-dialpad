import React, { Component } from 'react';

class BackButton extends Component {
  constructor() {
    super();
    this.onPressed = this.onPressed.bind(this);
  }

  onPressed(value) {
    const { onPressed } = this.props;
    onPressed();
  }

  render() {
    return (
      <div className="back-button" onClick={this.onPressed}>
        back
      </div>
    );
  }
}

export default BackButton;