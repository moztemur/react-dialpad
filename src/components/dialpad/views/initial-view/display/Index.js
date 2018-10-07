import React, { Component } from 'react';

class Display extends Component {
  constructor() {
    super();
  }

  render() {
    const { value } = this.props;

    return (
      <div className="display">
        <input type="text" value={value} disabled />
      </div>
    );
  }
}

export default Display;
