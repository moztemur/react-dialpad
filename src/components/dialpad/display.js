import React, { Component } from 'react';
import BackButton from './back-button';

class Display extends Component {
  constructor() {
    super();
    this.onChanged = this.onChanged.bind(this);
    this.onBackButtonPressed = this.onBackButtonPressed.bind(this);
  }

  onChanged(event) {
    console.log(event.target.value);
    const { onChanged } = this.props;
    if (onChanged) {
      onChanged(event.target.value);
    }
  }

  onBackButtonPressed() {
    const { onBackButtonPressed } = this.props;
    onBackButtonPressed();
  }

  render() {
    const { value } = this.props;
    return (
      <div className="display">
        <input type="text" value={value} disabled />
        <BackButton onPressed={this.onBackButtonPressed} />
      </div>
    );
  }
}

export default Display;